import Hero from './hero';

export default class Human extends Hero {

    override get stamina(): number {
        return super.stamina + 1;
    }

    override get strength(): number {
        return super.strength + 1;
    }

    constructor(name: string) {
        super(name);
    }

}