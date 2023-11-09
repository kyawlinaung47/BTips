const mottoImage = document.getElementsByClassName("mottoImage")[0];
const menuContainer = document.querySelector(".menuContainer");
const containerTag = document.querySelector(".container");
const headTextTag = document.querySelector(".headText");
const headTag = document.getElementsByClassName("head")[0];
const imageTag = document.getElementsByClassName("imagelogo");
const waitTextTag = document.querySelector(".waitText");
const eSportDiv = document.querySelector(".eSportDiv");

/*window.addEventListener("load",() =>{
    const getNum = localStorage.getItem("accepted");
    if (getNum== 1){
        web();
    }
    if (getNum == 2){
        basketBall();
    }
    if (getNum == 3){
        esport()
        menu();
    }
    if (getNum == 4){
        csgo();
    }
    if (getNum == 20){
        oneXBet();
    }
})*/

const oneXBet = ()=>{
    //localStorage.setItem("accepted","20")
    eSportDiv.innerHTML="";
    chooseMenu.innerHTML="";
    containerTag.innerHTML="";
    containerTag.innerHTML=`<div class="imagelogo">
    <a href="https://refpa.top/L?tag=d_2336907m_1622c_&site=2336907&ad=1622&r=my/registration/" ><img src="acc open .png" class="image" /></a>
</div>
<div class="imagelogo">
    <a href="https://download1xbet.com/" ><img src="apk down.png" class="image"/></a>
</div>`;

line1Tag.classList.remove("line1Change");
line2Tag.classList.remove("line2Change");
line3Tag.classList.remove("line3Change");
menuContainer.classList.remove("isOpened");
    chooseText.innerHTML="";
    chooseText.innerHTML=`<h1 class="headtext"> 1xBet Links </h1>`;
    containerTag.style.height = "900px"
    
}

const web = ()=>{
    //localStorage.setItem("accepted","1");
    eSportDiv.innerHTML="";
    chooseMenu.innerHTML="";
    containerTag.innerHTML="";
    containerTag.innerHTML=`<div class="imagelogo">
                
    <a href="https://www.thepunterspage.com/kickform/predictions/"  ><img src="Screenshot (2).png"  class="image" /> </a> 
    </div>
    <div class="imagelogo">
        <a href="https://www.forebet.com/en/football-predictions" ><img src="Screenshot (9).png" class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://www.windrawwin.com/predictions/today/" ><img src="Screenshot (10).png" class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://afootballreport.com/" ><img src="Screenshot (13).png" class="image" /></a>
    </div>
    

    <div class="imagelogo">
        
        <a href="https://www.predictz.com/predictions/" ><img src="Screenshot (11).png" class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://www.mightytips.com/football-predictions/" ><img src="Screenshot (12).png"  class="image"/></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://talkfootball.co.uk/" ><img src="Screenshot (14).png" class="image" /></a>
    </div>
    <div class="imagelogo">
        
        <a href="https://www.sportytrader.com/en/" ><img src="Screenshot (15).png" class="image" /></a>
    </div>
    
    <div class="imagelogo">
        
        <a href="https://www.tips180.com/" ><img src="Screenshot (16).png" class="image" /></a>
    </div>
    <div class="imagelogo" >
        
        <a href="https://confirmbets.com/home/index" ><img src="Screenshot (17).png" class="image" /></a>
    </div>`;
line1Tag.classList.remove("line1Change");
    line2Tag.classList.remove("line2Change");
    line3Tag.classList.remove("line3Change");
    menuContainer.classList.remove("isOpened");
        chooseText.innerHTML="";
        chooseText.innerHTML=`<h1 class="headtext"> Football links... </h1>`;
        containerTag.style.height = "1500px"
}

