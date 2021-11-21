var canvas = new fabric.Canvas("myCanvas");

player_x = 10 ;
player_y = 10 ;

block_width = 30;
block_height = 30;

var player_object = "";
var block_img = "";

function player_update(){
fabric.Image.fromURL("player.png" , function(Img){
    player_object = Img;
    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y , 
        left:player_x
    });

    canvas.add(player_object);
});
}

function block_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        block_img = Img;
        
        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y , 
            left:player_x
        });
    
        canvas.add( block_img);
    });
    }