import ILeather from '../interfaces/i-leather';
import Monster from './monster';

export class Wolf extends Monster implements ILeather {

    private _leather: number;

    get leather(): number {
        return this._leather;
    }

    constructor() {
        super('Loup');
        
        this._leather = this._d4.roll();
    }
}