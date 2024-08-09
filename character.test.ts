import { Character } from './character'; // Ajusta la ruta si tu archivo Character está en otro lugar

describe('Character', () => {

    it('debe crearse inicialmente con nivel 1, 1000 de vida y estar vivo', () => {
        const character = new Character();
        expect(character.health).toBe(1000);
        expect(character.level).toBe(1);
        expect(character.isAlive).toBe(true);
    });

    it('debe recibir daño y morir cuando la vida llega a cero', () => {
        const character = new Character();
        expect(character.health).toBe(1000);
        expect(character.isAlive).toBe(true);

        character.receiveDamage(1000);
        expect(character.health).toBe(0);
        expect(character.isAlive).toBe(false);
    });

    it('debe recibir 500 de daño y tener 500 de vida totales', () => {
        const character = new Character();
        expect(character.health).toBe(1000);
        expect(character.isAlive).toBe(true);

        character.receiveDamage(500);
        expect(character.health).toBe(500);
        expect(character.isAlive).toBe(true);
    });

    it('un personaje debe hacerle daño a otro personaje', () => {
        const characterAttacker = new Character();
        const characterDefender = new Character();

        characterAttacker.deliverDamage(characterDefender, 500);
        expect(characterDefender.health).toBe(500);
        expect(characterDefender.isAlive).toBe(true);
    });

    it('un personaje debe hacer daños consecutivos', () => {
        const characterAttacker = new Character();
        const characterDefender = new Character();

        characterAttacker.deliverDamage(characterDefender, 1);
        characterAttacker.deliverDamage(characterDefender, 10);
        characterAttacker.deliverDamage(characterDefender, 100);
        expect(characterDefender.health).toBe(889);
        expect(characterDefender.isAlive).toBe(true);
    });

    it('un personaje debe hacer daños consecutivos mortales, la vida debe quedar en 0 y matarlo', () => {
        const characterAttacker = new Character();
        const characterDefender = new Character();

        characterAttacker.deliverDamage(characterDefender, 1000);
        characterAttacker.deliverDamage(characterDefender, 10);
        characterAttacker.deliverDamage(characterDefender, 100);
        expect(characterDefender.health).toBe(0);
        expect(characterDefender.isAlive).toBe(false);
    });

    it('un personaje debe hacerle daño igual a la vida del Defender y matarlo', () => {
        const characterAttacker = new Character();
        const characterDefender = new Character();

        characterAttacker.deliverDamage(characterDefender, 1000);
        expect(characterDefender.health).toBe(0);
        expect(characterDefender.isAlive).toBe(false);
    });


    it('un personaje debe hacerle daño mortalmente excesivo a otro personaje, matarlo y dejarlo en 0 de vida', () => {
        const characterAttacker = new Character();
        const characterDefender = new Character();

        characterAttacker.deliverDamage(characterDefender, 15000000000);
        expect(characterDefender.health).toBe(0);
        expect(characterDefender.isAlive).toBe(false);
    });

    it('un personaje debe recibir curación', () => {
        const healer = new Character();
        const pacient = new Character();

        healer.deliverDamage(pacient, 500);
        healer.deliverHeal(pacient, 100);
        expect(pacient.health).toBe(600);
        expect(pacient.isAlive).toBe(true);
    });

    it('un personaje no debe recibir curación si está muerto', () => {
        const healer = new Character();
        const pacient = new Character();

        healer.deliverDamage(pacient, 1000);
        healer.deliverHeal(pacient, 100);
        expect(pacient.health).toBe(0);
        expect(pacient.isAlive).toBe(false);
    });

    it('un personaje no debe recibir curación mayor a su vida total', () => {
        const healer = new Character();
        const pacient = new Character();

        healer.deliverHeal(pacient, 100);
        expect(pacient.health).toBe(1000);
        expect(pacient.isAlive).toBe(true);
    });
});