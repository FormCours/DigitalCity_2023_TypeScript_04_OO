"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const monster_1 = __importDefault(require("./monster"));
class Orc extends monster_1.default {
    get strength() {
        return super.strength + 1;
    }
    get gold() {
        return this._gold;
    }
    constructor() {
        super('Orque');
        this._gold = this._d6.roll();
    }
}
exports.default = Orc;
