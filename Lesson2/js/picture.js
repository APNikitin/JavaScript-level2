//_______________________________________________________________________
function smallPicture(my_id, my_src){
   Container.call(this);
   this.className = "small-pic"; 
   this.id = my_id;
   this.src = my_src;
}

smallPicture.prototype = Object.create(Container.prototype);
smallPicture.prototype.constructor = smallPicture;

smallPicture.prototype.render = function(){
  var result = "<a href='" +this.id+"'><img class="+this.className+" id="+this.id+" src=" + this.src+ " > </a>";
    console.log(result);
  /*result += this.render();*/
    return result;
  }

var my_pictures;
function fullPicturesContent(xhr){
  my_pictures ={}

  if(xhr.readyState == 4){
    if(xhr.status == 0){
        var pictures = JSON.parse(xhr.responseText);
        
        console.log(pictures);
        
        for (var i=0; i< pictures.picture_items.length ;i++){
        my_pictures[i] = new smallPicture(pictures.picture_items[i].href,pictures.picture_items[i].src);
        document.write(my_pictures[i].render());
        }
        
       /* var menu = new SubMenu("my_menu", "My_class", my_items);
      var div = document.write(Picture.render());*/
    }
  }
}


xhr.onreadystatechange = function (){fullPicturesContent(xhr)};
xhr.open('GET', "./Catalog_Picture.json", true); //
xhr.send();

