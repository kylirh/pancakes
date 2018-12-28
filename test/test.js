const assert = require('assert');
const PancakeStack = require('../PancakeStack');

describe('PancakeStack', function() {
    const initialState = '+--+-+';
    let pancakeStack;

    beforeEach(function() {
        pancakeStack = new PancakeStack(initialState);
    });

    it('can return its state as a string', function() {
        assert.equal(initialState, pancakeStack);
    });

    it('can flip a stack of pancakes', function() {
        pancakeStack.flip();
        assert.equal(pancakeStack, '-+-++-');
    });
});
