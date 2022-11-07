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
