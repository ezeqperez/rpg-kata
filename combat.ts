import { Character } from "./character";

export class Combat {
    constructor(){}

    attack(attacker: Character, defender: Character, distance: number, damage: number){
        if (attacker.isInRange(distance)){
            attacker.deliverDamage(defender, damage)
        }
    }
}