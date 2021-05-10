//Breakout oma ryhmäprojekti js-osuus/Paul Willman, Riku Kaartoaho, Eriko Korhonen/7.5.2021
/*
10.5.2021 RIKU KAARTOAHO - MUUTIN HTML canvasin height ja width päittäin jotta sai taustakuvan
kätevästi istumaan ruudulle. Lisäsin peliin loop(), update() ja draw()-funktiot. Muutin myös hieman
var canv = document.createElement("canvas") ---> const canv = document.getElementById("breakout").
Jotta verrataan suoraan jo html-tiedostossa luotuun canvasiin, eikä tarvitse luoda uutta.
Lisäsin myös brick objektin ja funktiot jotta saadaan brick-blockit tulostumaan pelialueelle.
Pituuksia, offsetteja ja värejä voi kokeilla ja säätää riveiltä 32-42.
*/

//=========================================================================================



// game parameters
const HEIGHT = 550; // pixels

// derived Dimensions
const WIDTH = HEIGHT *0.9;

// set up the game canvas
const canv = document.getElementById("breakout");

// set up the context
const ctx = canv.getContext("2d");

// BG IMAGE
const BG_IMG = new Image();
BG_IMG.src = "assets/background-img3.jpg"; // kokeilu

//luodaan brick olio joka sisältää kaikki brickien oletus määritteet.
const brick = {
  row : 4,
  column: 5,
  width: 75,
  height: 20,
  offSetLeft : 38,
  offSetTop : 20,
  marginTop : 20,
  fillColor : "#b90015",
  strokeColor : "#000"
}
//Bricks funktio, käytetään nested for-looppia bricks[][] taulukon läpi ja lisää jokaiselle riville ja rivin sarakkeille uuden brickin
let bricks = [];
function createBricks() {
    for(let r = 0; r < brick.row; r++){
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++){
            bricks[r][c] = {
                x : c * (brick.offSetLeft + brick.width) + brick.offSetLeft,
                y : r * (brick.offSetTop + brick.height) + brick.offSetTop + brick.marginTop,
                status : true
            }
        }
    }
}
createBricks();

//Tulostetaan brickit canvasille
function drawBricks() {
  for(let r = 0; r < brick.row; r++){
      for(let c = 0; c < brick.column; c++) {
          let b = bricks[r][c];
      if(b.status){
          ctx.fillStyle = brick.fillColor;
          ctx.fillRect(b.x, b.y, brick.width, brick.height)

          ctx.strokeStyle = brick.strokeColor;
          ctx.strokeRect(b.x, b.y, brick.width, brick.height);
          }
      }
  }
}


//////////////////////////////////////////////////////////
// draw
drawBackground();
//////////////////////////////////////////////////////////


function drawBackground()
  {
    ctx.fillStyle = BG_IMG;
    ctx.fillRect(0, 0, canv.width, canv.height);
  }
// 1.vaihe/ EK / 7.5.2021


//pelin update funktio
function update() {


  //Tämä funktio pyörittää mm. moveBall() ja movePaddle() -funktioita


}


//Pelin draw funktio, joka tulostaa kaiken halutun tiedon canvasiin. Kuten pallot, paddlet ja brickit.
function draw() {
  drawBricks();

}

//pelin loop funktio
function loop() {
  ctx.drawImage(BG_IMG, 0, 0);
  draw();
  update();
  requestAnimationFrame(loop);
}
loop();


