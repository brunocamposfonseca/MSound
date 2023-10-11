//window.oncontextmenu = function() {return false;}

let profileDropdownList = document.querySelector(".ul1-pfllist-topbar");

let threedotsopt = document.querySelector(".div4-threedots-playerbar"),
    boxthreedotsopt = document.querySelector(".div5-optionsbox-playerbar");

let btn = document.querySelector(".div2-pfldropbtn-topbar");
const cookieBox = document.querySelector(".div1-cookie-modal"),
      btnCookie = document.querySelectorAll(".btn1-cookiebtn-modal");

let mainview = document.querySelector(".div3-Ctn__main-view"),
    topbarmain = document.querySelector(".div3-Ctn__top-bar"),
    playerbar = document.querySelector(".div3-Ctn__player-bar"),
    ctnplayerbar = document.querySelector(".div1-container-playerbar");

const executeCodes = () => {
    if (document.cookie.includes("MySound")) return
    cookieBox.classList.add("actshow");

    btnCookie.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("actshow");

            if(button.id == "aceitarcookie") {
                document.cookie = "cookieBy= MySound; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

threedotsopt.addEventListener('click', abriropt);

function abriropt(){
    boxthreedotsopt.classList.toggle("activeopt");
}

window.addEventListener("load", executeCodes);

function toggle(){
    profileDropdownList.classList.toggle("activepfl");
}

window.addEventListener('click', function(e){
    boxthreedotsopt.classList.remove("activepfl");
    if(!btn.contains(e.target)){
        profileDropdownList.classList.remove("activepfl");
    };
});

function voltar(){
    window.history.back();
}

function ir(){
    window.history.go(1);
}

function mobileplayer(){
    if (window.innerWidth <= 800){
        mainview.style.display = 'none';
        playerbar.classList.add("act-player");
        ctnplayerbar.classList.add("act-ctnplayer");
    }  
}

function clicklink(url, Xelement){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            Xelement.innerHTML = xmlttp.responseText;
        }
    }
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

function loader(){
    document.querySelector('.div1-loader-loader').classList.add('loadOut');
}

function loadOut(){
    setInterval(loader, 3000);
}

window.onload = loadOut;

