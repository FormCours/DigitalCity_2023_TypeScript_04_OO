
export default class Dice {

    // Champs
    private _min : number;
    private _max : number;

    // Encapsulation
    get min() {
        return this._min;
    }
    get max() {
        return this._max;
    }

    // Constructeur
    constructor(max: number, min : number = 1) {
        this._min = min;
        this._max = max;
    }

    // Méthodes
    roll() {
        return Math.floor(Math.random() * this.max) + this.min;
    }
}