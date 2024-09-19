import { Character } from './character'; // Ajusta la ruta si tu archivo Character está en otro lugar
import { Combat } from './combat';

describe('Character', () => {

    it('debe crearse inicialmente con nivel 1, 1000 de vida y estar vivo', () => {
        const character = new Character();
        expect(character.health).toBe(1000);
        expect(character.level).toBe(1);
        expect(character.isAlive).toBe(true);
    });

    it('debe recibir daño y morir cuando la vida llega a cero', () => {
        const attacker = new Character();
        const defender = new Character();

        expect(defender.health).toBe(1000);
        expect(defender.isAlive).toBe(true);

        attacker.deliverDamage(defender, 1000);
        expect(defender.health).toBe(0);
        expect(defender.isAlive).toBe(false);
    });

    it('debe recibir 500 de daño y tener 500 de vida totales', () => {
        const attacker = new Character();
        const defender = new Character();

        expect(defender.health).toBe(1000);
        expect(defender.isAlive).toBe(true);

        attacker.deliverDamage(defender, 500);
        expect(defender.health).toBe(500);
        expect(defender.isAlive).toBe(true);
    });

    it('un personaje debe hacerle daño a otro personaje', () => {
        const attacker = new Character();
        const defender = new Character();

        attacker.deliverDamage(defender, 500);
        expect(defender.health).toBe(500);
        expect(defender.isAlive).toBe(true);
    });

    it('un personaje debe hacer daños consecutivos', () => {
        const attacker = new Character();
        const defender = new Character();

        attacker.deliverDamage(defender, 1);
        attacker.deliverDamage(defender, 10);
        attacker.deliverDamage(defender, 100);
        expect(defender.health).toBe(889);
        expect(defender.isAlive).toBe(true);
    });

    it('un personaje debe hacer daños consecutivos mortales, la vida debe quedar en 0 y matarlo', () => {
        const attacker = new Character();
        const defender = new Character();

        attacker.deliverDamage(defender, 1000);
        attacker.deliverDamage(defender, 10);
        attacker.deliverDamage(defender, 100);
        expect(defender.health).toBe(0);
        expect(defender.isAlive).toBe(false);
    });

    it('un personaje debe hacerle daño igual a la vida del Defender y matarlo', () => {
        const attacker = new Character();
        const defender = new Character();

        attacker.deliverDamage(defender, 1000);
        expect(defender.health).toBe(0);
        expect(defender.isAlive).toBe(false);
    });

    it('un personaje debe hacerle daño mortalmente excesivo a otro personaje, matarlo y dejarlo en 0 de vida', () => {
        const attacker = new Character();
        const defender = new Character();

        attacker.deliverDamage(defender, 15000000000);
        expect(defender.health).toBe(0);
        expect(defender.isAlive).toBe(false);
    });

    it('un personaje no debe recibir curación si está muerto', () => {
        const healer = new Character();
        const attacker = new Character();

        attacker.deliverDamage(healer, 1000);
        healer.receiveHeal(100);
        expect(healer.health).toBe(0);
        expect(healer.isAlive).toBe(false);
    });

    it('un personaje no debe recibir curación mayor a su vida total', () => {
        const healer = new Character();

        healer.receiveHeal(100);
        expect(healer.health).toBe(1000);
        expect(healer.isAlive).toBe(true);
    });

    it('un personaje debe hacerle daño a otro personaje, no a si mismo', () => {
        const attacker = new Character();

        attacker.deliverDamage(attacker, 500);
        expect(attacker.health).toBe(1000);
    });

    it('un personaje debe curarse sólo a si mismo', () => {
        const healer = new Character();
        const attacker = new Character();

        attacker.deliverDamage(healer, 500);
        healer.receiveHeal(500);
        expect(healer.health).toBe(1000);
    });

    it('un personaje con 5 niveles más que el atacante, recibe 50% menos de daño', () => {
        const attacker = new Character();
        const defender = new Character();

        defender.level = 6
        attacker.deliverDamage(defender, 600)
        expect(defender.health).toBe(700)
    });

    it('un personaje con 5 niveles menos que el atacante, recibe 50% más de daño', () => {
        const attacker = new Character();
        const defender = new Character();

        attacker.level = 6
        attacker.deliverDamage(defender, 600)
        expect(defender.health).toBe(100)
    });

    it('un personaje puede unirse a una facción', () => {
        const character = new Character();

        character.enterFaction('Alianza')
        expect(character.factions).toContain('Alianza')
    });

    it('un personaje puede unirse a más de una facción', () => {
        const character = new Character();

        character.enterFaction('Alianza')
        character.enterFaction('Horda')
        expect(character.factions).toStrictEqual(['Alianza', 'Horda'])
    });

    it('un personaje puede unirse a más de una facción y salir de una', () => {
        const character = new Character();

        character.enterFaction('Alianza')
        character.enterFaction('Horda')
        character.leaveFaction('Alianza')
        expect(character.factions).toStrictEqual(['Horda'])
    });

    it('un personaje puede unirse a más de una facción y salir de todas', () => {
        const character = new Character();

        character.enterFaction('Alianza')
        character.enterFaction('Horda')
        character.leaveFaction('Alianza')
        character.leaveFaction('Horda')
        expect(character.factions).toStrictEqual([])
    });

    it('los personajes pertenecientes a la misma facción, son aliados', () => {
        const character = new Character();
        const ally = new Character();

        character.enterFaction('Alianza')
        ally.enterFaction('Alianza')
        expect(character.isAlly(ally)).toBe(true)
    });

    it('los personajes pertenecientes a la diferentes facciones, no son aliados', () => {
        const character = new Character();
        const notAlly = new Character();

        character.enterFaction('Alianza')
        notAlly.enterFaction('Horda')
        expect(character.isAlly(notAlly)).toBe(false)
    });

    it('los personajes pertenecientes a la misma facción, no se pueden hacer saño', () => {
        const character = new Character();
        const ally = new Character();

        character.enterFaction('Alianza')
        ally.enterFaction('Alianza')
        character.deliverDamage(ally, 200);
        expect(ally.health).toBe(1000)
    });

    it('los personajes pertenecientes a la misma facción, se pueden curar', () => {
        const character = new Character();
        const ally = new Character();
        const notAlly = new Character();

        const enterCombat = new Combat();

        character.enterFaction('Horda')
        ally.enterFaction('Horda')
        notAlly.enterFaction('Alianza')
        notAlly.deliverDamage(ally, 200);
        expect(ally.health).toBe(800)
        enterCombat.heal(character, ally, 200)
        expect(ally.health).toBe(1000)
    });
});