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
    console.log(this);
     document.getElementById(this.id).remove();
    /*document.getElementById(this.id).parentElement.removeChild(document.getElementById(this.id));*/
   
   /* console.log("wwwww");
    delete this;*/
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

function MenuItem(my_href, my_name,my_id){
   Container.call(this);
   this.className = "menu-item";
   this.href = my_href;
   this.itemName = my_name;
   this.id = my_id; 
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function(){
	return "<li class='"+this.className+"' id='"+this.id+"' href='"+ this.href +"'>" + this.itemName + "</li>";
}

SubMenu.prototype=Object.create(Menu.prototype);
SubMenu.prototype.constructor=SubMenu;

function SubMenu(my_id, my_class, my_items){
   Container.call(this);
   this.id = my_id;
   this.className = my_class;
   this.items = my_items;
} 

SubMenu.prototype.render=function(){
    var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
    for(var item in this.items){
    if(this.items[item] instanceof MenuItem){ 
      result += this.items[item].render();
    }else{
      var array = this.items[item]; 
     result += "<ul>";
        
      for (elem in array){
        result += array[elem].render();
      }
      result += "</ul>";
    }
  }
        result += "</ul>";
	
	return result;
}



    
var m_item1 = new MenuItem("/", "Главная","general");
var m_item2 = new MenuItem("/catalogue/", "Каталог","catalog");
var m_item3 = new MenuItem("/gallery/", "Галерея","gallery");
var m_items = {0: m_item1, 1: m_item2, 2: m_item3};

var m_item4 = new MenuItem("/", "sub0","0");
var m_item5 = new MenuItem("/catalogue/", "sub2","2");
var m_item6 = new MenuItem("/gallery/", "sub3","3");
var m_item7 = new MenuItem("/gallery/", "sub4","4");
var subm_items={0:m_item4,1:m_item5,2:m_item6,3:m_item7};

var menu = new Menu("my_menu", "My_class", m_items);
var submenu=new SubMenu("submy_menu", "subMy_class", subm_items);
var div = document.write(menu.render());
document.write(submenu.render());

