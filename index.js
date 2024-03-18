function TienDien(){
    let sodiencu = +document.getElementById("sodiencu").value;
    let sodienmoi = +document.getElementById("sodienmoi").value;
    let bac1 = 1806;
    let bac2 = 1866;
    let bac3 = 2167;
    let bac4 = 2729;
    let bac5 = 3050;
    let bac6 = 3151;
    let sokWhSD = sodiencu-sodienmoi;
    let tiendien;
    if(sokWhSD <= 50){
        tiendien = sokWhSD * bac1;
    } else if(51 <= sokWhSD >= 100){
        tiendien = sokWhSD * bac2;
    } else if(101 <= sokWhSD >= 200){
        tiendien = sokWhSD * bac3;
    } else if(201 <= sokWhSD >= 300){
        tiendien = sokWhSD * bac4;
    } else if(301 <= sokWhSD >= 400){
        tiendien = sokWhSD * bac5
    } else {
        tiendien = sokWhSD * bac6;
    }
    document.getElementById("result").innerHTML="Số tiền điện phải trả là = "+ tiendien + " VNĐ ";
}