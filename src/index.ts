import Character from './models/character';
import Dice from './models/dice';
import Hero from './models/hero';
import Human from './models/human';
import Monster from './models/monster';
import { generateMonster } from './utils/monster.utils';

const demo : Character = new Human('Zaza');
(demo as Hero)?.sleep();

if(demo instanceof Hero) {
    demo.sleep();
}


const hero : Hero = new Human('Della');

const d2 = new Dice(2);
while(hero.isAlive) {

    const monster : Monster = generateMonster();
    console.log(`${hero.name} rencontre un ${monster.name}`);

    let initiative: boolean = d2.roll() === 1;
    while(hero.isAlive && monster.isAlive) {

        if(initiative) {
            hero.hit(monster);
        }
        else {
            monster.hit(hero);
        }

        initiative = !initiative;
    }

    if(hero.isAlive) {
        console.log(`${hero.name} a vaincu le monstre !`);
        
        hero.loot(monster);
        hero.sleep();
    }
}

console.log(`${hero.name} n'a pas survecu  à son dernier combat :(`);
console.log(`Resultat de la run : \n - Or: ${hero.gold} \n - Cuir: ${hero.leather}`);









