let btn1 = document.getElementById('btn1_website');
let img1 = document.getElementById('img1');
img1.addEventListener('mouseover', () => {
    btn1.style.opacity = '1';
});
img1.addEventListener('mouseout', () => {
    btn1.style.opacity = '0';
});


let btn2 = document.getElementById('btn2_website');
let img2 = document.getElementById('img2');
img2.addEventListener('mouseover', () => {
    btn2.style.opacity = '1';
});
img2.addEventListener('mouseout', () => {
    btn2.style.opacity = '0';
});

let btn3 = document.getElementById('btn3_website');
let img3 = document.getElementById('img3');
img3.addEventListener('mouseover', () => {
    btn3.style.opacity = '1';
});
img3.addEventListener('mouseout', () => {
    btn3.style.opacity = '0';
});


let btn4 = document.getElementById('btn4_website');
let img4 = document.getElementById('img4');
img4.addEventListener('mouseover', () => {
    btn4.style.opacity = '1';
});
img4.addEventListener('mouseout', () => {
    btn4.style.opacity = '0';
});


let i = 0;
setInterval(function() {
    if(i<=95){
        i++;
        document.getElementById('p1').innerHTML=(i+'%');
    }
    else{
        clearInterval;
    }
}, 20);

let j=0;
setInterval(function() {
    if(j<90){
        j++;
        document.getElementById('p2').innerHTML=(j+'%');
        document.getElementById('p4').innerHTML=(j+'%');
    }
    else{
        clearInterval;
    }
}, 21);

let k=0;
setInterval(function() {
    if(k<80){
        k++;
        document.getElementById('p3').innerHTML=(k+'%');
        document.getElementById('p6').innerHTML=(k+'%');
    }
    else{
        clearInterval;
    }
}, 25);

let z=0;
setInterval(function() {
    if(z<75){
        z++;
        document.getElementById('p5').innerHTML=(z+'%');
    }
    else{
        clearInterval;
    }
}, 25);

function bx_open(){
    document.getElementById("navi").style.display="block";
    document.getElementById("open_menu").style.display="none";
    document.getElementById("close_menu").style.display="flex";
}

function bx_close(){
    document.getElementById("navi").style.display="none";
    document.getElementById("open_menu").style.display="flex";
    document.getElementById("close_menu").style.display="none";
}

function close_navi(){
    document.getElementById('navi').style.display='none';
    document.getElementById("open_menu").style.display="flex";
    document.getElementById("close_menu").style.display="none";
}