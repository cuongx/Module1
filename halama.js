var chart ={} || chart;
chart.drawTable= function(){
     $.ajax({
     url: "http://localhost:3000/halama",
     method : "GET",
     dataType: "json",
     success : function(data){
         $('#tbStudent').empty();
        $.each(data,function(i,v){
            $("#tbStudent").append(
                "<tr>"+
                "<td>"+ (v.id) +"</td>"+
                "<td>" + v.fullnamee + "</td>"+
                "<td><img src='"+ v.avatarr +"' width='200px' height='100px' /></td>"+
                "<td>"+ v.dobb +"</td>"+
                "<td>"+
                    "<a href='javascript:;' title='edit chart' onclick='chart.get("+ v.id +")'><i class='fa fa-edit'></i></a> " +
                    "<a href='javascript:;' title='remove chart' onclick='chart.delete("+ v.id +")'><i class='fa fa-trash ml-2'></i></a>" +
                "</td>"+
            "</tr>"
                );
            });
    
        }

 });

};





chart.openModel= function(){
    chart.reset();
    $('#myModal').modal('show')
   
}
chart.save= function(){
  if($('#formEditStudent').valid()){
     var chartObj ={};
     chartObj.fullnamee= $ ('#Fullname').val();
     chartObj.avatarr=   $('#Avatar').val();
     chartObj.dobb=      $('#DOB').val();
  
  $.ajax({
    url: "http://localhost:3000/halama",
    method: "POST",
    dataType:"json",
    contentType: "application/json",
    data: JSON.stringify(chartObj),
    success: function(data){
        $('#myModal').modal('hide');
            chart.drawTable();
    } 
   })
  
  } 
};
chart.delete = function(id){
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
                   url: "http://localhost:3000/halama/"+ id,
                   method:"DELETE",
                   dataType:"json",
                   success: function(data){
                    chart.drawTable();
                   }
               })
            }
        }
    });
};
chart.get= function(id){
    if(id){
        $.ajax({
            url: "http://localhost:3000/halama/"+ id,
            method:"GET",
            dataType:"json",
            success: function(data){
            $("#Fullname").val(data.fullnamee);
            $("#Avatar").val(data.avatarr);
            $("#DOB").val(data.dobb);
            var validator = $('#myModal').validate();
            validator.resetForm();          
            $('#myModal').modal('show');
            }
        });
     }

};
chart.reset = function(){
    $("#Fullname").val('');
    $("#Avatar").val('');
    $("#DOB").val('');
   var validator = $('#myModal').validate();
   validator.resetForm();
   
}

chart.int = function(){
     chart.drawTable()
}

$(document).ready(function(){
     chart.int()

})                                 