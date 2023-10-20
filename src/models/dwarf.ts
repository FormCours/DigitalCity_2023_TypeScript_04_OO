import Hero from './hero';

export default class Dwarf extends Hero {

    override get stamina(): number {
        return super.stamina + 2;
    }

    constructor(name: string) {
        super(name);
    }

}