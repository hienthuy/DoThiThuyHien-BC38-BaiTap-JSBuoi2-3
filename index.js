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
    content = "Tổng tiền lương nhân viên là: " + totalSalary;
    document.getElementById("print").innerHTML = content;
    document.getElementById("print").classList.add("info");
    
}

