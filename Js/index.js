var orig;
var can1 = document.getElementById("c1");
var can2 = document.getElementById("c2");
var can3 = document.getElementById("c3");

var orig_img = null;
var encr_img = null, decr_img = null;

var key = 50;

function upload() {
  clear_canvas(can2);
  clear_canvas(can3);
  orig = document.getElementById("imgchoose");
  orig_img = new SimpleImage(orig);
  orig_img.drawTo(can1);
  document.getElementById("p1").style.visibility = "hidden";
  document.getElementById("p2").style.visibility = "visible";
  document.getElementById("p3").style.visibility = "visible";
}





function encrypt() {
   
  encr_img = new SimpleImage(orig_img.getWidth(), orig_img.getHeight());

  for(var pi of orig_img.values()){
    encr_img.setPixel(pi.getX(),pi.getY(),pi);
  }

  for(var pi of encr_img.values()){
    var r1 = pi.getRed();
    var g1 = pi.getGreen();
    var b1 = pi.getBlue();

    r1 = (r1+key)%256;
    g1 = (g1+key)%256;
    b1 = (b1+key)%256;

    pi.setRed(r1);
    pi.setGreen(g1);
    pi.setBlue(b1);
  }

  encr_img.drawTo(can2);
  document.getElementById("p2").style.visibility = "hidden";

  document.getElementById("download_btn").setAttribute('download', "encrypted");
}