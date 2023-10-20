"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stats_utils_1 = require("./../utils/stats.utils");
const dice_1 = __importDefault(require("./dice"));
class Character {
    // Encapsulation
    // - Getter/Setter Name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    // - Getter Strength
    get strength() {
        return this._strength;
    }
    // - Getter Stamina
    get stamina() {
        return this._stamina;
    }
    // - Getter Health
    get health() {
        return this._health;
    }
    // - Getter HealthMax
    get healthMax() {
        return this.stamina + (0, stats_utils_1.getModifier)(this._stamina);
    }
    // - Getter IsAlive
    get isAlive() {
        return this.health > 0;
    }
    // Constructeur
    constructor(name) {
        this._d4 = new dice_1.default(4);
        this._d6 = new dice_1.default(6);
        this.name = name;
        this._stamina = (0, stats_utils_1.generateStats)(this._d6);
        this._strength = (0, stats_utils_1.generateStats)(this._d6);
        this._health = this.healthMax;
    }
    // Méthodes
    takeDammage(dammage) {
        if (dammage <= 0) {
            // ↑ Test de garde
            return;
        }
        this._health = Math.max(this._health - dammage, 0);
    }
    heal(healPoint) {
        if (healPoint <= 0) {
            return;
        }
        this._health = Math.min(this._health + healPoint, this.healthMax);
    }
    hit(target) {
        const dmg = this._d4.roll() + (0, stats_utils_1.getModifier)(this.strength);
        target.takeDammage(dmg);
    }
}
exports.default = Character;
