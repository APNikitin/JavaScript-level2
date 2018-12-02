$(document).ready(function(){
  
    function CityList(){
        
    }
    CityList.prototype.constructor = CityList;
    
    $.getJSON('city.json',function(CityList){
      /*$.parseJSON(CityList);*/
        /*console.log(CityList.city);*/
        var option = '';
     CityList.city.forEach(function(item){
         option += '<option value='+item+'>';
         
         
     })
        $('#r_city_list').html(option);
    });
    
    
});