import { Character } from "./character";

export class Combat {
    constructor(){}

    attack(attacker: Character, defender: Character, distance: number, damage: number){
        if (attacker.isAlly(defender)) return;
        if (!attacker.isInRange(distance)) return;

        attacker.deliverDamage(defender, damage);
    }

    heal(healer: Character, objective: Character, heal: number) {
        if (!healer.isAlly(objective)) return

        healer.deliverHeal(objective, heal)
    }
}