import { generateStats, getModifier } from './../utils/stats.utils';
import Dice from './dice';

export default abstract class Character {

    // Déclaration des champs (field)
    private _name!: string;  // NB : Le "!" permet d'indiqué à TypeStript que la valeur sera bien initiliser
    private _strength: number;
    private _stamina: number;
    private _health: number;

    protected readonly _d4 : Dice;
    protected readonly _d6 : Dice; 

    // Encapsulation
    // - Getter/Setter Name
    get name() {
        return this._name;
    }
    set name(value: string) {
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
        return this.stamina + getModifier(this._stamina);
    }
    // - Getter IsAlive
    get isAlive() {
        return this.health > 0; 
    }

    // Constructeur
    constructor(name: string) {
        this._d4 = new Dice(4);
        this._d6 = new Dice(6);

        this.name = name;
        this._stamina = generateStats(this._d6);
        this._strength = generateStats(this._d6);

        this._health = this.healthMax;
    }

    // Méthodes
    protected takeDammage(dammage: number) {
        if (dammage <= 0) {
            // ↑ Test de garde
            return;
        }

        this._health = Math.max(this._health - dammage, 0); 
    }

    protected heal(healPoint: number) {
        if (healPoint <= 0) {
            return;
        }

        this._health = Math.min(this._health + healPoint, this.healthMax);
    }

    hit(target: Character) {
        const dmg: number = this._d4.roll() + getModifier(this.strength);
        target.takeDammage(dmg);
    }
}