const basketBall = ()=>{
    //localStorage.setItem("accepted","2");
    eSportDiv.innerHTML="";
    chooseMenu.innerHTML="";
    containerTag.innerHTML="";
    containerTag.innerHTML=`<div class="imagelogo">
    <a href="https://www.sportytrader.com/en/betting-tips/basketball/today/"  ><img src="Screenshot (15).png"  class="image" /> </a> 
    </div>
    <div class="imagelogo">
    <a href="https://m.forebet.com/en/basketball/predictions-today"  ><img src="Screenshot (9).png"  class="image" /> </a> 
    </div>
    <div class="imagelogo">
    <a href="https://www.feedinco.com/basketball-predictions"  ><img src="Screenshot (18).png"  class="image" /> </a> 
    </div>
    `;
line1Tag.classList.remove("line1Change");
line2Tag.classList.remove("line2Change");
line3Tag.classList.remove("line3Change");
menuContainer.classList.remove("isOpened");
    chooseText.innerHTML="";
    chooseText.innerHTML=`<h1 class="headtext">Basketball Links </h1>`;
    containerTag.style.height = "900px"
}

const esport = ()=>{
    //localStorage.setItem("accepted","3");
    eSportDiv.style.display = "block";
    eSportDiv.innerHTML=`<div>
    <div class="csgo menuText">Csgo</div>
    <div class="dota2 menuText">Dota 2</div>
    <div class="fifa menuText">FIFA</div>
    <div class="lol menuText">LOL</div>
    </div>`

    const csgoTag = document.querySelector(".csgo");
    const dota2Tag = document.querySelector(".dota2");
    const fifaTag = document.querySelector(".fifa");
    const lolTag = document.querySelector(".lol");
    
    
    csgoTag.addEventListener("click",csgo)

}

const csgo = ()=>{
    //localStorage.setItem("accepted","4");
    eSportDiv.innerHTML="";
    chooseMenu.innerHTML="";
    containerTag.innerHTML="";
    containerTag.innerHTML=`<div class="imagelogo">
    <a href="https://www.feedinco.com/esports/betting-tips/csgo" ><img src="Screenshot (18).png" class="image eimage" /></a>
</div>
`;

line1Tag.classList.remove("line1Change");
line2Tag.classList.remove("line2Change");
line3Tag.classList.remove("line3Change");
menuContainer.classList.remove("isOpened");
    chooseText.innerHTML="";
    chooseText.innerHTML=`<h1 class="headtext"> Csgo Links </h1>`;
    containerTag.style.height = "900px"

    const eimageTag = document.getElementsByClassName("eimage");
    for (let i=0; i<eimageTag.length; i++){
        eimageTag[i].addEventListener("click",()=>{
            
            setTimeout(()=>{
                waitTextTag.style.bottom = "0px"
            },100)
        })
    }
}


for (let i=0; i<imageTag.length; i++){
    imageTag[i].addEventListener("click",()=>{
        
        setTimeout(()=>{
            waitTextTag.style.bottom = "0px"
        },100)
    })
}



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
        eSportDiv.innerHTML="";
    }else{
        eSportDiv.innerHTML="";
        chooseMenu.innerHTML="";
    line1Tag.classList.add("line1Change");
    line2Tag.classList.add("line2Change");
    line3Tag.classList.add("line3Change");
    menuContainer.classList.add("isOpened");
    menu();





        }});



        const menu = () =>{
            chooseMenu.innerHTML=`<div class="menuChange">
        <div class="web menuText">FootBall</div>
        <div class="basketBall menuText">Basketball</div>
        <div class="eSport menuText">Esport</div>
        <div class="oneXBet menuText">1xBet</div>
        </div>`
    const webTag= document.querySelector(".web");
    const oneXBetTag = document.querySelector(".oneXBet");
    const basketBallTag = document.querySelector(".basketBall");
    const eSportTag = document.querySelector(".eSport");
    
    eSportTag.addEventListener("click",esport)
    
    
    basketBallTag.addEventListener("click",basketBall)
    
    webTag.addEventListener("click",web);
    
    oneXBetTag.addEventListener("click",oneXBet);
        }
