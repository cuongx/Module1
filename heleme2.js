var hele ={} || hele;
hele.heleMarid= function(){
     $.ajax({
     url: "http://localhost:3000/heleme",
     method : "GET",
     dataType: "json",
     success : function(data){       
        $.each(data,function(i,v){
            $("#heleMarid").append(
                "<div class='col-lg-3 col-md-3 col-sm-12 col-sx-12 border mb-4 ml-5 '>"+              
                "<div class=;card '>"+
                   " <div class='view overlay'>" +
                        "<img class='card-img-top' src='"+ v.avatar+"'  alt=''>"+
                       " <a> <div class='mask rgba-white-slight'></div> </a>"+                            
                   "<div class='card-body'>"     +                 
                       "<h5 class='card-title mb-1 text-danger'>"+v.fullname+"</h5>"+
                        "<span class='badge badge-danger mb-2'>sale</span>" +    
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
                     "<strong class='ml-3'> Giá " + v.dob +" $ </strong>"+
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

hele.init = function(){
    hele.heleMarid();
}

$(document).ready(function(){
  
   hele.init();
});