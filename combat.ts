import { Character } from "./character";
import { HealthEntity } from "./healthEntity";

export class Combat {
    constructor(){}

    attack(attacker: Character, target: HealthEntity, distance: number, damage: number){
        if (!attacker.isInRange(distance)) return;
        attacker.deliverDamage(target, damage)
    }

    heal(healer: Character, target: Character, heal: number){        
        healer.deliverHeal(target, heal)
    }
}