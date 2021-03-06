const { assert } = require("chai");

const SaladToken = artifacts.require('SaladToken');

contract('SaladToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.salad = await SaladToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.salad.mint(alice, 1000, { from: minter });
        assert.equal((await this.salad.balanceOf(alice)).toString(), '1000');
    })
});
