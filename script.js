let score = 0;
let hearts = 3;
let bunnySpeed = 60;

let bunny = document.getElementById("bunny");
let vw = window.innerWidth;
let vh = window.innerHeight;

let counter = document.getElementById("counter");
heartsLabel = document.getElementById("hearts")
heartsLabel.innerText = hearts;

window.addEventListener('resize', function() { 
vw = this.innerWidth;
vh = this.innerHeight;
});


document.onkeydown = checkKey;
function checkKey(e){

    

    e=e || window.event;

    if(e.keyCode == '39'){


        if(bunny.style.left != 0){
        let bunnyLeft = parseInt(bunny.style.left.slice(0, -2)) 
        bunnyLeft += bunnySpeed;
        if(bunnyLeft > vw ){
            bunny.style.transition = "all 0s";
            bunny.style.left = "0px";
            setTimeout(()=>{bunny.style.transition = "all 0.1s";}, 100);
        }
        else{
        bunny.style.left = bunnyLeft + "px";
        }
       
        }
        else{
            bunny.style.left=  bunnySpeed + "px";
            
        }


    }
    else if(e.keyCode == '37'){


        if(bunny.style.left != 0){
        let bunnyLeft = parseInt(bunny.style.left.slice(0, -2)) 
        bunnyLeft -= bunnySpeed;
        if(bunnyLeft < -10){

            bunny.style.transition = "all 0s";
            bunny.style.left = vw + "px";
            setTimeout(()=>{bunny.style.transition = "all 0.1s";}, 100);
            
        }
        else{
        bunny.style.left = bunnyLeft + "px";
        }
       
        }
        else{
            bunny.style.left= bunnySpeed + "px";
           
        }

      


    }
    

        

    

}

setInterval(jajko, 1500);
setInterval(shoe, 5000);
setInterval(premiumEgg, 11040);
setInterval(heartEgg, 41300);

function jajko(){

let jajko = createEgg();
jajko.style.backgroundImage = `URL("images/rysunek-1.svg")`

const colision = setInterval(()=>{
    if(overlaps(jajko, bunny)){
        
        jajko.remove();
        hearts++;
        clearInterval(colision);
        score++;
        counter.innerText = score;
     }
}, 10)
 

setTimeout( ()=>{
    clearInterval(colision)
jajko.remove();
hearts--;
heartsLabel.innerText = hearts;
if(hearts <= 0){
    
    localStorage.setItem("lastScore", score)
    localStorage.setItem("message", "YOU LOST")
    if(score > localStorage.getItem("bestScore")){
        localStorage.setItem("bestScore", score);
    }
    open("index.html", "_self")

}


}, 4500 )



}

  function shoe(){

    let shoe = createEgg();
    shoe.classList.add("shoe");
    shoe.style.backgroundImage = `URL("images/rysunek-4.svg")`
    
    const colision = setInterval(()=>{
        if(overlaps(shoe, bunny)){
            
            shoe.remove();
            hearts = 0;
            clearInterval(colision);
            localStorage.setItem("message", "YOU LOST")
            localStorage.setItem("lastScore", score)
            if(score > localStorage.getItem("bestScore")){
                localStorage.setItem("bestScore", score);
            }
            
            open("index.html", "_self");
            
    
            
         }
    }, 10)
     
     
    setTimeout( ()=>{
        clearInterval(colision)
    shoe.remove();
    
    }, 4000 )


    
    
    
    }
    
function premiumEgg(){

    let premEgg = createEgg();
    premEgg.style.backgroundImage = 'URL("images/rysunek-2.svg")';

    const colision = setInterval(()=>{
        if(overlaps(premEgg, bunny)){
            
            premEgg.remove();
            clearInterval(colision);
            score = score + 5;
            counter.innerText = score;
         }
    }, 10)

    setTimeout( ()=>{
        clearInterval(colision)
    premEgg.remove();
    }, 4500 )

}

function heartEgg(){

    let hEgg = createEgg();
    hEgg.style.backgroundImage = 'URL("images/rysunek-3.svg")';

    const colision = setInterval(()=>{
        if(overlaps(hEgg, bunny)){
            
            hEgg.remove();
            clearInterval(colision);
            hearts += 2;
            heartsLabel.innerText = hearts;
         }
    }, 10)

    setTimeout( ()=>{
        clearInterval(colision)
    hEgg.remove();
    }, 4500 )


}

    function createEgg(){

        let jajko = document.createElement("div");
        jajko.setAttribute('class','jajko');
        jajko.style.left = Math.random() * 97 + "vw";
        document.body.appendChild(jajko);

        setTimeout(()=>{
            jajko.style.top = "100vh"
        }, 10)

        return jajko;
    }
    
    function overlaps(a, b) {
        let rect1 = a.getBoundingClientRect();
        let rect2 = b.getBoundingClientRect();
    
        let isInHoriztonalBounds =
          rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    
        let isInVerticalBounds =
          rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    
        let isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    
        return isOverlapping;
      }

function pause(){
    localStorage.setItem("message", "YOU QUIT");
}