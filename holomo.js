var holomo ={} || holomo;
holomo.drawTable= function(){
     $.ajax({
     url: "http://localhost:3000/holomo",
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
                    "<a href='javascript:;' title='edit holomo' onclick='holomo.get("+ v.id +")'><i class='fa fa-edit'></i></a> " +
                    "<a href='javascript:;' title='remove holomo' onclick='holomo.delete("+ v.id +")'><i class='fa fa-trash ml-2'></i></a>" +
                "</td>"+
            "</tr>"
                );
            });
    
        }

 });

};





holomo.openModel= function(){
    holomo.reset();
    $('#myModal').modal('show')
   
}
holomo.save= function(){
  if($('#formEditStudent').valid()){
     var holomoObj ={};
     holomoObj.fullname= $ ('#Fullname').val();
     holomoObj.avatar=   $('#Avatar').val();
     holomoObj.dob=      $('#DOB').val();
  
  $.ajax({
    url: "http://localhost:3000/holomo",
    method: "POST",
    dataType:"json",
    contentType: "application/json",
    data: JSON.stringify(holomoObj),
    success: function(data){
        $('#myModal').modal('hide');
            holomo.drawTable();
    } 
   })
  
  } 
};
holomo.delete = function(id){
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
                   url: "http://localhost:3000/holomo/"+ id,
                   method:"DELETE",
                   dataType:"json",
                   success: function(data){
                    holomo.drawTable();
                   }
               })
            }
        }
    });
};
holomo.get= function(id){
    if(id){
        $.ajax({
            url: "http://localhost:3000/holomo/"+ id,
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
holomo.reset = function(){
    $("#Fullname").val('');
    $("#Avatar").val('');
    $("#DOB").val('');
   var validator = $('#myModal').validate();
   validator.resetForm();
   
}

holomo.int = function(){
     holomo.drawTable()
}

$(document).ready(function(){
     holomo.int()

})                                 