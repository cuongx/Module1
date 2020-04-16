var heleme ={} || heleme;
heleme.drawTable= function(){
     $.ajax({
     url: "http://localhost:3000/heleme",
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
                    "<a href='javascript:;' title='edit heleme' onclick='heleme.get("+ v.id +")'><i class='fa fa-edit'></i></a> " +
                    "<a href='javascript:;' title='remove heleme' onclick='heleme.delete("+ v.id +")'><i class='fa fa-trash ml-2'></i></a>" +
                "</td>"+
            "</tr>"
                );
            });
    
        }

 });

};





heleme.openModel= function(){
    heleme.reset();
    $('#myModal').modal('show')
   
}
heleme.save= function(){
  if($('#formEditStudent').valid()){
     var helemeObj ={};
     helemeObj.fullname= $ ('#Fullname').val();
     helemeObj.avatar=   $('#Avatar').val();
     helemeObj.dob=      $('#DOB').val();
  
  $.ajax({
    url: "http://localhost:3000/heleme",
    method: "POST",
    dataType:"json",
    contentType: "application/json",
    data: JSON.stringify(helemeObj),
    success: function(data){
        $('#myModal').modal('hide');
            heleme.drawTable();
    } 
   })
  
  } 
};
heleme.delete = function(id){
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
                   url: "http://localhost:3000/heleme/"+ id,
                   method:"DELETE",
                   dataType:"json",
                   success: function(data){
                    heleme.drawTable();
                   }
               })
            }
        }
    });
};
heleme.get= function(id){
    if(id){
        $.ajax({
            url: "http://localhost:3000/heleme/"+ id,
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
heleme.reset = function(){
    $("#Fullname").val('');
    $("#Avatar").val('');
    $("#DOB").val('');
   var validator = $('#myModal').validate();
   validator.resetForm();
   
}

heleme.int = function(){
     heleme.drawTable()
}

$(document).ready(function(){
     heleme.int()

})                                 