var items = [
	   {
	   	"id":"1",
	   	"title":"Товар 1",
	   	"price":100
	   },
	   {
	   	"id":"2",
	   	"title":"Товар 2",
	   	"price":200
	   },
	   {
	   	"id":"3",
	   	"title":"Товар 3",
	   	"price":300
	   },
	   {
	   	"id":"4",
	   	"title":"Товар 4",
	   	"price":400
	   },
	   {
	   	"id":"5",
	   	"title":"Товар 5",
	   	"price":500
	   },
	   {
	   	"id":"6",
	   	"title":"Товар 6",
	   	"price":600
	   },
   ];

    function Goods (id,title,price) {
   		this.id = id;
   		this.title = title;
   		this.price = price;

   		this.render();
   }

   Goods.prototype.render = function() {
   		var self = this;
   		var div = $('<div/>')
   					.addClass('goods');

   		div.attr("id", this.id);	
   		div.append($('<div/>').addClass('title').html(this.title));	
   		div.append($('<div/>').addClass('price').html("Цена: "+this.price+"р"));	
   		div.append($('<div/>').addClass('button').html("Купить"));		
   		
   		$(".content").append(div);

   		$(".button").on("click", function(){
   			if ($(this).parent().attr("id") == self.id){
   				basket.add(self.id);
   				basket.render();
   			}
   		});
   };

    function Basket () {
   		this.summ = 0;
   		this.count = 0;

   		this.render();
        this.ids = [];


   		$(".close").on("click", function(){
   			$('.modal').css("display","none");
   		});

   		$(".modal").on("click", function(){
   			if($(this).hasClass("modal_window")){
				$('.modal').css("display","none");
   			}
   		});
   }
   Basket.prototype.render = function() {
   	   		var div = $('.basket');
   	   		div.html('');
   	   		div.append($('<div/>').addClass('count').html("Колличество товаров: "+ this.count));	
   	   		div.append($('<div/>').addClass('summ').html("Сумма: " +this.summ));
   	   		div.append($('<div/>').addClass('button_busc').html("Показать"));

   	   	$(".button_busc").on("click", function(){
   			$('.modal').css("display","flex");
   		});

   };

   Basket.prototype.add = function(id){
   		var self = this;

   		items.forEach(function(elem,i,arr){
   			if (id == elem.id){
   				self.summ += elem.price;
                self.ids.push(elem.id+'_'+this.count);
   				/*$('.modal_window').append($('<div/>').addClass('modal_item').html("<div>" +elem.title+" Цена:"+elem.price+"</div><div class='remove_btn'>Удалить</div>"));*/
                $('.modal_window').append($('<div/>').addClass('modal_item').attr('id',elem.id+'_'+this.count).append($('<div/>').addClass('tovar_frame').html(elem.title+" Цена:"+elem.price)).append($('<div/>').addClass('remove_btn').html('удалить')));
                $('.remove_btn').on('click',function(){
                    basket.remove(elem.id+'_'+this.count);
                    basket.render();
                })
   			}
   		});

   		this.count++;


   }
  Basket.prototype.remove = function(id){
    var self=this;
      items.forEach(function(elem,i,arr){
          if (id=elem.id){
              self.summ -=elem.price;
              /*$('.modal_window').detach()
           */   
          }
      });
      
      this.count--;
   }

   items.forEach(function(elem,i,arr){
   		console.log(elem);
   		var good = new Goods(elem.id, elem.title, elem.price);
   });

   var basket = new Basket();