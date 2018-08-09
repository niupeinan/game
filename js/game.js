class Game{


    //构造函数
    constructor(){
        this.screen=""
        this.life=""
        this.bgmusic=""
        this.replay=""
        this.life=""
        this.jf=""
        this.letterbox=[];
        this.jfnum=0
        this.top=0.1
        this.lifenum=10;
        this.death=""
        this.t=""
    }
    init(){
        this.screen.innerText=""
        this.jf.innerText=0
        this.life.innerText=10
        this.replay.className="end"
        this.death.style.display="none"
        this.top=0.1;
        this.letterbox=[];
        this.top=0.1
        this.lifenum=10;
    }
    //
    //创建字母
    createletter(num=1){
        for(let i=0;i<num;i++){
            let obj={}
            let name=""
            let left
            let div=document.createElement("div");
            do{
                let ASCII=Math.floor(Math.random()*26+65);
                name=String.fromCharCode(ASCII);
            }while(this.iscf(name))
            
            do{
                left=Math.random()*5.7+0.6;
            }while(this.iscd(left))
            
            let top=0.9
            div.className="letter";
            div.style.backgroundImage=`url('img/A_Z/${name}.png')`
            div.style.left=`${left}rem`
            div.style.top=`${top}rem`
            obj.name=name;
            obj.left=left;
            obj.top=top;
            obj.node=div;
            this.letterbox.push(obj)
            this.screen.appendChild(div);
            
        }
        
    }
    iscf(name){
        for(let item of this.letterbox){
            if(name==item.name){
                return true
            }
            
        }
        return false
    }
    iscd(left){
        for(let item of this.letterbox){
            if(Math.abs(left-item.left)<0.53){
                return true
            }
            
        }
        return false
    }
    run(){
        this.t=setInterval(()=>{
            this.letterbox.forEach((item,index)=>{
                item.top+=this.top;
                if(item.top>=7){
                    this.screen.removeChild(item.node);
                    this.letterbox.splice(index,1);
                    this.createletter();
                    this.lifenum--;
                    this.lifesub();
                }
                item.node.style.top=item.top+"rem"
            })
        },200)
    }
    keyDel(name){
        this.letterbox.forEach((item,index)=>{
           if(name==item.name){
                this.jfnum++;
                
                if(this.jfnum>0 && this.jfnum<10){
                    this.top=0.1
                }
                else if(this.jfnum>=10 && this.jfnum<20){
                    this.top=0.2
                }
                else{
                    this.top=0.3;
                }
                this.jfadd();
                this.screen.removeChild(item.node);
                this.letterbox.splice(index,1);
                this.createletter();
           }
        })
    }
    jfadd(){
        this.jf.innerText=this.jfnum;
    }
    lifesub(){
        if(this.lifenum<=0){
            this.death.childNodes[1].childNodes[1].innerText=this.jfnum
            this.death.style.display="block"
            this.pause();
        }
        this.life.innerText=this.lifenum;
    }
    pause(){
        clearInterval(this.t)
    }
    replay2(){
        this.init();
        this.createletter(5);
    }
}