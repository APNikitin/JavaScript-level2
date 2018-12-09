$(document).ready(function(){
    function Slider (){
        this.position='50%';
        
        this.render();
    }
    
    Slider.prototype.render =function(){
        var self = this;
        var div = $('<div/>').addClass('carousel');
       div.append($('<div/>').addClass('carousel_prod_area')); 
       div.append($('<div/>').addClass('carousel_button_area').append($('<div/>').addClass('carousel_button').attr('id','carousel_left_btn')).append($('<div/>').addClass('carousel_button').attr('id','carousel_right_btn')));
       
        
        
        
        $('header').append(div);
    }
    var slider = new Slider();
    
    function Products(id,title,price,preview_img){
        this.id = id;
   		this.title = title;
   		this.price = price;
        this.preview_img = preview_img;
   		this.render();
    };
    
    Products.prototype.render = function() {
   		var self = this;
   		var div = $('<div/>')
   					.addClass('product');

   		div.attr("id", this.id);	
       
   		div.append($('<div/>').addClass('title').html(this.title));	
        div.append($('<div/>').addClass('image_prod').css("background-image","url('" + self.preview_img+"')"));//добавить картинку
   		div.append($('<div/>').addClass('price').html("Цена: "+this.price+"р"));	
   		div.append($('<div/>').addClass('button').html("Купить"));		
   		
   		$(".carousel_prod_area").append(div);

   		/*$(".button").on("click", function(){
   			if ($(this).parent().attr("id") == self.id){
   				basket.add(self.id);
   				basket.render();
   			}
   		});*/
   };
    
    $.getJSON('../json/warehaus.json',function(data){
        var products_items= data.products_items;
        products_items.forEach(function(item,i,arr){
            console.log(item);
            var product = new Products(item.id,item.title,item.price,item.preview_img);
        });
        
    });
    
    
  
    function CityList(){
        
    }
    CityList.prototype.constructor = CityList;
    
//    $.getJSON('../json/city.json',function(CityList){
//      /*$.parseJSON(CityList);*/
//        /*console.log(CityList.city);*/
//        var option = '';
//     CityList.city.forEach(function(item){
//         option += '<option value='+item+'>';
//         
//         
//     })
//        $('#r_city_list').html(option);
//    });
   //____________click button send_________________________  
    $('#btn_submit').click(function(){
        //______________________verify name_________
        var regexp = /^[a-zа-яё]+\s[a-zа-яё]+$/siu; //verify name
       if (!regexp.test($('#r_name').val()) ){
           $('#r_name').addClass('error_field');
           /*alert($('#r_name').val() + regexp.test($('#r_name').val()));*/
       }
        else{
            $('#r_name').removeClass('error_field');
            a/*lert($('#r_name').val() + regexp.test($('#r_name').val()));*/
        };
       //______________________verify email_________ 
        regexp = /^\S+@\S+\.\S+$/;//verify email
        if (!regexp.test($('#r_email').val()) ){
           $('#r_email').addClass('error_field');
           /*alert($('#r_email').val() + regexp.test($('#r_email').val()));*/
       }
        else{
            $('#r_email').removeClass('error_field');
            /*alert($('#r_email').val() + regexp.test($('#r_email').val()));*/
        };
       //______________________verify phone_________  
        regexp = /^((8|\+\d)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        if (!regexp.test($('#r_tel').val()) ){
           $('#r_tel').addClass('error_field');
           /*alert($('#r_tel').val() + regexp.test($('#r_tel').val()));*/
       }
        else{
            $('#r_tel').removeClass('error_field');
            /*alert($('#r_tel').val() + regexp.test($('#r_tel').val()));*/
        };
        
        //______________________verify birth_________  
        regexp = /^((19)|(20))(3|4|5|6|7|8|9)\d(\s|\-|\.)((0\d)|(10)|(11)|(12))(\s|\-|\.)((0\d)|(1\d)|(2\d)|(30)|(31))$/gs;
        if (!regexp.test($('#r_tel').val()) ){
           $('#r_dateofbirth').addClass('error_field');
           /*alert($('#r_dateofbirth').val() + regexp.test($('#r_dateofbirth').val()));*/
       }
        else{
            $('#r_dateofbirth').removeClass('error_field');
            /*alert($('#r_dateofbirth').val() + regexp.test($('#r_dateofbirth').val()));*/
        };
         $( ".error_field" ).toggle( "bounce", { times: 1 }, "slow" );
        $( ".error_field" ).toggle( "bounce", { times: 1 }, "slow" );
    });
    
    
});