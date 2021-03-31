import { SanPham } from "./giaodien";
export class Quanlyhang {
    constructor() {
        this.hang = [];
    }
    getAllSanPham() {
        return [];
    }
    getSanphambyId() {
        var motsanpham = new SanPham(1, 'ti vi', 1000, 'samsung', true, 'sp1.jpg');
        return motsanpham;
    }
    addSanpham() {
    }
    showSanpham() {
        return '';
    }
}
