import {SanPham} from './giaodien'

export class SanPhamGioHang {
    private sanpham: SanPham;
    private soluong: number;

    constructor(sanpham: SanPham, soluong:number = 1){
        this.sanpham = sanpham;
        this.soluong = soluong;
    }
    tinhgia():number{
       return 1
    }
    showSanPham():string{
        return ''
    }
}