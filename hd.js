var hoadon=hoadon || {};
hoadon.drawHd=function(){
    $.ajax({
        url: "http://localhost:3000/spmua/1",
        method : "GET",
        dataType: "json",
        success: function(data){
            $('#muahang').find('#name').text(data.ten);
            $('#muahang').find('#gia').text(data.dob);
            document.getElementById("anh").setAttribute('src', data.avatar);
        }
      })
    }

   

hoadon.init=function(){
    hoadon.drawHd();
}

$(document).ready(function(){
    hoadon.init();
})