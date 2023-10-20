"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const monster_1 = __importDefault(require("./monster"));
class Dragonet extends monster_1.default {
    get gold() {
        return this._gold;
    }
    get leather() {
        return this._leather;
    }
    get stamina() {
        return super.stamina + 1;
    }
    constructor() {
        super('Dragonnet');
        this._gold = this._d6.roll();
        this._leather = this._d4.roll();
    }
}
exports.default = Dragonet;
