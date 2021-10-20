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

    document.querySelector('.dimOver').style.height = "200%";
    // document.querySelector('.dimOver').style.top = "100%";
    // document.querySelector('.dimOver').style.bottom = "100%";
    // document.querySelector('.dimOver').style.right = "100%";
    // document.querySelector('.dimOver').style.left = "100%";

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



// get overly over the imagr of the banana



//* get the "why our bananas" loking nice
//* get diffrint photos for the images
//*get funny text for each overlay 
// *fix overlay text
// *thoink of nect module
// * get images for revirwers 
// * stlye review section
// * ending module where we sell one more time
// * style that above
// * stay in touch where they can follow in social media and email?
// style that above
