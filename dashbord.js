var dashbord ={} || dashbord;
dashbord.drawTable= function(){
     $.ajax({
     url: "http://localhost:3000/Students",
     method : "GET",
     dataType: "json",
     success : function(data){
         $('#tbStudent').empty();
        $.each(data,function(i,v){
            $("#tbStudent").append(
                "<tr>"+
                "<td>"+ (v.id) +"</td>"+
                "<td>" + v.fullname + "</td>"+
                "<td><img src='"+ v.avatar +"' width='200px' height='100px' /></td>"+
                "<td>"+ v.dob +"</td>"+
                "<td>"+
                    "<a href='javascript:;' title='edit dashbord' onclick='dashbord.get("+ v.id +")'><i class='fa fa-edit'></i></a> " +
                    "<a href='javascript:;' title='remove dashbord' onclick='dashbord.delete("+ v.id +")'><i class='fa fa-trash ml-2'></i></a>" +
                "</td>"+
            "</tr>"
                );
            });
    
        }

 });

};


dashbord.openModel= function(){
    dashbord.reset();
    $('#myModal').modal('show')
   
}
dashbord.save= function(){
  if($('#formEditStudent').valid()){
     var dashbordObj ={};
     dashbordObj.fullname= $ ('#Fullname').val();
     dashbordObj.avatar=   $('#Avatar').val();
     dashbordObj.dob=      $('#DOB').val();
  
  $.ajax({
    url: "http://localhost:3000/Students",
    method: "POST",
    dataType:"json",
    contentType: "application/json",
    data: JSON.stringify(dashbordObj),
    success: function(data){
        $('#myModal').modal('hide');
            dashbord.drawTable();
    } 
   })
  
  } 
};
dashbord.delete = function(id){
    bootbox.confirm({
        title: "Remove Student",
        message: "Do you want to remove this student?",
        buttons: {
            cancel: {
                label:'<i class="fa fa-times"></i> No'
            },
            confirm: {
                label:'<i class="fa fa-check"></i> Yes'
            }
        },

        callback : function (result){
            if(result){
               $.ajax({
                   url: "http://localhost:3000/Students/"+ id,
                   method:"DELETE",
                   dataType:"json",
                   success: function(data){
                    dashbord.drawTable();
                   }
               })
            }
        }
    });
};
dashbord.get= function(id){
    if(id){
        $.ajax({
            url: "http://localhost:3000/Students/"+ id,
            method:"GET",
            dataType:"json",
            success: function(data){
            $("#Fullname").val(data.fullname);
            $("#Avatar").val(data.avatar);
            $("#DOB").val(data.dob);
            var validator = $('#myModal').validate();
            validator.resetForm();          
            $('#myModal').modal('show');
            }
        });
     }

};
dashbord.reset = function(){
    $("#Fullname").val('');
    $("#Avatar").val('');
    $("#DOB").val('');
   var validator = $('#myModal').validate();
   validator.resetForm();
   
}

dashbord.int = function(){
     dashbord.drawTable()
}

$(document).ready(function(){
     dashbord.int()

})                                                                                                              