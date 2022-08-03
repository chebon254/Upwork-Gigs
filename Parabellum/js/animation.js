//get world element path
let africa=document.getElementsByClassName('africa')[0];
let north_america=document.getElementsByClassName('north_america')[0];
let south_america=document.getElementsByClassName('south_america')[0];
let asia=document.getElementsByClassName('asia')[0];
let australia=document.getElementsByClassName('australia')[0];
let europe=document.getElementsByClassName('europe')[0];
let world=document.getElementsByClassName('world')[0];
let mailIcon=document.getElementsByClassName('mail-icon')[0];
let mailText=document.getElementsByClassName('mail-text')[0];
let mail=document.getElementsByClassName('mail')[0];
let gif=document.getElementsByClassName('gif')[0];

function AnimationA(){
    setTimeout(() => {
        africa.classList.add('light-animation-africa')
        australia.classList.add('light-animation-australia')
        asia.classList.add('light-animation-asia')
        europe.classList.add('light-animation-europe')
        north_america.classList.add('light-animation-north_america')
        south_america.classList.add('light-animation-south_america')
    }, 4700);
}
AnimationA()

function mailAnimation(){
    mail.addEventListener('mouseover',(e)=>{
        mailIcon.style.fill='black';
        let paths=mailIcon.querySelectorAll('path')
        paths.forEach((item)=>{item.style.stroke='white'})
        mailText.classList.add('fill-text');
        mailText.addEventListener('animationend',(e)=>{
            mailText.classList.remove('fill-text');
        })
    })
    mail.addEventListener('mouseout',(e)=>{
        mailIcon.style.fill='white';
        let paths=mailIcon.querySelectorAll('path')
        paths.forEach((item)=>{item.style.stroke='black'})
    })
}
mailAnimation()

function reloadDetection(){
    const pageAccessedByReload = (
        (window.performance.PerformanceNavigationTiming  && window.performance.PerformanceNavigationTiming.type === 1) ||
          window.performance
            .getEntriesByType('navigation')
            .map((nav) => nav.type)
            .includes('reload')
    );
    
    if(pageAccessedByReload){
        gif.src="./assets/ezgif3.png";
        gif.src="./assets/ezgif.com-gif-maker.gif"
    }
    
    function checkRefresh() {
        if (document.location.hash === '#visited') {
            console.log('Refreshed');
            return true;
        } else {
            document.location.hash = 'visited';
            return false;
        }
    }
    if(checkRefresh){
        gif.src="./assets/ezgif3.png";
        gif.src="./assets/ezgif.com-gif-maker.gif"
    }
}
reloadDetection()
















// let hover=false;

