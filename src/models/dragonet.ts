import IGold from '../interfaces/i-gold';
import ILeather from '../interfaces/i-leather';
import Monster from './monster';

export default class Dragonet extends Monster implements IGold, ILeather {

    private _gold: number;
    private _leather: number;


    get gold(): number {
        return this._gold;
    }

    get leather(): number {
        return this._leather;
    }

    override get stamina(): number {
        return super.stamina + 1;
    }

    constructor() {
        super('Dragonnet');
        this._gold = this._d6.roll();
        this._leather = this._d4.roll();
    }

}