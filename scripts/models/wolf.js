"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wolf = void 0;
const monster_1 = __importDefault(require("./monster"));
class Wolf extends monster_1.default {
    get leather() {
        return this._leather;
    }
    constructor() {
        super('Loup');
        this._leather = this._d4.roll();
    }
}
exports.Wolf = Wolf;
