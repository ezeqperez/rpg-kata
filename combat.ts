import { Character } from "./character";
import { Damageable } from "./Damageable";

export class Combat {
    constructor(){}

    attack(attacker: Character, target: Damageable, distance: number, damage: number){
        if (!attacker.isInRange(distance)) return;
        attacker.deliverDamage(target, damage)
    }

    heal(healer: Character, target: Character, heal: number){        
        healer.deliverHeal(target, heal)
    }
}