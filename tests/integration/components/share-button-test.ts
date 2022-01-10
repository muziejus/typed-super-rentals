import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestContext } from 'ember-test-helpers';
import { assert } from '@ember/debug';

class MockRouterService extends Service {
  get currentURL() {
    return '/foo/bar?baz=true#some-section';
  }
}

interface Context extends TestContext {
  tweetParam(param: string): string;
}

module('Integration | Component | share-button', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function(this: Context) {
    this.owner.register('service:router', MockRouterService);

    this.tweetParam = (param) => {
      const link = find('a');
      assert(
        '`link` is an HTMLAnchorElement',
        link instanceof HTMLAnchorElement
      );
      const url = new URL(link.href);
      let value = url.searchParams.get(param);
      if (value === null) {
        return '';
      }

      return value;
    };
  });

  test('basic usage', async function(this: Context, assert) {
    await render(hbs`<ShareButton>Tweet this!</ShareButton>`);

    assert
      .dom('a')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'external nofollow noopener noreferrer')
      .hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/)
      .hasClass('share')
      .hasClass('button')
      .containsText('Tweet this!');

    assert.equal(
      this.tweetParam('url'),
      new URL('/foo/bar?baz=true#some-section', window.location.origin)
    );
  });

  test('it supports passing @text', async function(this: Context, assert) {
    await render(
      hbs`<ShareButton @text="Hello Twitter!">Tweet this!</ShareButton>`
    );

    assert.equal(this.tweetParam('text'), 'Hello Twitter!');
  });

  test('it supports passing @hashtags', async function(this: Context, assert) {
    await render(
      hbs`<ShareButton @hashtags="foo,bar,baz">Tweet this!</ShareButton>`
    );

    assert.equal(this.tweetParam('hashtags'), 'foo,bar,baz');
  });

  test('it supports passing @via', async function(this: Context, assert) {
    await render(hbs`<ShareButton @via="emberjs">Tweet this!</ShareButton>`);
    assert.equal(this.tweetParam('via'), 'emberjs');
  });

  test('it supports adding extra classes', async function(assert) {
    await render(
      hbs`<ShareButton class="extra things">Tweet this!</ShareButton>`
    );

    assert
      .dom('a')
      .hasClass('share')
      .hasClass('button')
      .hasClass('extra')
      .hasClass('things');
  });

  test('the target, rel and href attributes cannot be overridden', async function(assert) {
    await render(
      hbs`<ShareButton target="_self" rel="" href="/">Not a Tweet!</ShareButton>`
    );

    assert
      .dom('a')
      .hasAttribute('target', '_blank')
      .hasAttribute('rel', 'external nofollow noopener noreferrer')
      .hasAttribute('href', /^https:\/\/twitter\.com\/intent\/tweet/);
  });
});
