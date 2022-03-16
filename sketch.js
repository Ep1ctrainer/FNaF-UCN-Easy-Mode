var backgroundImg;
var cam1, cam2, cam3, cam4, cam5, cam6, cam7, cam8
var cams
var battery = 100;

var bg = "UCN_Bg.png";
var cam7DARK = "FNaF2_Party_Room_1_Cam7.png"
var cam7LIGHTS = "FNaF2_Party_Room_1_Cam7_NO_LIGHTS.png"
var cam8DARK = "FNaF2_Party_Room_3_Cam8_NO_LIGHTS.jpg";
var cam8LIGHTS = "FNaF2_Party_Room_3_Cam8.png";

//console.log( "Width:" + displayWidth, "Height:" + displayHeight)

function preload() {
    backgroundImg = loadImage(bg);
    fontRegular = loadFont('RobotoMono.ttf');
    INcam8 = loadImage(cam8DARK);
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);

    cam1 = new Cameras(1400, 925);
    cam2 = new Cameras(1625, 925);
    cam3 = new Cameras(1400, 775);
    cam4 = new Cameras(1625, 775);
    cam5 = new Cameras(1250, 550);
    cam6 = new Cameras(1775, 550);
    cam7 = new Cameras(1400, 450);
    cam8 = new Cameras(1625, 450);

    cam8.mouseClicked(changebg8);
}

function draw() {
    background(backgroundImg);
    
    cam1.display();
    cam2.display();
    cam3.display();
    cam4.display();
    cam5.display();
    cam6.display();
    cam7.display();
    cam8.display();

    console.log(mouseX, mouseY);

    textSize(30);
    strokeWeight(3);
    textAlign(CENTER);
    textFont(fontRegular);
    text("Cam 01", 1400, 920);
    text( 'Battery: ' + battery + '%', 50, 1030);
    
}

function changebg8(){
    background(cam8DARK);
}