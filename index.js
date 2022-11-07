//Bài 1: Tính tiền lương nhân viên

/** SƠ ĐỒ 3 KHỐI
 * input: lương 1 ngày,số ngày làm
 * process: 
 *      1. Lấy input: lương 1 ngày=100000, số ngày làm = 26
 *      2. Công thức tính lương = lương 1 ngày * số ngày làm
 *      3. In output ra màn hình
 * output: lương
 */
function totalSalary() {
    var salaryPerDay = document.getElementById("salaryPerDay").value * 1;
    var workDays = document.getElementById("workDays").value * 1;
    var totalSalary = 0;
    content = "";
    totalSalary = salaryPerDay * workDays;
    content = "=> Tổng tiền lương nhân viên là: " + totalSalary;
    document.getElementById("print").innerHTML = content;
    document.getElementById("print").classList.add("info");
    
}

 
 //Bài 2: Tính giá trị trung bình
 /**SƠ ĐỒ 3 KHỐI
  * input: nhập vào 5 số thực
  * process: 
  *      1. Input: nhâp vào 5 số thực: numR1 = 15.5, numR2 = -3.5,
  *       numR3 = 30, numR4 = 100, numR5 = 0
  *      2. Tính giá trị trung bình = (numR1 + numR2 + numR3 + numR4 + numR5) / 5
  *      3. In kết quả
  * output: Giá trị trung bình
  * 
  */
 function averageValue() {
    var numR1 = document.getElementById("numR1").value * 1;
    var numR2 = document.getElementById("numR2").value * 1;
    var numR3 = document.getElementById("numR3").value * 1;
    var numR4 = document.getElementById("numR4").value * 1;
    var numR5 = document.getElementById("numR5").value * 1;
    var averageValue = 0;
    var content = "";
    var averageValue = (numR1 + numR2 + numR3 + numR4 + numR5)/5;
    content = "=> Giá trị trung bình của 5 số thực là: " + averageValue;
    document.getElementById("show").innerHTML = content;
    document.getElementById("show").classList.add("info");
 }


 // Bài 3: Quy đổi tiên tệ
 /**SƠ ĐỒ 3 KHÔI
  * input: Tỷ giá oneUsd = 23500 VND, số tiền usd
  * process: 
  *      1. Input:  oneUsd = 23500 , Số tiền Usd = 1000
  *      2. Tính số tiền quy đổi VND = oneUsd * số tiền Usd
  *      3. In kết quả
  * output: Số tiền quy đổi VND
  * 
  */
 function exchangeMoney() {
    var oneUsd = document.getElementById("oneUsd").value * 1;
    var numberOfUsd = document.getElementById("numberOfUsd").value * 1;
    var vndConversionAmount = 0;
    content = "";
    if (numberOfUsd > 0) {
        var vndConversionAmount = oneUsd * numberOfUsd;
        content = numberOfUsd + " USD quy đổi sang VND là: " + vndConversionAmount;
        document.getElementById("showMoney").innerHTML = content;
       

    }
   
    else {
        content = "Nhập giá trị không phù hơp, giá trị nhập vào phải dương";
    document.getElementById("showMoney").innerHTML = content;
    }
    
    document.getElementById("showMoney").classList.add("info"); 

 }

 // Bài 4: Tính diện tích, chu vi hình chữ nhật
 /**SƠ ĐỒ 3 KHÔI
  * input: chiều dài, chiều rộng
  * process: 
  *      1. Input: chiều dài = 6; chiều rộng = 4;
  *      2. Công thức tính diện tính, chu vi:
  *          diện tích = chiều dài* chiều rộng;
  *          chuvi = (chiều dài + chiều rộng) * 2;
  *      3. In kết quả
  * output: diện tích, chu vi
  */
 function calculate() {
    var length = document.getElementById("length").value * 1;
    var width = document.getElementById("width").value * 1;
    var area = 0;
    var perimeter = 0;
    var content ="";
    if ((length>0)&&(width>0)) {
        area = length * width;
    perimeter = (length + width)*2;
    content = "Chu vi HCN là: " + perimeter + ", diện tích HCN là: " + area;
    
    }
    else {
        content = " Nhập giá trị không đúng hai cạnh HCN ";
    }
    document.getElementById("show_1").innerHTML = content;
    document.getElementById("show_1").classList.add("info");
 }

 // Bài 5: Tính tổng 2 ký số
 /**SƠ ĐỒ 3 KHỐI
  * input:  số có 2 chữ số
  * process:
  *      1. Input: n = 46; tạo biến ten, unit, sum
  *      2.  Tách số hàng chục: ten = Math.floor(n / 10);
  *          Tách số hàng đơn vị: unit = n % 10;
  *          Tổng 2 ký số = ten + unit;
  *      3. In kết quả
  * output: 
  */
 function sum() {
    var num_1 = document.getElementById("num_1").value * 1;
    var ten;
    var unit;
    var sum;
    var content = "";
    ten = Math.floor(num_1 / 10);
    unit = num_1 % 10;
    sum = ten + unit;
    content = "Tổng hai ký số là: " + sum;
    document.getElementById("show_2").innerHTML = content;
    document.getElementById("show_2").classList.add("info");


 }