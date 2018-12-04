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
   //____________click button send_________________________  
    $('#btn_submit').click(function(){
        //______________________verify name_________
        var regexp = /^[a-zа-яё]+\s[a-zа-яё]+$/siu; //verify name
       if (!regexp.test($('#r_name').val()) ){
           $('#r_name').addClass('error_field');
           alert($('#r_name').val() + regexp.test($('#r_name').val()));
       }
        else{
            $('#r_name').removeClass('error_field');
            alert($('#r_name').val() + regexp.test($('#r_name').val()));
        };
       //______________________verify email_________ 
        regexp = /^\S+@\S+\.\S+$/;//verify email
        if (!regexp.test($('#r_email').val()) ){
           $('#r_email').addClass('error_field');
           alert($('#r_email').val() + regexp.test($('#r_email').val()));
       }
        else{
            $('#r_email').removeClass('error_field');
            alert($('#r_email').val() + regexp.test($('#r_email').val()));
        };
       //______________________verify phone_________  
        regexp = /^((8|\+\d)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (!regexp.test($('#r_tel').val()) ){
           $('#r_tel').addClass('error_field');
           alert($('#r_tel').val() + regexp.test($('#r_tel').val()));
       }
        else{
            $('#r_tel').removeClass('error_field');
            alert($('#r_tel').val() + regexp.test($('#r_tel').val()));
        };
        
    });
    
    
});