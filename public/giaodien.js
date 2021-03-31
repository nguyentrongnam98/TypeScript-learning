export class SanPham {
    constructor(id, ten, gia, mota, trangthai, anhsanpham) {
        this._id = id;
        this._ten = ten;
        this._gia = gia;
        this._mota = mota;
        this._trangthai = trangthai;
        this._anhsanpham = anhsanpham;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get ten() {
        return this._ten;
    }
    set ten(v) {
        this._ten = v;
    }
    get gia() {
        return this._gia;
    }
    set gia(v) {
        this._gia = v;
    }
    get mota() {
        return this._mota;
    }
    set mota(v) {
        this._mota = v;
    }
    get trangthai() {
        return this._trangthai;
    }
    set trangthai(v) {
        this._trangthai = v;
    }
    get anhsanpham() {
        return this._anhsanpham;
    }
    set anhsanpham(v) {
        this._anhsanpham = v;
    }
}
