function validasi() {
    var depan = document.getElementById("depan").value;
    var belakang = document.getElementById("belakang").value;
    var alamat = document.getElementById("alamat").value;
    if (depan != "" && belakang!="" && alamat !="" ) {
        return true;
    }else{
        alert('Isi Data Dengan Lengkap Yah!');
    }
}