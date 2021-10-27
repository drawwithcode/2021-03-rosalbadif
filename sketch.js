let myImage
let myImage2
let dick
let basilicata
let calabria
let campania
let emilia
let friuli
let liguria
let lazio
let piemonte
let puglia
let sardegna
let sicilia
let toscana
let trentino
let umbria
let veneto


function preload() {
  myImage = loadImage ("./assets/italy.png")
  myImage2 = loadImage ("./assets/hand_2.png")
  dick = loadImage ("./assets/d*ck-01.png")
  basilicata= loadSound ("./assets/basilicata.mp3")
  calabria = loadSound ("./assets/calabria1.mp3")
  campania=loadSound ("./assets/campania2.mp3")
  emilia = loadSound ("./assets/emilia2.mp3")
  friuli = loadSound ("./assets/friuli.mp3")
  liguria = loadSound ("./assets/liguria1.mp3")
  lazio = loadSound ("./assets/lazio.mp3")
  piemonte = loadSound ("./assets/piemonte.mp3")
  puglia = loadSound ("./assets/puglia.mp3")
  sardegna = loadSound ("./assets/sardegna.mp3")
  sicilia = loadSound ("./assets/sicilia.mp3")
  toscana = loadSound ("./assets/toscana.mp3")
  trentino = loadSound("./assets/trentino.mp3")
  umbria = loadSound ("./assets/umbria.mp3")
  veneto = loadSound ("./assets/veneto2.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //puglia.play ()
}



function draw() {
  background("RoyalBlue")

  //ADD AN IMAGE
  imageMode (CENTER)
  image(myImage, windowWidth/2 , 430, 700,700)
  image(myImage2, windowWidth-120, 230, 248.5, 350)

  //ADD A TITLE
  //fill("gold")
  
  textFont("Italiana")
  textAlign(CENTER)
  
  
  fill("lime")
  textSize(60)
  text ("MAD IN ITALY", windowWidth/2, 50);
  
  fill("white")
  textSize(15)
  text("20 creative ways to tell someone he's a", windowWidth/2, 70)
  
  fill(255,51,0)
  textSize(30)
  textLeading(50)
  text("D*CKHEAD", windowWidth/2, 100)

  fill(14, 32, 88)
  rect(35,windowHeight-125,290,120)

  fill("gold")
  noStroke()
  rectMode(CORNER)
  rect(30,windowHeight-130,290,120)

  


  // fill("red")
  // noStroke()
  //text("region", 80, windowHeight-100)

  stroke(14, 32, 88)
  line(70,715, 280, 715)
  line(70,755, 280, 755)

  textAlign(CENTER)
  
  noStroke()

  fill("white")
  textSize(15)
  text("choose your region", 170, windowHeight-140)

  

  //BASILICATA

  let dbasilicata = dist(mouseX, mouseY, windowWidth/2 +160, 505) //calculate distance between mouse position and ellipse center in order to change shape by going over it
   
  if (dbasilicata<12.5){
     fill("white")
     ellipse (windowWidth/2 +160, 505, 25)
    //image(dick, windowWidth/2 +160, 505, 25,30)
    textSize(30)
    text("BASILICATA", 170, windowHeight-90)
    textSize(20)
    fill(14, 32, 88)
    text("sì proprj nu' ciuot", 170, windowHeight-50)
    if (basilicata.isPlaying()===false){
     basilicata.play()
    }
 }
  
  else { 
    basilicata.stop()
    fill("red")
    ellipse (windowWidth/2 +160, 505, 25)
  }

  //CALABRIA

  let dcalabria = dist(mouseX, mouseY, windowWidth/2 +190, 585) //calculate distance between mouse position and ellipse center in order to change shape by going over it
   
  if (dcalabria<12.5){
     fill("white")
     ellipse (windowWidth/2 +190, 585, 25)
    //image(dick, windowWidth/2 +160, 505, 25,30)
    textSize(30)
    text("CALABRIA", 170, windowHeight-90)
    textSize(20)
    fill(14, 32, 88)
    text("sì nu' cunnu", 170, windowHeight-50)
    if (calabria.isPlaying()===false){
     calabria.play()
    }
 }
  
 else { 
  calabria.stop()
  fill("red")
  ellipse (windowWidth/2 +190, 585, 25)
}


  //CAMPANIA

  let dcampania = dist(mouseX, mouseY, windowWidth/2 +100, 485) //calculate distance between mouse position and ellipse center in order to change shape by going over it
   
  if (dcampania<12.5){
     fill("white")
     ellipse (windowWidth/2 +100, 485, 25)
    //image(dick, windowWidth/2 +160, 505, 25,30)
    textSize(30)
    text("CAMPANIA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("sì 'na lot'", 170, windowHeight-50)
    if (campania.isPlaying()===false){
     campania.play()
    }
 }
  
  else { 
    campania.stop()
    fill("red")
    ellipse (windowWidth/2 +100, 485, 25)
  }


  //EMILIA

  let demilia = dist(mouseX, mouseY, windowWidth/2 -120, 275)  
   
  
  if (demilia<12.5){
    fill("white")
    ellipse (windowWidth/2 -120, 275, 25)
    //image(dick, windowWidth/2 -120, 275, 25,30)
    textSize(30)
    text("EMILIA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("et'sì proprio un nàdor", 170, windowHeight-50)
    if (emilia.isPlaying()===false){
     emilia.play()
    }
 }
  
  else { 
    emilia.stop()
    fill("red")
    ellipse (windowWidth/2 -120, 275, 25)
  }

  //FRIULI

  let dfriuli = dist(mouseX, mouseY, windowWidth/2 -10 , 170)
  

  if (dfriuli<12.5){
    fill("white")
    ellipse (windowWidth/2 -90, 160, 25)
    //image(dick, windowWidth/2 -10 , 170, 25,30)
    textSize(30)
    text("FRIULI", 170, windowHeight-95)
    fill(14, 32, 88)
    textSize(20)
    text("404 not found", 170, windowHeight-50)
    if (friuli.isPlaying()===false){
     friuli.play()
    }
 }
  
  else { 
    friuli.stop()
    fill("red")
    ellipse (windowWidth/2 -10 ,170, 25)
  }

  //LAZIO

  let dlazio = dist(mouseX, mouseY, windowWidth/2-15, 420)
  

  if (dlazio<12.5){
    fill("white")
    ellipse (windowWidth/2-15, 420, 25)
    //image(dick, windowWidth/2-15, 420, 25,30)
    textSize(30)
    text("LAZIO", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("ao, 'a testa de' cazzo", 170, windowHeight-50)
    if (lazio.isPlaying()===false){
     lazio.play()
    }
 }
  else { 
    lazio.stop()
    fill("red")
    ellipse (windowWidth/2 -15, 420, 25)
  }

  //LIGURIA

  let dliguria = dist(mouseX, mouseY, windowWidth/2 -180, 285)  
   
  
  if (dliguria<12.5){
    fill("white")
    ellipse (windowWidth/2 -180, 285, 25)
    //image(dick, windowWidth/2 -120, 275, 25,30)
    textSize(30)
    text("LIGURIA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("ti s'è proprio un belinòn", 170, windowHeight-50)
    if (liguria.isPlaying()===false){
     liguria.play()
    }
 }
  
  else { 
    liguria.stop()
    fill("red")
    ellipse (windowWidth/2 -180, 285, 25)
  }

  //PIEMONTE

  let dpiemonte = dist(mouseX, mouseY, windowWidth/2 -220, 255)  
   
  
  if (dpiemonte<12.5){
    fill("white")
    ellipse (windowWidth/2 -220, 255, 25)
    //image(dick, windowWidth/2 -220, 255, 25,30)
    textSize(30)
    text("PIEMONTE", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("s'es propri 'n pìciu", 170, windowHeight-50)
    if (piemonte.isPlaying()===false){
     piemonte.play()
    }
 }
  
  else { 
    piemonte.stop()
    fill("red")
    ellipse (windowWidth/2 -220, 255, 25)
  }

  //PUGLIA

  let dpuglia = dist(mouseX, mouseY, windowWidth/2 +200, 475)
   
  if (dpuglia<12.5){
    fill("white")
    ellipse (windowWidth/2 +200, 475, 25)
    //image(dick, windowWidth/2 +200, 475, 25,30)
    textSize(30)
    text("PUGLIA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("sì nu' tr'mon", 170, windowHeight-50)
    if (puglia.isPlaying()===false){
     puglia.play()
    }
 }
  
  else { 
    puglia.stop()
    fill("red")
    ellipse (windowWidth/2 +200, 475, 25)
  }

 //SARDEGNA

  let dsardegna = dist(mouseX, mouseY, windowWidth/2 -170, 525) //calculate distance between mouse position and ellipse center in order to change shape by going over it
   
  if (dsardegna<12.5){
    fill("white")
    ellipse (windowWidth/2 -170, 525, 25)
    //image(dick, windowWidth/2 -170, 525, 25,30)
    textSize(30)
    text("SARDEGNA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("se si 'na conca ' cazzu", 170, windowHeight-50)
    if (sardegna.isPlaying()===false){
     sardegna.play()
    }
 }
  
  else { 
    sardegna.stop()
    fill("red")
    ellipse (windowWidth/2 -170, 525, 25)
  }

  //SICILIA

  let dsicilia = dist(mouseX, mouseY, windowWidth/2 +70, 700)
   
  if (dsicilia<12.5){
    fill("white")
    ellipse (windowWidth/2 +70, 700, 25)
    //image(dick, windowWidth/2 +70, 700, 25,30)
    textSize(30)
    text("SICILIA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("sì na' mìnchia", 170, windowHeight-50)
    if (sicilia.isPlaying()===false){
     sicilia.play()
    }
 }
  
  else { 
    sicilia.stop()
    fill("red")
    ellipse (windowWidth/2 +70, 700, 25)
  }

  //TOSCANA

  let dtoscana = dist(mouseX, mouseY, windowWidth/2-75, 350)
  

  if (dtoscana<12.5){
    fill("white")
    ellipse (windowWidth/2-75, 350, 25)
    //image(dick, windowWidth/2 -75, 350, 25,30)
    textSize(30)
    text("TOSCANA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("ma te se' 'n bìschero", 170, windowHeight-50)
    if (toscana.isPlaying()===false){
     toscana.play()
    }
 }
  
  else { 
    toscana.stop()
    fill("red")
    ellipse (windowWidth/2 -75, 350, 25)
  }

  //TRENTINO

  let dtrentino = dist(mouseX, mouseY, windowWidth/2 -90, 160)
  

  if (dtrentino<12.5){
    fill("white")
    ellipse (windowWidth/2 -90, 160, 25)
    //image(dick, windowWidth/2 -90, 160, 25,30)
    textSize(30)
    text("TRENTINO", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("ma te se' zemo", 170, windowHeight-50)
    if (trentino.isPlaying()===false){
     trentino.play()
    }
 }
  
  else { 
    trentino.stop()
    fill("red")
    ellipse (windowWidth/2 -90,160, 25)
  }

  //UMBRIA

  let dumbria = dist(mouseX, mouseY, windowWidth/2-15, 370)
  

  if (dumbria<12.5){
    fill("white")
    ellipse (windowWidth/2-15, 370, 25)
    //image(dick, windowWidth/2 -15, 370, 25,30)
    textSize(30)
    text("UMBRIA", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("si' nu' birrocchiu", 170, windowHeight-50)
    if (umbria.isPlaying()===false){
     umbria.play()
    }
 }
  
  else { 
    umbria.stop()
    fill("red")
    ellipse (windowWidth/2 -15, 370, 25)
  }

  //VENETO

  let dveneto = dist(mouseX, mouseY, windowWidth/2 -50, 210)
  

  if (dveneto<12.5){
    fill("white")
    ellipse (windowWidth/2 -50, 210, 25)
    //image(dick, windowWidth/2 -50, 210, 25,30)
    textSize(30)
    text("VENETO", 170, windowHeight-95)
    textSize(20)
    fill(14, 32, 88)
    text("te si' un mona", 170, windowHeight-50)
    if (veneto.isPlaying()===false){
     veneto.play()
    }
 }
  
  else { 
    veneto.stop()
    fill("red")
    ellipse (windowWidth/2 -50, 210, 25)
  }
  
  
  
}
