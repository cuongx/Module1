var product = product || {}
product.showProducts= function(){
    $.ajax({
    url: "http://localhost:3000/Students",
    method : "GET",
    dataType: "json",
    success : function(data){
       $.each(data,function(i,v){
           $("#showProducts").append(
              "<div class='col-lg-3 col-md-6 mb-2'>" +   
                    "<div class='card h-100 my-2'>"+
                      "<img class='card-img-top' src='" + v.avatar +"' width='200px' height='150px' alt=''>"+
                      "<div class='card-body'>"+
                        "<h4 class='card-title text-primary'href='#'>" + v.fullname + "</h4>"+                                         
                      "</div>"+                    
                      "<div class='card-footer bg-danger'>"+
                      "<i class='fa fa-star' style='font-size:15px;color:yellow'></i>"+
                      "<i class='fa fa-star' style='font-size:15px;color:yellow'></i>"+
                      "<i class='fa fa-star' style='font-size:15px;color:yellow'></i>"+
                      "<i class='fa fa-star' style='font-size:15px;color:yellow'></i>"+
                      "<i class='fa fa-star' style='font-size:15px;color:yellow'></i>"+      
                      "</div>"+
                      "<div class='card-footer tp_product_price'>"+
                        "<a href ='#' class='tp_product_price font-weight-bold' onclick='product.showgia(" + v.id +")'> Giá " + v.dob + " $ </a>"+  
                        "<i class='fas fa-shopping-cart ml-1 '></i>"+                                                       
                      "</div>"+
                      "</div>"+
                      "</div>"                            
               );
           });  
         }
      });
    };

    product.showgia = function (id) {
      $.ajax({
        url: "http://localhost:3000/Students/"+id,
        method : "GET",
        dataType: "json",
        success : function(data){
          var sanpham={};
          sanpham.ten=data.fullname;
          sanpham.avatar=data.avatar;
          sanpham.dob=data.dob;
          sanpham.id="1";
          $.ajax({
            url: "http://localhost:3000/spmua/1",
            method : "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(sanpham),
            success : function(data){
              $('#muahang').modal(window.location.href="hoadon.html");
            }
          })
         
        }
              
  
      })
  }








$('.carousel').carousel({
	interval: 1500
})

product.Students= function() {
  $(document).ready(function(){
    $('#myModal').click(function(){
      $('.toast').toast({animation: false, delay: 2000});
      $('.toast').toast('show');
    });
  });
}


$(document).ready(function (){
  $("#anythingSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


product.init = function(){
    product.showProducts();
}

$(document).ready(function(){
  
   product.init();
});

