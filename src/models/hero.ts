import IGold from '../interfaces/i-gold';
import ILeather from '../interfaces/i-leather';
import Character from './character';
import Monster from './monster';

// La classe « Hero » hérite de la classe « Character »

export default abstract class Hero extends Character implements IGold, ILeather {

    // Déclaration des champs 
    private _gold! : number;
    private _leather! : number;

    // Encapsulation
    // - Or
    get gold(): number {
        return this._gold;
    }
    private set gold(value: number) {
        this._gold = value;
    }
    // - Cuir
    public get leather() : number {
        return this._leather;
    }
    public set leather(value : number) {
        this._leather = value;
    }

    // Constructeur
    constructor(name: string) {
        super(name);
        this.gold = 0;
        this.leather = 0;
    }

    // Méthodes
    sleep() : void {
        const healPoint = this.healthMax - this.health;
        this.heal(healPoint);
    }

    loot(target: Monster) {
        // En TS => Actuellement, on ne peut pas manipuler les interfaces (via le polymorphisme) pour réaliser des testes :(

        if("gold" in target) {
            this.gold += target.gold as number;
        }

        if("leather" in target) {
            this.leather += target.leather as number;
        }
    }
}