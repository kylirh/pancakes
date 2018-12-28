const HAPPYCAKE = '+';
const SADCAKE = '-';

class PancakeStack {
    constructor(pancakes) {
        this._pancakes = Array.from(pancakes);
    }

    toString() {
        return this._pancakes.join('');
    }

    flip() {
        this._pancakes.reverse();
        for (let index in this._pancakes) {
            let isHappyCake = (this._pancakes[index] == HAPPYCAKE);
            this._pancakes[index] = isHappyCake ? SADCAKE : HAPPYCAKE;
        }
    }
}

module.exports = PancakeStack;
