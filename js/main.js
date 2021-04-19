var danhSachNV = new DanhSachNhanVien();

getId("add").addEventListener("click",function(e){
    e.preventDefault();
    var userName = getId("inputName").value;
    var gender = getId("inputGender").value;
    var phone = getId("inputPhone").value;
    var Gmail = getId("inputGmail").value;
    var date = getId("inputDate").value;
    var nv = new NhanVien(userName,gender,phone,Gmail,date);
    danhSachNV.addUser(nv);
    console.log(danhSachNV.arr);
    taoBang(danhSachNV.arr);

})
function taoBang(arr){
    var content = ``;
    arr.forEach(function(element) {
        content+=`
        <tr>
            <td>${element.userName}</td>
            <td>${element.gioiTinh}</td>
            <td>${element.phone}</td>
            <td>${element.gmail}</td>
            <td>${element.date}</td>
 
        </tr>
        `;
    });
    getId("DataCheck").innerHTML=content;
}

function getId(id){
    return document.getElementById(id);
} 