// function animationCicle(){
//     africa.classList.add('light-animation')
//     australia.classList.remove('light-animation')
//     north_america.classList.remove('light-animation')
//     south_america.classList.remove('light-animation')
//     europe.classList.remove('light-animation')
//     asia.classList.remove('light-animation')
//     let t1=setTimeout(() => {
//         australia.classList.add('light-animation')
//         africa.classList.remove('light-animation')
//         north_america.classList.remove('light-animation')
//         south_america.classList.remove('light-animation')
//         europe.classList.remove('light-animation')
//         asia.classList.remove('light-animation')
//     }, 2000);
//     let t2=setTimeout(() => {
//         asia.classList.add('light-animation')
//         africa.classList.remove('light-animation')
//         north_america.classList.remove('light-animation')
//         south_america.classList.remove('light-animation')
//         europe.classList.remove('light-animation')
//         australia.classList.remove('light-animation')
//     }, 3500);
//     let t3=setTimeout(() => {
//         europe.classList.add('light-animation')
//         africa.classList.remove('light-animation')
//         north_america.classList.remove('light-animation')
//         south_america.classList.remove('light-animation')
//         asia.classList.remove('light-animation')
//         australia.classList.remove('light-animation')
//     }, 5000);
//     let t4=setTimeout(() => {
//         north_america.classList.add('light-animation')
//         africa.classList.remove('light-animation')
//         europe.classList.remove('light-animation')
//         south_america.classList.remove('light-animation')
//         asia.classList.remove('light-animation')
//         australia.classList.remove('light-animation')
//     }, 6500);
//     let t5=setTimeout(() => {
//         south_america.classList.add('light-animation')
//         africa.classList.remove('light-animation')
//         europe.classList.remove('light-animation')
//         north_america.classList.remove('light-animation')
//         asia.classList.remove('light-animation')
//         australia.classList.remove('light-animation')
//     }, 8000);
//     // africa.addEventListener('mouseover',()=>{
//     //     clearTimeout(t1)
//     //     clearTimeout(t2)
//     //     clearTimeout(t3)
//     //     clearTimeout(t4)
//     //     clearTimeout(t5)
//     //     south_america.classList.remove('light-animation')
//     //     africa.classList.remove('light-animation')
//     //     africa.classList.add('hover-animation')
//     //     europe.classList.remove('light-animation')
//     //     north_america.classList.remove('light-animation')
//     //     asia.classList.remove('light-animation')
//     //     australia.classList.remove('light-animation')
//     //     hover=true;
//     // })
//     // australia.addEventListener('mouseover',()=>{
//     //     clearTimeout(t1)
//     //     clearTimeout(t2)
//     //     clearTimeout(t3)
//     //     clearTimeout(t4)
//     //     clearTimeout(t5)
//     //     south_america.classList.remove('light-animation')
//     //     africa.classList.remove('light-animation')
//     //     europe.classList.remove('light-animation')
//     //     north_america.classList.remove('light-animation')
//     //     asia.classList.remove('light-animation')
//     //     australia.classList.remove('light-animation')
//     //     australia.classList.add('hover-animation')
//     // })
//     // asia.addEventListener('mouseover',()=>{
//     //     clearTimeout(t1)
//     //     clearTimeout(t2)
//     //     clearTimeout(t3)
//     //     clearTimeout(t4)
//     //     clearTimeout(t5)
//     //     south_america.classList.remove('light-animation')
//     //     africa.classList.remove('light-animation')
//     //     europe.classList.remove('light-animation')
//     //     north_america.classList.remove('light-animation')
//     //     asia.classList.remove('light-animation')
//     //     asia.classList.add('hover-animation')
//     //     australia.classList.remove('light-animation')
//     // })
//     // europe.addEventListener('mouseover',()=>{
//     //     clearTimeout(t1)
//     //     clearTimeout(t2)
//     //     clearTimeout(t3)
//     //     clearTimeout(t4)
//     //     clearTimeout(t5)
//     //     south_america.classList.remove('light-animation')
//     //     africa.classList.remove('light-animation')
//     //     europe.classList.remove('light-animation')
//     //     europe.classList.add('hover-animation')
//     //     north_america.classList.remove('light-animation')
//     //     asia.classList.remove('light-animation')
//     //     australia.classList.remove('light-animation')
//     // })
//     // north_america.addEventListener('mouseover',()=>{
//     //     clearTimeout(t1)
//     //     clearTimeout(t2)
//     //     clearTimeout(t3)
//     //     clearTimeout(t4)
//     //     clearTimeout(t5)
//     //     south_america.classList.remove('light-animation')
//     //     africa.classList.remove('light-animation')
//     //     europe.classList.remove('light-animation')
//     //     north_america.classList.remove('light-animation')
//     //     north_america.classList.add('hover-animation')
//     //     asia.classList.remove('light-animation')
//     //     australia.classList.remove('light-animation')
//     // })
//     // south_america.addEventListener('mouseover',()=>{
//     //     clearTimeout(t1)
//     //     clearTimeout(t2)
//     //     clearTimeout(t3)
//     //     clearTimeout(t4)
//     //     clearTimeout(t5)
//     //     south_america.classList.remove('light-animation')
//     //     south_america.classList.add('hover-animation')
//     //     africa.classList.remove('light-animation')
//     //     europe.classList.remove('light-animation')
//     //     north_america.classList.remove('light-animation')
//     //     asia.classList.remove('light-animation')
//     //     australia.classList.remove('light-animation')
//     // })
//     // africa.addEventListener('mouseout',()=>{
//     //     africa.classList.remove('hover-animation')
//     //     // animation()
//     // })
//     // australia.addEventListener('mouseout',()=>{
//     //     australia.classList.remove('hover-animation')
//     //     // animation()
//     // })
//     // asia.addEventListener('mouseout',()=>{
//     //     asia.classList.remove('hover-animation')
//     //     // animation()
//     // })
//     // europe.addEventListener('mouseout',()=>{
//     //     europe.classList.remove('hover-animation')
//     //     // animation()
//     // })
//     // north_america.addEventListener('mouseout',()=>{
//     //     north_america.classList.remove('hover-animation')
//     //     // animation()
//     // })
//     // south_america.addEventListener('mouseout',()=>{
//     //     south_america.classList.remove('hover-animation')
//     //     // animation()
//     // })
// }

