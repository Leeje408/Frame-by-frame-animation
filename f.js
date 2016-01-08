window.onload = function(){
    moveA();
    moveB();
};
function createMo(show, bp, offset){
    this.show = show;
    this.po = 0;
    this.bp = bp;
    this.offset = offset;
}
function moveB() {
    var show = document.getElementById("win");
    var px = new createMo(show,6000,-75);
    mo(show, px, 10);
}
function mo() {
    var show, time;
    var px = new Object();
    var py = new Object();
    if(arguments.length == 3){
        show = arguments[0];
        px = arguments[1];
        py = { poy:0, bpy:1, offset:0}
        time = arguments[2];
    } else if(arguments.length == 4){
        show = arguments[0];
        px = arguments[1];
        py =arguments[2];
        time = arguments[3];    
    } else{
        console.log("请检查mo()参数");
        return false;
    }
    this.st = setTimeout(function (){
        px.pox %= px.bpx;
        py.poy %= py.bpy;
        show.style.backgroundPosition = px.pox + "px " + py.poy + "px";
        if(px.pox == 0) { py.poy += py.offset; }
        px.pox += px.offset;
        mo(show, px, py, time);
        }, time); 
}
function moveA(){
    var show = document.getElementById("b");
    var px = new Object();
    var py = new Object();
    px.pox = 560;
    px.bpx = px.pox;
    px.offset = -140;
    py.poy = 160;
    py.bpy = py.poy;
    py.offset = 80;
    mo(show, px, py, 100);
}
