window.onload = function(){
    moveA();
    moveB();
};
//创建单向数据（x/y）
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
//show:显示元素 px:横向信息（默认图片横向排布【必填】），包含po（初始位置）、bp（最大值）、offset（偏移量） py:与px相似，当仅为一行时，可省略 time:每帧时间
function mo() {   
    var show, time;
    var px = new Object();
    var py = new Object();
    if(arguments.length == 3){
        show = arguments[0];
        px = arguments[1];
        py = { po:0, bp:1, offset:0}
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
        px.po %= px.bp;
        py.po %= py.bp;
        show.style.backgroundPosition = px.po + "px " + py.po + "px";
        if(px.po == 0) { py.po += py.offset; }
        px.po += px.offset;
        mo(show, px, py, time);
        }, time); 
}
function moveA(){
    var show = document.getElementById("b");
    var px = new Object();
    var py = new Object();
    px.po = 560;
    px.bp = px.po;
    px.offset = -140;
    py.po = 160;
    py.bp = py.po;
    py.offset = 80;
    mo(show, px, py, 100);
}
