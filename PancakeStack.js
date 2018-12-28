const HAPPYCAKE = '+';
const SADCAKE = '-';

class PancakeStack {
    constructor(pancakes) {
        this._pancakes = Array.from(pancakes);
        this.flips = 0;
    }

    toString() {
        return this._pancakes.join('');
    }

    flipAt(index) {
        let topStack = this._pancakes.slice(0, index + 1);
        topStack.reverse();

        for (let i in topStack) {
            let isHappycake = (topStack[i] == HAPPYCAKE);
            topStack[i] = isHappycake ? SADCAKE : HAPPYCAKE;
        }

        this._pancakes.splice(0, topStack.length, ...topStack);
        this.flips++;
    }

    makeHappy() {
        // Find the last sadcake or return because the stack is all happycakes!
        let lastSadcakeIndex = this._pancakes.lastIndexOf(SADCAKE);
        if (lastSadcakeIndex == -1) {
            return;
        }

        // If the top is a happycake, find the longest streak of happycakes from the top and flip them all.
        if (this._pancakes[0] == HAPPYCAKE) {
            let firstSadIndex = this._pancakes.indexOf(SADCAKE);
            this.flipAt(firstSadIndex - 1);
        }

        // If the top is a sadcake, flip all the pancakes down to and including the last sadcake.
        else {
            this.flipAt(lastSadcakeIndex);
        }

        // ...and repeat!
        this.makeHappy();
    }
}

module.exports = PancakeStack;
