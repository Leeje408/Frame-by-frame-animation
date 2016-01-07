window.onload = function(){
    moveA();
    moveB();
};
function moveB() {
    var show = document.getElementById("win");
    var offsetx = -75;
    var pox = 6000;
    mo(show, pox, pox, 0, 1, offsetx, 0, 10);
}
function mo(show, pox, bpx, poy, bpy, offsetx, offsety, time) {
    this.st = setTimeout(function (){
        pox %= bpx;
        poy %= bpy;
        show.style.backgroundPosition = pox + "px " + poy + "px";
        if(pox == 0) { poy += offsety; }
        pox += offsetx;
        mo(show, pox, bpx, poy, bpy, offsetx, offsety, time);
        }, time); 
}
function moveA(){
    var show = document.getElementById("b");
    var offsetx = -140, offsety = 80, pox = 560, poy = 160;
    mo(show, pox, pox, poy, poy, offsetx, offsety, 100);
}
