var hala ={} || hala;
hala.halaMarid= function(){
     $.ajax({
     url: "http://localhost:3000/halama",
     method : "GET",
     dataType: "json",
     success : function(data){       
        $.each(data,function(i,v){
            $("#halaMarid").append(
                "<div class='col-lg-3 col-md-3 col-sm-12 col-sx-12 border mb-4 ml-5 '>"+              
                "<div class=;card '>"+
                   " <div class='view overlay'>" +
                        "<img class='card-img-top' src='"+ v.avatarr+"'  alt=''>"+
                       " <a> <div class='mask rgba-white-slight'></div> </a>"+                            
                   "<div class='card-body'>"     +                 
                       "<h5 class='card-title mb-1 text-danger'>"+v.fullnamee+"</h5>"+
                        "<span class='badge badge-danger mb-2'>bestseller</span>" +    
                        "</div>"+                                              
                        "<div class='card-footer'>"+
                           "<i class='fa fa-star blue-text '></i>"+
                           "<i class='fa fa-star blue-text'></i>"+
                           "<i class='fa fa-star blue-text'></i>"+
                           " <i class='fa fa-star blue-text '></i>"+
                            "<i class='fa fa-star blue-text '></i>"+
                        "</div>"+
                        "<div class='card-footer pb-0 '>"+
                            "<div class='row mb-0'>"+
                               " <span class='float-left'>"+
                     "<a class='ml-3' onclick='hala.showgia("+ v.id+")'> Giá " + v.dobb +" $ </a>"+
                    "</span>"+
                        "<span class='float-right'>"+
                      "<a class=''>"+
                        "<i class='fas fa-shopping-cart ml-2' href=''></i>"+
                     "</a>" +
                   "</span>"+
                " </div>"+
                "</div>"+       
                "</div>"+     
                "</div>"+                                           
                "</div>"
                );
            });
    
        }

 });

};

hala.showgia = function (id) {
    $.ajax({
      url: "http://localhost:3000/halama/"+id,
      method : "GET",
      dataType: "json",
      success : function(data){
        var sp={};
        sp.name = data.fullnamee;
        sp.avatarr = data.avatarr;
        sp.dobb = data.dobb;
        sp.id="1";
        $.ajax({
          url: "http://localhost:3000/spmuon/1",
          method : "PUT",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(sp),
          success : function(data){
            $('#muahangtwo').modal(window.location.href="hoadon2.html");
          }
        })
       
      }       
    })
  }




hala.init = function(){
    hala.halaMarid();
}

$(document).ready(function(){
  
   hala.init();
});