let r;
let x;

r=parseInt(window.prompt("rows",5),10);

if(r!=null){
    x=parseInt(window.prompt("columns",5),10);
   
};
let P1="P1";
let P2="P2";

let state={

    currplayer:"P1",
    P1box:0,
    P2box:0,
    totalbox:x*r
    };
let k=0;
let d=100/r;
let m=100/r;
let c=100/x;
let R=100;
const toggle= function(){
    if(state.currplayer===P1){
        state.currplayer="P2";
      }else if(state.currplayer===P2){
        state.currplayer="P1";
    }
}
for(let i=0;i<x;i++){
document.querySelector("#box").innerHTML+=` <div class='inner' id="N${i}" style="width:${c}%;height:${d}%;left:${k}% ">
<div class="top" id="T${i}"></div>
<div class="bottom" id="B${i}" style="bottom:${0}%"></div>

<div class="right" id="R${i}"></div>
<span id="S${i}"></span>
</div>`;


;
k+=(100/x);

;}
k=0;


for(let j=1;j<r;j++){
for(let i=0;i<x;i++){
    document.querySelector("#box").innerHTML+=` <div class='inner ' id="N${(x*j)+i}" style="height:${d}%;width:${c}%;top:${(100/r)*(j)}%;left:${k}% ">
    <div class="bottom" id="B${(x*j)+i}" style="bottom:${0}%"></div>
  
    <div class="right" id="R${(x*j)+i}"></div>
    <span id="S${(x*j)+i}"></span>
    </div>`;
   
k+=(100/x);

}
k=0;

}




for(let i=0;i<document.querySelector("#box").children.length;i++){
  
   if(i%x==0){
    document.querySelector("#box").children[i].innerHTML+=`<div class="left" id="L${i}" style="left:${0}%"></div>`
}
};
let dum=[];
let rdum=[];
for(let ac=0;ac<x*r;ac++){
    rdum.push([]);};
    for(let i=0;i<x*r;i++){  
      
        let idB="#B".concat(`${i}`);
        let idr="#R".concat(`${i}`);
        rdum[i].push(document.querySelector(idB));
       rdum[i].push(document.querySelector(idr));
       if((i+x)<x*r){
        rdum[i+x].push(document.querySelector(idB));
       }
       if(((i+1)%x)!=0){
        rdum[i+1].push(document.querySelector(idr));
      };
      

    }
    for(let tc=0;tc<x;tc++){
        let idt="#T".concat(`${tc}`);
        rdum[tc].push(document.querySelector(idt));
    }
    for(let lr=0;lr<r;lr++){
        let idl="#L".concat(`${lr*x}`);
    rdum[lr*x].push(document.querySelector(idl))
    };
let cb=document.getElementsByClassName("bottom");
let cr=document.getElementsByClassName("right");

let ic=document.querySelector("#box").children
for(let i=0;i<ic.length;i++){
for(let q=0;q<ic[i].children.length;q++){
ic[i].children[q].addEventListener("click",function(){
   
    if(!ic[i].children[q].classList.contains("clicked")){
    ic[i].children[q].classList.add("clicked");
    if(!rdum[i].every(cc => cc.classList.contains("clicked"))){
        toggle();
      
    };
    if(rdum[i].every(cc => cc.classList.contains("clicked"))){
        dum.push(state.currplayer);
        let idsp="#S".concat(`${i}`);
        document.querySelector(idsp).innerHTML=state.currplayer;
    };
   
}
})
}
};for(let i=0;i<cb.length;i++){
    let id="#B".concat(`${i}`);
    let idsp="#S".concat(`${i+x}`);
    let e=document.querySelector(id);
e.addEventListener("click",function(){
    if(document.querySelector(id).classList.contains("clicked")  ){
        if((i+x)<x*r){
       
        if(rdum[i+x].every(ccc => ccc.classList.contains("clicked"))){
            dum.push(state.currplayer);
            document.querySelector(idsp).innerHTML=state.currplayer;
        }
    }
    }
})}
for(let i=0;i<cr.length;i++){
    let id="#R".concat(`${i}`);
    let e=document.querySelector(id);
    let idsp="#S".concat(`${i+1}`);
   e.addEventListener("click",function(){
        if(document.querySelector(id).classList.contains("clicked")){
            if(((i+1)%x)!=0){
          
            if( rdum[i+1].every(ccc => ccc.classList.contains("clicked"))){
                dum.push(state.currplayer);
                document.querySelector(idsp).innerHTML=state.currplayer;
            }
        }
        }
        })}
        
window.addEventListener("click",function(){
   

let P1b=[];
let P2b=[];
for(let cw=0;cw<ic.length;cw++){
    let ids="#S".concat(`${cw}`);
   if(document.querySelector(ids).innerHTML=="P1"){
    P1b.push(1);
   }else if(document.querySelector(ids).innerHTML=="P2"){
    P2b.push(1);
   }
    
        
      
    
}
state.P1box=P1b.length;
state.P2box=P2b.length;
if(state.P1box+state.P2box==state.totalbox){
    if(state.P1box<state.P2box){
        window.alert("player2 win");
    }else if(state.P1box>state.P2box){
        window.alert("player1 win");
    }else{
        window.alert("draw");
    }
}

document.querySelector(`#test`).innerHTML="PLAYER 2:"+state.P2box;
document.querySelector(`#wot`).innerHTML="PLAYER 1:"+state.P1box;
document.querySelector(`#player`).innerHTML="TURN:"+state.currplayer;

})



