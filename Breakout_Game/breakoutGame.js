//Breakout oma ryhmäprojekti js-osuus/Paul Willman, Riku Kaartoaho, Eriko Korhonen/7.5.2021
//=========================================================================================
// game parameters
const HEIGHT = 550; // pixels

// derived Dimensions
const WIDTH = HEIGHT *0.9;

// BG IMAGE
const BG_IMG = newImage();
BG_IMG.src = "background-img3.jpg"; // kokeilu

// set up the game canvas
var canv = document.createElement("canvas");
canv.width = WIDTH;
canv.height = HEIGHT;
document.body.appendChild(canv);

// set up the context
var cxt = canv.getContext("2d");

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
