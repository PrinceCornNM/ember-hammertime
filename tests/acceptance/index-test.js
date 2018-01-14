import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

const styleString = 'touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;';

test('visiting /index, ensures we hooked everything up appropriately', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    let linkComponent = find('#indexLink').get(0).getAttribute('style');
    let clickComponent = find('#clickComponent').get(0).getAttribute('style');
    let nativeLink = find('#nativeLink').get(0).getAttribute('style');
    let onClickElement = find('#actionOnClick').get(0).getAttribute('style');
    let actionElement = find('#actionElement').get(0).getAttribute('style');

    assert.equal(linkComponent, styleString, `Actual Link Style: ${linkComponent}`);
    assert.equal(clickComponent, styleString, `Actual Click Component Style: ${clickComponent}`);
    assert.equal(nativeLink, styleString, `Actual Anchor Style: ${nativeLink}`);
    assert.equal(onClickElement, styleString, `Actual onClick Element Style: ${onClickElement}`);
    assert.equal(actionElement, styleString, `Actual action Element Style: ${actionElement}`);
  });
});
