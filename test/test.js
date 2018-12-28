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
        pancakeStack.flipAt(5);
        assert.equal(pancakeStack, '-+-++-');
    });

    it('can flip the top pancake', function() {
        pancakeStack.flipAt(0);
        assert.equal(pancakeStack, '---+-+');
    });

    it('can flip any pancake', function() {
        pancakeStack.flipAt(2);
        assert.equal(pancakeStack, '++-+-+');
    });
});
