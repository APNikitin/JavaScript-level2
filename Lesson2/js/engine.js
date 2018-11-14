function Container()
{
  this.id = "";
  this.className = "";
  this.htmlCode = "";
}

Container.prototype.render = function()
{
   return this.htmlCode;
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

var my_items;
function fullMenuContent(xhr){
  my_items ={}

  if(xhr.readyState == 4){
    if(xhr.status == 0){
        var items = JSON.parse(xhr.responseText);
        
        
        for (var i=0; i< items.menu_items.length;i++){
            my_items[i] = new MenuItem(items.menu_items[i].href, items.menu_items[i].title);
        }
        var menu = new Menu("my_menu", "My_class", my_items);
      var div = document.write(menu.render());
    }
  }
}

var menu = new Menu("my_menu", "My_class", my_items);
var div = document.write(menu.render());

var xhr = false;
if (window.XMLHttpRequest){
  xhr = new XMLHttpRequest();
} else if(window.ActiveXObject){
  try{
    xhr = new ActiveXObject('Msxml2.XMLHTTP');
  } catch(e){
    try{
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }catch(e){}
  }
}

if (!xhr){
  alert("Ошибка: невозможно создать");
}


xhr.onreadystatechange = function (){fullMenuContent(xhr)};
xhr.open('GET', "./menu.json", true); //
xhr.send();

/*
Совсем забыл сказать вам важную вещь. 
Сейчас у современных браузеров стоят защиты, 
которые не дают получать данные со сторонних серверов. 
По этому, для того, чтобы выполнить домашнее задание, 
вам нужен будет хром и немного магии. А точнее запустить его с ключем  --disable-web-security --user-data-dir. 
Создаете новый ярлык хрома и в поле объект после кавычек в конце дописываете эти письмена. 
Закрываете работающий хром и открвыаете по новому ярлыку. 
Эта штука отключит защиты, так что пользуйтесь таким ярлыком только для разработки. 
*/