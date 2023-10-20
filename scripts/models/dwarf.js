"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = __importDefault(require("./hero"));
class Dwarf extends hero_1.default {
    get stamina() {
        return super.stamina + 2;
    }
    constructor(name) {
        super(name);
    }
}
exports.default = Dwarf;