// // function animation(){
// //     animationCicle()
// //     let id=setInterval(() => {
// //         africa.classList.add('light-animation')
// //         australia.classList.remove('light-animation')
// //         north_america.classList.remove('light-animation')
// //         south_america.classList.remove('light-animation')
// //         europe.classList.remove('light-animation')
// //         asia.classList.remove('light-animation')
// //         let t1=setTimeout(() => {
// //             australia.classList.add('light-animation')
// //             africa.classList.remove('light-animation')
// //             north_america.classList.remove('light-animation')
// //             south_america.classList.remove('light-animation')
// //             europe.classList.remove('light-animation')
// //             asia.classList.remove('light-animation')
// //         }, 2000);
// //         let t2=setTimeout(() => {
// //             asia.classList.add('light-animation')
// //             africa.classList.remove('light-animation')
// //             north_america.classList.remove('light-animation')
// //             south_america.classList.remove('light-animation')
// //             europe.classList.remove('light-animation')
// //             australia.classList.remove('light-animation')
// //         }, 3500);
// //         let t3=setTimeout(() => {
// //             europe.classList.add('light-animation')
// //             africa.classList.remove('light-animation')
// //             north_america.classList.remove('light-animation')
// //             south_america.classList.remove('light-animation')
// //             asia.classList.remove('light-animation')
// //             australia.classList.remove('light-animation')
// //         }, 5000);
// //         let t4=setTimeout(() => {
// //             north_america.classList.add('light-animation')
// //             africa.classList.remove('light-animation')
// //             europe.classList.remove('light-animation')
// //             south_america.classList.remove('light-animation')
// //             asia.classList.remove('light-animation')
// //             australia.classList.remove('light-animation')
// //         }, 6500);
// //         let t5=setTimeout(() => {
// //             south_america.classList.add('light-animation')
// //             africa.classList.remove('light-animation')
// //             europe.classList.remove('light-animation')
// //             north_america.classList.remove('light-animation')
// //             asia.classList.remove('light-animation')
// //             australia.classList.remove('light-animation')
// //         }, 8000);
// //         // africa.addEventListener('mouseover',()=>{
// //         //     clearInterval(id)
// //         //     clearTimeout (t1)
// //         //     clearTimeout (t2)
// //         //     clearTimeout (t3)
// //         //     clearTimeout (t4)
// //         //     clearTimeout (t5)
// //         //     south_america.classList.remove('light-animation')
// //         //     africa.classList.remove('light-animation')
// //         //     africa.classList.add('hover-animation')
// //         //     europe.classList.remove('light-animation')
// //         //     north_america.classList.remove('light-animation')
// //         //     asia.classList.remove('light-animation')
// //         //     australia.classList.remove('light-animation')
// //         // })
// //         // australia.addEventListener('mouseover',()=>{
// //         //     clearInterval(id)
// //         //     clearTimeout (t1)
// //         //     clearTimeout (t2)
// //         //     clearTimeout (t3)
// //         //     clearTimeout (t4)
// //         //     clearTimeout (t5)
// //         //     south_america.classList.remove('light-animation')
// //         //     africa.classList.remove('light-animation')
// //         //     europe.classList.remove('light-animation')
// //         //     north_america.classList.remove('light-animation')
// //         //     asia.classList.remove('light-animation')
// //         //     australia.classList.remove('light-animation')
// //         //     australia.classList.add('hover-animation')
// //         // })
// //         // asia.addEventListener('mouseover',()=>{
// //         //     clearInterval(id)
// //         //     clearTimeout (t1)
// //         //     clearTimeout (t2)
// //         //     clearTimeout (t3)
// //         //     clearTimeout (t4)
// //         //     clearTimeout (t5)
// //         //     south_america.classList.remove('light-animation')
// //         //     africa.classList.remove('light-animation')
// //         //     europe.classList.remove('light-animation')
// //         //     north_america.classList.remove('light-animation')
// //         //     asia.classList.remove('light-animation')
// //         //     asia.classList.add('hover-animation')
// //         //     australia.classList.remove('light-animation')
// //         // })
// //         // europe.addEventListener('mouseover',()=>{
// //         //     clearInterval(id)
// //         //     clearTimeout (t1)
// //         //     clearTimeout (t2)
// //         //     clearTimeout (t3)
// //         //     clearTimeout (t4)
// //         //     clearTimeout (t5)
// //         //     south_america.classList.remove('light-animation')
// //         //     africa.classList.remove('light-animation')
// //         //     europe.classList.remove('light-animation')
// //         //     europe.classList.add('hover-animation')
// //         //     north_america.classList.remove('light-animation')
// //         //     asia.classList.remove('light-animation')
// //         //     australia.classList.remove('light-animation')
// //         // })
// //         // north_america.addEventListener('mouseover',()=>{
// //         //     clearInterval(id)
// //         //     clearTimeout (t1)
// //         //     clearTimeout (t2)
// //         //     clearTimeout (t3)
// //         //     clearTimeout (t4)
// //         //     clearTimeout (t5)
// //         //     south_america.classList.remove('light-animation')
// //         //     africa.classList.remove('light-animation')
// //         //     europe.classList.remove('light-animation')
// //         //     north_america.classList.remove('light-animation')
// //         //     north_america.classList.add('hover-animation')
// //         //     asia.classList.remove('light-animation')
// //         //     australia.classList.remove('light-animation')
// //         // })
// //         // south_america.addEventListener('mouseover',()=>{
// //         //     clearInterval(id)
// //         //     clearTimeout (t1)
// //         //     clearTimeout (t2)
// //         //     clearTimeout (t3)
// //         //     clearTimeout (t4)
// //         //     clearTimeout (t5)
// //         //     south_america.classList.remove('light-animation')
// //         //     south_america.classList.add('hover-animation')
// //         //     africa.classList.remove('light-animation')
// //         //     europe.classList.remove('light-animation')
// //         //     north_america.classList.remove('light-animation')
// //         //     asia.classList.remove('light-animation')
// //         //     australia.classList.remove('light-animation')
// //         // })
// //     }, 9500);
// //     return;
// // }
// animation();
// // africa.addEventListener('mouseout',()=>{
// //     africa.classList.remove('hover-animation')
// // })
// // australia.addEventListener('mouseout',()=>{
// //     australia.classList.remove('hover-animation')
// // })
// // asia.addEventListener('mouseout',()=>{
// //     asia.classList.remove('hover-animation')
// // })
// // europe.addEventListener('mouseout',()=>{
// //     europe.classList.remove('hover-animation')
// // })
// // north_america.addEventListener('mouseout',()=>{
// //     north_america.classList.remove('hover-animation')
// // })
// // south_america.addEventListener('mouseout',()=>{
// //     south_america.classList.remove('hover-animation')
// // })
