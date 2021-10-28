//Selectors
const headerBar = document.querySelector('.headerBar');
const mediaWidth = matchMedia('(min-width: 1170px)');
const menuBtn = document.querySelector('.menuButton');
const sideBar = document.querySelector('.sideBar');
const sideBarBtn = document.querySelector('.sideBarButton');


//Event Listeners
sideBarBtn.addEventListener('click', CloseSideBar);
menuBtn.addEventListener('click', OpenSideBar);
mediaWidth.addEventListener('change', menuChange);


//Functions
function CloseSideBar(event){
    console.log("GeeksforGeeks");
    sideBar.style.width = "0px";
    document.body.style.background = "rgba(0, 0, 0, 0)";
    document.querySelector('.dimOver').style.height = "0";
}

function OpenSideBar(event){
    console.log("GeeksforGeeks2222");
    sideBar.style.width = "50%";
    document.querySelector('.dimOver').style.height = "200%";
 
}