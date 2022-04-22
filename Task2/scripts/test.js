import { Selector} from 'testcafe';

fixture`Timer Test`
    .page`http://127.0.0.1:5500/Task2/index.html`;

test('Timer test', async t => {
    await t
        .click('#start')
        .wait(1000)
        .expect(Selector('#time').innerText).notEql('00:00:00.000')
        .click('#stop')
        .click('#reset')
        .expect(Selector('#time').innerText).eql('00:00:00.000');
});