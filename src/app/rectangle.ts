import { IArea } from './iarea';
import { Shape } from './shape';
export class Rectangle extends Shape implements IArea {
    private     _width: number;
    private     _height: number;
    // constructor(width:number, height:number){
    //     this.
    // }
    constructor(x:number, y:number, width:number, height:number){
        super(x,y);
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get height() {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }
    area(){
        return this._width*this._height;    
    }
}
