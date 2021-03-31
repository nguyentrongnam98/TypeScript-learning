import { SanPham } from "./giaodien"
export class Quanlyhang {
    private hang : SanPham[] = [];
    constructor(){

    }
    getAllSanPham():SanPham[]{
        return []
    }
    getSanphambyId():SanPham{
        var motsanpham = new SanPham(1,'ti vi',1000,'samsung',true,'sp1.jpg')
        return motsanpham
    }
    addSanpham():void {

    }
    showSanpham():string {
        return ''
    }
}