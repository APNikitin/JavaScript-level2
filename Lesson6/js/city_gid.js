$(document).ready(function(){
    
   /* $.getJson('city.json',function(data){
        var City=[];
        
        $.each(data,function(item,subItem){
           $('#r_city_list').append('<option/>')
           
        })
        
    })*/
    var data=[];
    $.get('city.json',function(data){
        console.log(data);
     /*data.forEach(function(item){
         var option = $('#r_city_list').append('<option>');
         option.value = item;
     })*/
    });
    
    
});