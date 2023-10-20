import Dice from '../models/dice';
import Dragonet from '../models/dragonet';
import Monster from '../models/monster';
import Orc from '../models/orc';
import { Wolf } from '../models/wolf';

export function generateMonster(): Monster {
    const result = (new Dice(12)).roll();

    let monster: Monster;

    switch (true) {

        case (result <= 6):
            monster = new Wolf();
            break;
        case (result <= 10):
            monster = new Orc();
            break;
        default:
            monster = new Dragonet();
            break;
    }

    return monster;
}