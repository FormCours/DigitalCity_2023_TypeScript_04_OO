"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __importDefault(require("./character"));
class Monster extends character_1.default {
    // Constructeur
    constructor(name) {
        super(name);
    }
}
exports.default = Monster;
