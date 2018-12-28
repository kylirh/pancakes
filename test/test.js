const assert = require('assert');
const PancakeStack = require('../PancakeStack');

describe('PancakeStack', function() {
    describe('Flipping', function() {
        const initialState = '+--+-+';
        let pancakeStack;

        beforeEach(function() {
            pancakeStack = new PancakeStack(initialState);
        });

        it('can return its state as a string', function() {
            assert.equal(initialState, pancakeStack);
        });

        it('can flip the top pancake', function() {
            pancakeStack.flipAt(0);
            assert.equal(pancakeStack, '---+-+');
        });

        it('can flip the bottom pancake', function() {
            pancakeStack.flipAt(5);
            assert.equal(pancakeStack, '-+-++-');
        });

        it('can flip any pancake', function() {
            pancakeStack.flipAt(2);
            assert.equal(pancakeStack, '++-+-+');
        });

        it('keeps track of flips', function() {
            assert.equal(pancakeStack.flips, 0);

            pancakeStack.flipAt(5);
            assert.equal(pancakeStack.flips, 1);

            pancakeStack.flipAt(2);
            assert.equal(pancakeStack.flips, 2);

            pancakeStack.flipAt(4);
            assert.equal(pancakeStack.flips, 3);
        });
    });

    describe('Make happycakes algorithm', function() {
        it('does not flip a single happy pancake', function() {
            let pancakeStack = new PancakeStack('+');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack, '+');
            assert.equal(pancakeStack.flips, 0);
        });

        it('does not flip 3 happy pancakes', function() {
            let pancakeStack = new PancakeStack('+++');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack, '+++');
            assert.equal(pancakeStack.flips, 0);
        });

        it('can make a single unhappy pancake happy in 1 move', function() {
            let pancakeStack = new PancakeStack('-');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 1);
            assert.equal(pancakeStack, '+');
        });

        it('can make "-+" pancakes happy in 1 move', function() {
            let pancakeStack = new PancakeStack('-+');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 1);
            assert.equal(pancakeStack, '++');
        });

        it('can make "+-" pancakes happy in 2 moves', function() {
            let pancakeStack = new PancakeStack('+-');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 2);
            assert.equal(pancakeStack, '++');
        });

        it('can make "---" pancakes happy in 1 move', function() {
            let pancakeStack = new PancakeStack('---');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 1);
            assert.equal(pancakeStack, '+++');
        });

        it('can make "--+-" pancakes happy in 3 moves', function() {
            let pancakeStack = new PancakeStack('--+-');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 3);
            assert.equal(pancakeStack, '++++');
        });

        it('can make "+--+" pancakes happy in 2 moves', function() {
            let pancakeStack = new PancakeStack('+--+');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 2);
            assert.equal(pancakeStack, '++++');
        });

        it('can make "+---" pancakes happy in 2 moves', function() {
            let pancakeStack = new PancakeStack('+---');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 2);
            assert.equal(pancakeStack, '++++');
        });

        it('can make "+--+-+" pancakes happy in 4 moves', function() {
            let pancakeStack = new PancakeStack('+--+-++');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 4);
            assert.equal(pancakeStack, '+++++++');
        });

        it('can make "+--+-++++" pancakes happy in 4 moves', function() {
            let pancakeStack = new PancakeStack('+--+-++++');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 4);
            assert.equal(pancakeStack, '+++++++++');
        });

        it('can make a Paul Bunyan amount of pancakes happy in 32 moves', function() {
            let pancakeStack = new PancakeStack('+--+-++--++-+----+-+---+++++++++----+-+-++--+++---+-+++---+--+-');
            pancakeStack.makeHappy();
            assert.equal(pancakeStack.flips, 32);
        });
    });
});
