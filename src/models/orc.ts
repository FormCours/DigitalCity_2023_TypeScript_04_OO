import IGold from '../interfaces/i-gold';
import Monster from './monster';


export default class Orc extends Monster implements IGold {

    private _gold: number;

    override get strength(): number {
        return super.strength + 1;
    }

    get gold() {
        return this._gold;
    }

    constructor() {
        super('Orque');

        this._gold = this._d6.roll();
    }
}