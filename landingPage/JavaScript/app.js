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
    // document.querySelector('body').style.filter = "brightness(1)";
}

function OpenSideBar(event){
    console.log("GeeksforGeeks2222");
    sideBar.style.width = "50%";
    document.querySelector('.dimOver').style.height = "200%";
 
}


// function menuChange(event){
//     if(mediaWidth.matches == 1){
//         console.log("yeerrrr")
//         // create container 
//         const menuAdd = document.createElement('div');
//         menuAdd.classList.add('altMenu');
//         menuAdd.style.width = '100%';
//         menuAdd.style.background = 'rgb(18, 129, 198)';

//         // create ul
//         const altNavLinks = document.createElement('ul');
//         altNavLinks.classList.add('altNavLinks');
//         altNavLinks.style.display = 'flex';
//         altNavLinks.style.justifyContent = 'center';
//         altNavLinks.style.padding = '1rem';
//         altNavLinks.style.gap = '5rem';

//         // create li
//         const caltMenuIcon = document.createElement('li');
//         caltMenuIcon.classList.add('altMenuIcon');
    
//         // create a
//         const homelink = document.createElement('a');
//         homelink.innerText = 'home';



// .altMenu {
//     width: 100%;
//     background: rgb(18, 129, 198);
//     /* display: none; */
// }

// .altNavLinks {
//     display: flex;
//     justify-content: center;
//     padding: 1rem;
//     gap: 5rem;
// }

// .altMenu ul li {
//     font-size: 1.5rem;
//     list-style: none;
//     margin-left: 20px;
//     justify-content: center;
// }

// .altMenu ul li a {
//     text-decoration: none;
//     font-size: 1.5rem;
//     color: rgb(252, 233, 205);
// }






//         menuAdd.style.width = '500px';
//         menuAdd.style.display = 'block';
//         //append to headerBar
//         headerBar.appendChild(menuAdd);




//         <div class="altMenu">
//             <ul class="altNavLinks">
//                 <li><i class="altMenuIcon"></i> <a href="#">Home</a></li>
//                 <li><i class="altMenuIcon"></i> <a href="#">Deals</a></li>
//                 <li><i class="altMenuIcon"></i> <a href="#">Gift Baskets</a></li>
//                 <li><i class="altMenuIcon"></i> <a href="#">About Us</a></li>
//                 <li><i class="altMenuIcon"></i> <a href="#">My Account</a></li>
//             </ul>
//         </div>





        

// }




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
// * style that above
// change the font
// make color cohecent
// change color of button over hover

