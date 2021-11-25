var bg;
var ast, astImg;
var play, playImg;
var next, nextImg, yes, yesImg;
var dia1, dia2, dia3, dia4, dia1Img, dia2Img, dia3Img, dia4Img;
var task, task2, task3, task4, task3Img, task4Img, task2Img, taskImg;
var deboard, deboardImg;
var board, board2, board2Img, boardImg;
var samplePick, samplePickImg;
var gameOver, gameOverImg;
var ground, groundImg;
var launch, launch2, launch2Img, launchImg;
var warning1, warning2,warning1Img, warning2Img;
var fuelEmpty, fuelFull, fuelFullImg, fuelEmptyImg;
var flag, flagImg, iss, issImg, restart, restartImg;
var man, manImg;
var spaceImg, skyImg;
var takeoff, takeoffImg;
var gameState = WAIT;
var WAIT = 0;
var PLAY = 1;
var END = 2;



function preload(){
  spaceImg = loadImage("pics/Background.png");
  astImg = loadImage("pics/Astronaut.png");
  skyImg = loadImage("pics/Sky.png");
  groundImg = loadImage("pics/Ground.png");
  manImg = loadImage("pics/Man.png");
  takeoffImg = loadImage("pics/Takeoff.png");
  playImg = loadImage("pics/Button.png");
  nextImg = loadImage("pics/Next.png");
  yesImg = loadImage("pics/Next2.png");
  dia1Img = loadImage("pics/Dia1.png");
  dia2Img = loadImage("pics/Dia2.png");
  dia3Img = loadImage("pics/Dia3.png");
  dia4Img = loadImage("pics/Dia4.png");
  boardImg = loadImage("pics/Board.png");
  launchImg = loadImage("pics/Launch.png");
  launch2Img = loadImage("pics/Launch2.png")
  taskImg = loadImage("pics/Tasks.png");
  task2Img = loadImage("pics/Task2.png");
  task3Img = loadImage("pics/Tasks3.png");
  task4Img = loadImage("pics/Tasks4.png");
  deboardImg = loadImage("pics/Deboard.png");
  samplePickImg = loadImage("pics/Pick-Up-Sample.png");
  fuelEmptyImg = loadImage("pics/Fuel Empty.png")
  board2Img = loadImage("pics/board2.png");
  warning1Img = loadImage("pics/Warning 1.png");
  warning2Img = loadImage("pics/Warning 2.png");
  fuelFullImg = loadImage("pics/full fuel.png");
  issImg = loadImage("pics/ISS-Connect.png");
  flagImg = loadImage("pics/Flag.png");
  restartImg = loadImage("pics/Restart.png")
  


  gameOverImg = loadImage("pics/Game-Over.png");
}



function setup(){
    createCanvas(1284,664);
    bg = createSprite(700,500);
    bg.addImage(spaceImg);
    bg.addImage(skyImg)

    ast = createSprite(650,440);
    ast.addImage(astImg);
    ast.scale = 0.65;

    ground = createSprite(600,500);
    ground.addImage(groundImg);
    ground.scale = 1.5;

    man = createSprite(500,450);
    man.addImage(manImg);
    man.scale = 0.5;

    launch = createSprite(600,550);
    launch.addImage(launchImg);
    launch.scale = 0.5;
    launch.setCollider("rectangle",0,0,30,30);

    fuelEmpty = createSprite(600,550);
    fuelEmpty.addImage(launchImg);
    fuelEmpty.scale = 0.5;
    fuelEmpty.setCollider("rectangle",0,0,30,30);

    fuelFull = createSprite(600,550);
    fuelFull.addImage(launchImg);
    fuelFull.scale = 0.5;
    fuelFull.setCollider("rectangle",0,0,30,30);

    launch2 = createSprite(600,550);
    launch2.addImage(launch2Img);
    launch2.scale = 0.5;
    launch2.setCollider("rectangle",0,0,30,30);
  

    play = createSprite(650,300);
    play.addImage(playImg);
    play.setCollider("rectangle",0,0,30,30);

    samplePick = createSprite(650,300);
    samplePick.addImage(samplePickImg);
    samplePick.setCollider("rectangle",0,0,30,30);
 
 

    task = createSprite(200,300);
    task.addImage(taskImg);

    task2 = createSprite(200,300);
    task2.addImage(task2Img);

    task3 = createSprite(900,300);
    task3.addImage(task3Img);
    task3.scale = 0.8;

    task4 = createSprite(200,300);
    task4.addImage(task4Img);

    warning1 = createSprite(200,300);
    warning1.addImage(warning1Img);
    
    warning2 = createSprite(200,300);
    warning2.addImage(warning2Img);

    
    flag = createSprite(200,300);
    flag.addImage(flagImg);
    
    restart = createSprite(200,300);
    restart.addImage(restartImg);



    next = createSprite(1200,620);
    next.addImage(nextImg);
    next.scale = 0.3;
    next.setCollider("rectangle",0,0,100,100);
    
    yes = createSprite(1000,620);
    yes.addImage(yesImg);
    yes.scale = 0.3;
    yes.setCollider("rectangle",0,0,100,100);
   


    dia1 = createSprite(590,265);
    dia1.addImage(dia1Img);
    dia1.scale = 0.5;
    dia1.setCollider("rectangle",0,0,100,100);
  

    board = createSprite(300,300);
    board.addImage(boardImg);
    board.scale = 0.4;
    board.setCollider("rectangle",0,0,70,70);
    
    board2 = createSprite(300,300);
    board2.addImage(board2Img);
    board2.scale = 0.4;
    board2.setCollider("rectangle",0,0,70,70);

    deboard = createSprite(300,300);
    deboard.addImage(deboardImg);
    deboard.scale = 0.4;
    deboard.setCollider("rectangle",0,0,70,70);


    dia2 = createSprite(750,265);
    dia2.addImage(dia2Img);
    dia2.scale = 0.5;
    dia2.setCollider("rectangle",0,0,100,100);
  

    dia3 = createSprite(850,200);
    dia3.addImage(dia3Img);
    dia3.scale = 0.5;

    dia4 = createSprite(850,400);
    dia4.addImage(dia4Img);
    dia4.scale = 0.5;

       
    takeoff = createSprite(1045,300);
    takeoff.addImage(takeoffImg);

    iss = createSprite(1045,300);
    iss.addImage(issImg);

    
    pla();
    nxt();
    brd();
    lnc();
    fine();

    

 
}

