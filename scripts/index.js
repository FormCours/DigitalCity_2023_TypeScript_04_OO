"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dice_1 = __importDefault(require("./models/dice"));
const hero_1 = __importDefault(require("./models/hero"));
const human_1 = __importDefault(require("./models/human"));
const monster_utils_1 = require("./utils/monster.utils");
const demo = new human_1.default('Zaza');
demo === null || demo === void 0 ? void 0 : demo.sleep();
if (demo instanceof hero_1.default) {
    demo.sleep();
}
const hero = new human_1.default('Della');
const d2 = new dice_1.default(2);
while (hero.isAlive) {
    const monster = (0, monster_utils_1.generateMonster)();
    console.log(`${hero.name} rencontre un ${monster.name}`);
    let initiative = d2.roll() === 1;
    while (hero.isAlive && monster.isAlive) {
        if (initiative) {
            hero.hit(monster);
        }
        else {
            monster.hit(hero);
        }
        initiative = !initiative;
    }
    if (hero.isAlive) {
        console.log(`${hero.name} a vaincu le monstre !`);
        hero.loot(monster);
        hero.sleep();
    }
}
console.log(`${hero.name} n'a pas survecu  à son dernier combat :(`);
console.log(`Resultat de la run : \n - Or: ${hero.gold} \n - Cuir: ${hero.leather}`);
