"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("./character"));
// La classe « Hero » hérite de la classe « Character »
class Hero extends character_1.default {
    // Encapsulation
    // - Or
    get gold() {
        return this._gold;
    }
    set gold(value) {
        this._gold = value;
    }
    // - Cuir
    get leather() {
        return this._leather;
    }
    set leather(value) {
        this._leather = value;
    }
    // Constructeur
    constructor(name) {
        super(name);
        this.gold = 0;
        this.leather = 0;
    }
    // Méthodes
    sleep() {
        const healPoint = this.healthMax - this.health;
        this.heal(healPoint);
    }
    loot(target) {
        // En TS => Actuellement, on ne peut pas manipuler les interfaces (via le polymorphisme) pour réaliser des testes :(
        if ("gold" in target) {
            this.gold += target.gold;
        }
        if ("leather" in target) {
            this.leather += target.leather;
        }
    }
}
exports.default = Hero;
