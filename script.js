const mottoImage = document.getElementsByClassName("mottoImage")[0];
const menuContainer = document.querySelector(".menuContainer");
const containerTag = document.querySelector(".container");
const headTextTag = document.querySelector(".headText");
const headTag = document.getElementsByClassName("head")[0];
window.addEventListener("load",()=>{
    containerTag.style.marginTop  = `${headTag.offsetHeight + 15 }px`;
})


/*let num=0;
setInterval(() => {
    num +=1;
    if(num < 3){
    mottoImage.src = "promo.png";
    
    }else if(num<10){
        mottoImage.src = "viberImage.png";
    }else if(num===10){
        num=0;
    }
    
},1000);*/

const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const chooseMenu = document.querySelector(".chooseMenu");
const chooseText = document.querySelector(".chooseText");


menuContainer.addEventListener("click", () => {
    if (menuContainer.classList.contains("isOpened")){
        line1Tag.classList.remove("line1Change");
    line2Tag.classList.remove("line2Change");
    line3Tag.classList.remove("line3Change");
    menuContainer.classList.remove("isOpened");
        chooseText.innerHTML=`<h1 class="headtext"> Website links... </h1>`;
        chooseMenu.innerHTML="";
    }else{
        chooseMenu.innerHTML="";
    line1Tag.classList.add("line1Change");
    line2Tag.classList.add("line2Change");
    line3Tag.classList.add("line3Change");
    menuContainer.classList.add("isOpened");
    chooseMenu.innerHTML=`<div class="menuChange">
    <div class="web menuText">FootBall</div>
    <div class="menu3 menuText">Other</div>
    <div class="oneXBet menuText">1xBet</div>
    </div>`
const webTag= document.querySelector(".web");
const oneXBetTag = document.querySelector(".oneXBet");


webTag.addEventListener("click",()=>{
    chooseMenu.innerHTML="";
    containerTag.innerHTML="";
    containerTag.innerHTML=`<div class="imagelogo">
                
    <a href="https://www.thepunterspage.com/kickform/predictions/" ><img src="Screenshot (2).png"  class="image" /> </a> 
    </div>
    <div class="imagelogo">
        <a href="https://www.forebet.com/en/football-predictions"><img src="Screenshot (9).png" class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://www.windrawwin.com/predictions/today/"><img src="Screenshot (10).png" class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://afootballreport.com/"><img src="Screenshot (13).png" class="image" /></a>
    </div>
    

    <div class="imagelogo">
        
        <a href="https://www.predictz.com/predictions/"><img src="Screenshot (11).png" class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://www.mightytips.com/football-predictions/"><img src="Screenshot (12).png"  class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://talkfootball.co.uk/"><img src="Screenshot (14).png" class="image" /></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://www.sportytrader.com/en/"><img src="Screenshot (15).png" class="image" /></a>
    </div>
    
    <div class="imagelogo">
        
        <a href="https://www.tips180.com/"><img src="Screenshot (16).png" class="image" /></a>
    </div>
    <div class="imagelogo" >
        
        <a href="https://confirmbets.com/home/index"><img src="Screenshot (17).png" class="image" /></a>
    </div>`;
line1Tag.classList.remove("line1Change");
    line2Tag.classList.remove("line2Change");
    line3Tag.classList.remove("line3Change");
    menuContainer.classList.remove("isOpened");
        chooseText.innerHTML="";
        chooseText.innerHTML=`<h1 class="headtext"> Football links... </h1>`;
        containerTag.style.height = "1500px"
})
oneXBetTag.addEventListener("click",()=>{
    chooseMenu.innerHTML="";
    containerTag.innerHTML="";
    containerTag.innerHTML=`<div class="imagelogo">
    <a href="https://refpa.top/L?tag=d_2336907m_1622c_&site=2336907&ad=1622&r=my/registration/"><img src="acc open .png" class="image" /></a>
</div>
<div class="imagelogo">
    <a href="https://download1xbet.com/"><img src="apk down.png" class="image"/></a>
</div>`;

line1Tag.classList.remove("line1Change");
line2Tag.classList.remove("line2Change");
line3Tag.classList.remove("line3Change");
menuContainer.classList.remove("isOpened");
    chooseText.innerHTML="";
    chooseText.innerHTML=`<h1 class="headtext"> 1xBet Links </h1>`;
    containerTag.style.height = "900px"

})

        }
})