function draw(){
    background(0);


    if(gameState === WAIT){
        bg.changeImage(skyImg);
    }

    if(gameState === PLAY){
        bg.changeImage(spaceImg);
    }

   /* if(mousePressedOver(play)){
        play.destroy();
        dia1.visible = true;
        next.visible = true;
        task.visible = false;
        ast.visible = true;
        man.visible = true;

        
    }*/
    if(mousePressedOver(play)){

        play.destroy();
        dia1.visible = true;
        next.visible = true;
        ast.visible = true;
        man.visible = true;
        task.visible = false;
        board.visible = false;
        ground.visible = true;
        task2.visible = false;
        yes.visible = false;
    }

   /* if(mousePressedOver(next)){
        dia1.visible = false;
        dia2.visible = true;
        next.destroy(0);
        board.visible = true;
    }*/

    if(mousePressedOver(next)){
    
        next.destroy();
        dia1.visible = false;
        dia2.visible = true;
        board.visible = true;
        task2.visible = false;
        yes.visible = false;

    }

   /* if(mousePressedOver(board)){
        board.destroy();
        man.visible = false;
        ast.visible = false; 
        dia2.visible = false;
       // board.visible = false;
        dia3.visible = true;
        dia4.visible = true;
        launch.visible = true; 
    }*/

    if(mousePressedOver(board)){
        
        board.destroy();
        man.visible = false;
        ast.visible = false;
        dia2.visible = false;
        dia3.visible = true;
        dia4.visible = true;
        task2.visible = false;
        launch.visible = true;
        yes.visible = false;
    }

    if(mousePressedOver(launch)){
        launch.destroy();
        dia3.visible = false;
        dia4.visible = false;
        task2.visible = true;
        ground.visible = false;
        takeoff.position.x = 600;
        yes.visible = false;
        //dia5.visible = true;
        //launch.visible = false;

    }

    if(mousePressedOver(yes)){
        yes.destroy();
        task2.visible = false;
        yes.visible = true;

    }

   

    drawSprites();
}

function pla(){
 
    dia1.visible = false;
    next.visible = false;
    dia2.visible = false;
    dia3.visible = false;
    dia4.visible = false;
    task2.visible = false;
    board.visible = false;
    launch.visible = false;
    ast.visible = false;
    man.visible = false;
    dia1.visible = true;
    yes.visible = false;
    //ground.visible = true;
  

        
}

function nxt(){
    dia1.visible = false;
    dia2.visible = true;
    board.visible = true;
    //dia1.visible = false;
    //next.visible = false;
    //dia2.visible = false;
    yes.visible = false;
    dia3.visible = false;
    dia4.visible = false;
    task2.visible = false;
    board.visible = false;
    launch.visible = false;
    ast.visible = true;
    man.visible = true;
    //dia1.visible = true;
}

function brd(){
   man.visible = false;
        ast.visible = false;
    
        yes.visible = false;
      dia2.visible = false;
        dia3.visible = true;
        dia4.visible = true;
        task2.visible = false;
       // launch.visible = true;
        
}


function lnc(){
    dia3.visible = false;
    dia4.visible = false;
    task2.visible = false;
    ground.visible = false;
    launch.visible = false;
   // yes.visible = true;
}

function fine(){
  task2.visible = false; 
}