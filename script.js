var move=document.getElementById("move");
var register=document.getElementById("register");
var sign=document.getElementById("sign");
var logincontent=document.getElementById("logincontent");
var registercontent=document.getElementById("registercontent");
let bol=false;


function divmove(elementL,elementR){
    logincontent.style.transition="left 0.5s ease"
    logincontent.style.left=elementL+"%";
    registercontent.style.transition="0.5s ease";
    registercontent.style.left=elementR+"%";
}
register.addEventListener('click' , function(){
    move.style.left="49%";
    bol=true;
    divmove(-100,50);
    document.getElementById("backowl").style.background="url(singinowl2.png) center  no-repeat";
    document.getElementById("backowl").style.backgroundSize="cover";
})
sign.addEventListener('click' , function(){
    move.style.left="1%";
    bol=false;
    divmove(50,200)
    document.getElementById("backowl").style.background="url(singupowl.png) center  no-repeat";
    document.getElementById("backowl").style.backgroundSize="cover";
})
function left(after){
        move.style.transition="left 0.2s ease";
        move.style.left=after+"%";
}
function leftout(before){
        move.style.transition="left 0.2s ease";
        move.style.left=before+"%";
}

register.addEventListener('mouseenter',function(){
    left(49);
})
register.addEventListener('mouseleave',function(){
    if(bol==false){
        leftout(1)
    }
})
sign.addEventListener('mouseenter' , function(){
    left(1);
})
sign.addEventListener('mouseleave' , function(){
    if(bol==true){
        leftout(49);
    }
})



/* owl move ment */
document.getElementById("password").addEventListener('mouseenter',function(){
    document.getElementById("owl1").style.display="none";
    document.getElementById("owl2").style.display="block";
    look();
})
document.getElementById("password").addEventListener('mouseout',function(){
    document.getElementById("owl1").style.display="block";
    document.getElementById("owl2").style.display="none";
})

function look(){
    document.getElementById("bol1").style.tranition="top 4s ease-in-out"
    document.getElementById("bol2").style.tranition="top 4s ease-in-out"
    document.getElementById("bol2").style.top="120px";
    document.getElementById("bol1").style.top="122px";
    document.getElementById("bol1").style.animation="non";
    document.getElementById("bol2").style.animation="non";
}
function lookout(){
    document.getElementById("bol2").style.top="115px";
    document.getElementById("bol1").style.top="114px";
/*     document.getElementById("bol1").style.animation="eye 8s ease-out infinite";
    document.getElementById("bol2").style.animation="eye2 8s ease-out infinite"; */
}
/* document.getElementById("mlogin").addEventListener('mouseenter',function(){

   look();
}) */

var currentXPosition=0;
var currentYPosition=0;
const mouseMove = (event) => {

    currentXPosition=(event.clientX/(window.innerWidth/3));
    currentYPosition=(event.clientY/(window.innerHeight/9));
    if(true){
        document.getElementById("bol1").style.left=(currentXPosition+27.8)+"%";
        document.getElementById("bol2").style.left=(currentXPosition+56.8)+"%";
    }
    if(currentYPosition<180){
        document.getElementById("bol1").style.top=(currentYPosition+40)+"px";
        document.getElementById("bol2").style.top=(currentYPosition+40)+"px";
    }

    console.log(currentXPosition,currentYPosition)
}
window.addEventListener('mousemove' , mouseMove);



    
