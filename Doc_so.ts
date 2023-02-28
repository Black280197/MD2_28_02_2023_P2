//Nhập vào số n
let n: number = 9999999999;
//Tạo mảng arr để lưu cách gọi của các chữ số
let arr: string[] = ['Không', 'Một','Hai','Ba','Bốn','Năm','Sáu','Bảy','Tám','Chín'];
//Tạo chuỗi s chính là string của số n
let s: string = n.toString();
//Lưu kết quả vào biến result kiểu chuỗi
let result: string = '';
//Biến k để kiểm tra xem đang xét cách gọi của thằng nào, k = 1 là đang xét hàng nghìn, = 2 là hàng triệu và = 3 là hàng tỉ
let k: number = 0;
//Hàm đọc sẽ xử lý và đưa ra cách gọi của một số có 3 chữ số
function doc(s: string): void {
    let t: string = s;
    let h: string ='';
    // console.log(s);
    for (let i: number = 1; i <= 3 - s.length; i++) {
        t = '0' + t;
        // console.log(s);
    };
    switch (k) {
        case 1:
            h = "Nghìn";
            break;
        case 2:
            h = "Triệu";
            break;
        case 3:
            h = "Tỉ";
            break;
        default:
            break;
    }
    result = `${arr[Number(t[0])]} Trăm ${arr[Number(t[1])]} Mươi ${arr[Number(t[2])]} ${h} ` +result;

}
//Xử lý để chia số n thành các phần là các số có 3 chữ số
while (s !== '') {
    if (s.length < 3) {
        doc(s);
        k++;
        break;
    } else {
        let ss: string = s.slice(s.length - 3);
        // console.log(ss);
        doc(ss);
        s = s.slice(0, s.length -3);
        k++;
    }
}
//Hàm và các vòng lặp dưới đây là để định dạng lại cho cách gọi, sẽ chỉ để ký tự đầu viết hoa, đổi "Một mười" thành "Mười", đổi "Mươi năm" thành "Mươi lăm" và đổi "Mười năm" thành "Mười lăm"
function format(s: string): string {
    let format: string = s.toLowerCase();
    s = format[0].toUpperCase() + format.slice(1, format.length-1);
    return s;
}

while (result.indexOf("Không") === 0) {
    result = result.slice(result.indexOf(' ', result.indexOf(' ') + 1) + 1);
}
// console.log(result.indexOf("Một mươi")); result.replace("Một mươi","Mười");
while (result.indexOf("Một Mươi") != -1) {
    result = result.replace("Một Mươi", "Mười");
}
while (result.indexOf("Mươi Năm") != -1) {
    result = result.replace("Mươi Năm", "Mươi Lăm");
}
while (result.indexOf("Mười Năm") != -1) {
    result = result.replace("Mười Năm", "Mười Lăm");
}
console.log(format(result));