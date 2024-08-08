class Personaje {
    private _nivel: number;
    private _vida: number;
    private _estaVivo: boolean;
  
    constructor() {
      this._nivel = 1;
      this._vida = 1000;
      this._estaVivo = true;
    }
  
    get nivel() {
      return this._nivel;
    }
  
    get vida() {
      return this._vida;
    }
  
    get estaVivo() {
      return this._estaVivo;
    }
  
    recibirDanio(danio: number) {
      this._vida -= danio;
      if (this._vida <= 0) {
        this._estaVivo = false;
      }
    }
  
    curarse(cantidad: number) {
      this._vida += cantidad;
      if (this._vida > 1000) {
        this._vida = 1000;
      }
    }
}
  