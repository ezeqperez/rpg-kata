export class Character {
    private _level: number;
    private _health: number;
    private _isAlive: boolean;
  
    constructor() {
      this._level = 1;
      this._health = 1000;
      this._isAlive = true;
    }
  
    get level() {
      return this._level;
    }
  
    get health() {
      return this._health;
    }
  
    get isAlive() {
      return this._isAlive;
    }
  
    receiveDamage(damage: number) {
        if (damage >= this._health) {
            this._health = 0
            this._isAlive = false
        } else {
            this._health -= damage;
      }
    }

    deliverDamage(character: Character, damage: number) {
        character.receiveDamage(damage);
    }
  
    receiveHeal(amount: number) {
        if (this._isAlive) {
            this._health += amount
            if (this._health > 1000) {
                this._health = 1000;
            }
        }
    }

    deliverHeal(character: Character, heal: number) {
        character.receiveHeal(heal);
    }

}
  