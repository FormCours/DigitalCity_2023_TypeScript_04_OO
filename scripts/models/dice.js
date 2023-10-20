"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dice {
    // Encapsulation
    get min() {
        return this._min;
    }
    get max() {
        return this._max;
    }
    // Constructeur
    constructor(max, min = 1) {
        this._min = min;
        this._max = max;
    }
    // Méthodes
    roll() {
        return Math.floor(Math.random() * this.max) + this.min;
    }
}
exports.default = Dice;
