function Container()
{
  this.id = "";
  this.className = "";
  this.htmlCode = "123";
}

Container.prototype.render = function()
{
   return this.htmlCode;
}

Container.prototype.remove = function()
{
     /*document.getElementById(this.id).parentElement.removeChild(document.getElementById(this.id));*/
   console.log(this);
    console.log("wwwww");
   /* if (document.getElementById(this.id)){
        console.log(document.getElementById(this.id));
    }
    else if (Container.getElementsByName(this.itemName)){
             console.log(Container.getElementsByName(this.itemName))
             }*/
    
 }

function Menu(my_id, my_class, my_items){
   Container.call(this);
   this.id = my_id;
   this.className = my_class;
   
   this.items = my_items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

Menu.prototype.render = function(){
	var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
	
	for(var item in this.items){
		if(this.items[item] instanceof MenuItem){
			result += this.items[item].render();
		}
	}
	
	result += "</ul>";
	
	return result;
}

function MenuItem(my_href, my_name){
   Container.call(this);
   this.className = "menu-item";
   this.href = my_href;
   this.itemName = my_name;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function(){
	return "<li class='"+this.className+"' href='"+ this.href +"'>" + this.itemName + "</li>";
}

var m_item1 = new MenuItem("/", "Главная");
var m_item2 = new MenuItem("/catalogue/", "Каталог");
var m_item3 = new MenuItem("/gallery/", "Галерея");
var m_items = {0: m_item1, 1: m_item2, 2: m_item3};

var menu = new Menu("my_menu", "My_class", m_items);
var div = document.write(menu.render());
/*setTimeout(m_item3.remove(),1000);*/
m_item1.remove();