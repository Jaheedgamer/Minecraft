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

    window.addEventListener("keydown" , my_keydown);

    function my_keydown(e){
        keypressed = e.keyCode;
        console.log(keypressed);

        if(e.shiftKey == true && keypressed == "80"){
            console.log("p and shift pressde together");
            block_width = block_width+10;
            block_height = block_height+10;
            document.getElementById("current_width").innerHTML = block_width;
            document.getElementById("current_height").innerHTML = block_height;
        }

        if(e.shiftKey && keypressed == "78"){
          block_width = block_width-10;
          block_height = block_height-10;
          document.getElementById("current_width").innerHTML = block_width;
            document.getElementById("current_height").innerHTML = block_height;
        }

        if(keypressed == "38"){
              up();
              console.log("up");
        }

        if(keypressed == "40"){
            down();
            console.log("down");
      }

      if(keypressed == "37"){
        left();
        console.log("left");
  }

  if(keypressed == "39"){
    right();
    console.log("right");
}

if(keypressed == "67"){
    block_image("cloud.jpg")
    console.log("c");
}

if(keypressed == "68"){
    block_image("dark_green.png")
    console.log("d");
}

if(keypressed == "71"){
    block_image("ground.png")
    console.log("g");
}

if(keypressed == "76"){
    block_image("light_green.png")
    console.log("l");
}

if(keypressed == "82"){
    block_image("roof.jpg")
    console.log("r");
}

if(keypressed == "84"){
    block_image("trunk.jpg")
    console.log("t");
}

if(keypressed == "85"){
    block_image("unique.png")
    console.log("u");
}

if(keypressed == "87"){
    block_image("wall.jpg")
    console.log("w");
}

if(keypressed == "89"){
    block_image("yellow_wall.png")
    console.log("y");
}
    }

          
function up(){
    if(player_y >=0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <=500){
        player_y = player_y + block_height;
        canvas.remove(player_object);
          player_update();
    }
}

function left(){
    if(player_x >=0){
        player_x = player_x - block_width;
        canvas.remove(player_object);
          player_update();
    }
}

function right(){
    if(player_x <=850){
        player_x = player_x + block_width;
        canvas.remove(player_object);
          player_update();
    }
}