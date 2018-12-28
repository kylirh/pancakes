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
            let isHappyCake = (topStack[i] == HAPPYCAKE);
            topStack[i] = isHappyCake ? SADCAKE : HAPPYCAKE;
        }

        this._pancakes.splice(0, topStack.length, ...topStack);
        this.flips++;
    }

    makeHappy() {
        // TODO: Implement flipping pancakes to all happy algorithm here.
    }
}

module.exports = PancakeStack;
