export class Range {
    private _maxRange: number; 

    constructor(range: number) {
        this._maxRange = range
    }

    get range() {
        return this._maxRange
    }
}

export class Position {
    private _position: number;

    // constructor(range: number) {
    //     this._maxRange = range
    // }

    // get range() {
    //     return this._maxRange
    // }
}