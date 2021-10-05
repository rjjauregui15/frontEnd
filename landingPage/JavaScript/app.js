//Selectors
const sideBar = document.querySelector('.sideBar');
const sideBarBtn = document.querySelector('.sideBarButton');
const menuBtn = document.querySelector('.menuButton');

//Event Listeners
sideBarBtn.addEventListener('click', CloseSideBar);
menuBtn.addEventListener('click', OpenSideBar);


//Functions
function CloseSideBar(event){
    console.log("GeeksforGeeks");
    sideBar.style.width = "0px";
    document.body.style.background = "rgba(0, 0, 0, 0)";
    document.querySelector('.dimOver').style.height = "0";
    // document.querySelector('body').style.filter = "brightness(1)";
}

function OpenSideBar(event){
    console.log("GeeksforGeeks2222");
    sideBar.style.width = "50%";

    document.querySelector('.dimOver').style.height = "100%";

    // document.body.style.background = "rgba(0, 0, 0, 0.5)";
    // document.querySelector('body').style.filter = "brightness(50%)";
    // sideBar.style.filter = "brightness(100%)";
}

// finish everything before we mess with more than 750px
// even style



// finish header bar -----  change the font ------
// change staring menu position
// finish layout of all other componets/ other javascript functionality 
// make it look pretty
// moving it to full page dynamic