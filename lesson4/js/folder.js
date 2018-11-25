function folder(id){
    this.id=id;
    
    //this.htmlCode;
    this.active= false;
}
folder.prototype.active=function(){
    this.active = true;
}
folder.prototype.inactive=function(){
    this.active = false;
}
folder.prototype.render = function(){
    if(this.active) document.getElementsByClassName    
}

function folders(){
    this.items=[];
}
folders.prototype.fill=function(){
    this.items = $('folder');
}
folders.prototype.constructor = folders;
var thisFolders = new folders;
thisFolders.fill();

$('li').click(function(event){
    $('li').removeClass();
    event.currentTarget.className ="active";
    $('folder').removeClass();
    $('li').each(function(i){
        
        $('folder').find( thisFolders.items[i]).addClass('active');
    });
        
    /*});
    $('div').each(function(i){
        $(this).find('folder'). 
             
    }) ;*/
});