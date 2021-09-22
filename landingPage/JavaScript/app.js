//Selectors
const sideBar = document.querySelector('.sideBar');
const menuBtn = document.querySelector('.menuButton');

//Event Listeners
menuBtn.addEventListener('click', openCloseSideBar);

//Functions
function openCloseSideBar(event){
    console.log("GeeksforGeeks");
    sideBar.style.width = "0px";
}

// finish up menue 
// finish layout of all other componets/ other javascript functionality 
// make it look pretty
// moving it to full page dynamic