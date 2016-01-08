window.onload = function(){
    moveA();
    moveB();
};
function createMo(show, po, offset){
    this.show = show;
    this.po = po;
    this.bp = po;
    this.offset = offset;
}
function moveB() {
    var show = document.getElementById("win");
    var px = new createMo(show,6000,-75);
    mo(show, px.po, px.bp, 0, 1, px.offset, 0, 10);
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
