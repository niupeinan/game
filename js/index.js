window.onload=function(){
    let screen=document.querySelector(".screen");
    let life=document.querySelector(".life");
    let jf=document.querySelector(".jf");
    let replay=document.querySelector(".replay");
    let keybox=document.querySelector(".keybox");
    let bgmusic=document.querySelector(".bgmusic");
    let death=document.querySelector(".death");
    let replay1=document.querySelector(".death .replay");
    let flag=false
    keybox.ontouchstart=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(0.8)";
            gameobj.keyDel(e.target.innerText);
        }
    }
    keybox.ontouchend=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(1)"
        }
    }
    bgmusic.ontouchstart=function(e){
       if(e.target.className=="astart"){
          e.target.className="aend"
       }
       else{
        e.target.className="astart"
       }
    }
    
    replay.ontouchstart=function(e){
        if(e.target.className=="start"){
            flag=false
           e.target.className="end"
           gameobj.pause();
           
        }
        else{
            flag=true
         e.target.className="start"
         gameobj.run();
         
        }
     }
     replay1.onclick=function(){
        gameobj.replay2();
     }
    




    let gameobj=new Game;
    gameobj.screen=screen;
    gameobj.replay=replay;
    gameobj.bgmusic=bgmusic;
    gameobj.jf=jf;
    gameobj.death=death;
    gameobj.life=life;
    gameobj.init()
    gameobj.createletter(5);
    // gameobj.jfadd();
    gameobj.run();
}