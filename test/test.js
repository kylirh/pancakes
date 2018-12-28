const assert = require('assert');
const PancakeStack = require('../PancakeStack');

describe('PancakeStack', function() {
    it('can return its state as a string', function() {
        let initialState = '+--+-+';
        let pancakeStack = new PancakeStack(initialState);
        assert.equal(initialState, pancakeStack.toString());
    });
});
