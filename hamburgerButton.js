console.log("connected");
let hambuger=document.querySelector(".hamburger");
let hambugerOpen=false;
hambuger.addEventListener("click",function(){
console.log("triggered");
    if(!hambugerOpen){
        hambuger.classList.add('hamburgerOpen');
        hambugerOpen=true;
    }else{
        hambuger.classList.remove('hamburgerOpen');
        hambugerOpen=false;
    }

});