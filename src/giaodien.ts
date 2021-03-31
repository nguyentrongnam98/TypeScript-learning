export class SanPham {
    private _id:number;
    private _ten:string;
    private _gia:number;
    private _mota:string;
    private _trangthai:boolean;
    private _anhsanpham:string;
    constructor(id:number, ten:string, gia:number, mota:string, trangthai:boolean, anhsanpham:string){
        this._id = id;
        this._ten = ten;
        this._gia = gia;
        this._mota = mota;
        this._trangthai = trangthai;
        this._anhsanpham = anhsanpham;
    }
    
    public get id() : number {
        return this._id
    }
    
    public set id(v : number) {
        this._id = v;
    }

    
    public get ten() : string {
        return this._ten
    }
    
    
    public set ten(v : string) {
        this._ten = v;
    }

    
    public get gia() : number {
        return this._gia
    }

    
    public set gia(v : number) {
        this._gia = v;
    }

    
    public get mota() : string {
        return this._mota
    }
    
    public set mota(v : string) {
        this._mota = v;
    }

    
    public get trangthai() : boolean {
        return this._trangthai 
    }
    
    
    public set trangthai(v : boolean) {
        this._trangthai = v;
    }
    
    
    public get anhsanpham() : string {
        return this._anhsanpham
    }
    
    
    public set anhsanpham(v : string) {
        this._anhsanpham = v;
    } 
}