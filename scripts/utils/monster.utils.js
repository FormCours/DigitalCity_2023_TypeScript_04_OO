"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMonster = void 0;
const dice_1 = __importDefault(require("../models/dice"));
const dragonet_1 = __importDefault(require("../models/dragonet"));
const orc_1 = __importDefault(require("../models/orc"));
const wolf_1 = require("../models/wolf");
function generateMonster() {
    const result = (new dice_1.default(12)).roll();
    let monster;
    switch (true) {
        case (result <= 6):
            monster = new wolf_1.Wolf();
            break;
        case (result <= 10):
            monster = new orc_1.default();
            break;
        default:
            monster = new dragonet_1.default();
            break;
    }
    return monster;
}
exports.generateMonster = generateMonster;
