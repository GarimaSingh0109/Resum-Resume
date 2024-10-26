// this js file is part 2 for the collectResumeData.js

// dropdown info in step 1 section logic
const caret1 = document.querySelector('#caret1');
const caret2 = document.querySelector('#caret2');
const caret3 = document.querySelector('#caret3');
const caret4 = document.querySelector('#caret4');
const caret5 = document.querySelector('#caret5');
const caret6 = document.querySelector('#caret6');
const caret7 = document.querySelector('#caret7');
const pinfo = document.querySelector('.pInfo');
pinfo.style.display = 'none';
const education = document.querySelector('#education-fields');
const edubtn = document.querySelector('#add-education');
education.style.display = 'none';
edubtn.style.display = 'none';
const slabel = document.querySelector('#skill-label')
const sinput = document.querySelector('#skills-input')
slabel.style.display = 'none';
sinput.style.display = 'none';
const expfield = document.querySelector('#experience-fields');
const expbtn = document.querySelector('#add-experience');
expfield.style.display = 'none';
expbtn.style.display = 'none';
const achive = document.querySelector('.achive');
const achivebtm = document.querySelector('#add-achivement');
achive.style.display = 'none';
achivebtm.style.display = 'none';
const projfield = document.querySelector('#project-fields');
const projbtn = document.querySelector('#add-project');
projfield.style.display = 'none';
projbtn.style.display = 'none';
const lnglabel = document.querySelector('#langlabel');
const lnginput = document.querySelector('#languages-input');
lnglabel.style.display = 'none';
lnginput.style.display = 'none';

caret1.addEventListener('click',()=>{
    if(pinfo.style.display === 'none'){
        pinfo.style.display = '';
        caret1.style.transform = 'rotate(180deg)';
    }
    else{
        pinfo.style.display = 'none';
        caret1.style.transform = 'rotate(0)';
    }
})
caret2.addEventListener('click',()=>{
    if(education.style.display === 'none'){
        education.style.display = '';
        edubtn.style.display = '';
        caret2.style.transform = 'rotate(180deg)';
    }
    else{
        education.style.display = 'none';
        edubtn.style.display = 'none';
        caret2.style.transform = 'rotate(0)';
    }
})
caret3.addEventListener('click',()=>{
    if(slabel.style.display === 'none'){
        slabel.style.display = '';
        sinput.style.display = '';
        caret3.style.transform = 'rotate(180deg)';
    }
    else{
        slabel.style.display = 'none';
        sinput.style.display = 'none';
        caret3.style.transform = 'rotate(0)';
    }
})
caret4.addEventListener('click',()=>{
    if(expfield.style.display === 'none'){
        expfield.style.display = '';
        expbtn.style.display = '';
        caret4.style.transform = 'rotate(180deg)';
    }
    else{
        expfield.style.display = 'none';
        expbtn.style.display = 'none';
        caret4.style.transform = 'rotate(0)';
    }
})
caret5.addEventListener('click',()=>{
    if(achive.style.display === 'none'){
        achive.style.display = '';
        achivebtm.style.display = '';
        caret5.style.transform = 'rotate(180deg)';
    }
    else{
        achive.style.display = 'none';
        achivebtm.style.display = 'none';
        caret5.style.transform = 'rotate(0)';
    }
})
caret6.addEventListener('click',()=>{
    if(projfield.style.display === 'none'){
        projfield.style.display = '';
        projbtn.style.display = '';
        caret6.style.transform = 'rotate(180deg)';
    }
    else{
        projfield.style.display = 'none';
        projbtn.style.display = 'none';
        caret6.style.transform = 'rotate(0)';
    }
})
caret7.addEventListener('click',()=>{
    if(lnglabel.style.display === 'none'){
        lnglabel.style.display = '';
        lnginput.style.display = '';
        caret7.style.transform = 'rotate(180deg)';
    }
    else{
        lnglabel.style.display = 'none';
        lnginput.style.display = 'none';
        caret7.style.transform = 'rotate(0)';
    }
})

let exed1 = 0;
let exed2 = 0;
let exed3 = 0;
let exed4 = 0;

const limit = 300;  // Maximum character limit
const myprofiledesc = document.querySelector('#profile'); 
const myprofilecount = document.querySelector('#pinfodesc'); 
myprofilecount.textContent = "0/" + limit; // Initialize character count for profile

myprofiledesc.addEventListener('input', () => {
    const textlength = myprofiledesc.value.length;
    myprofilecount.textContent = textlength + "/" + limit;

    if (textlength > limit) {
        myprofilecount.style.color = 'red';
        exed1 = 1;
    } else {
        myprofilecount.style.color = ''; // Optional: Set back to default color
        exed1 = 0;
    }
    updateWarningDisplay();
});

const myexpdesc = document.querySelector('#expdes'); 
const myexpcount = document.querySelector('#expdesc'); 
myexpcount.textContent = "0/" + limit; // Initialize character count for experience

myexpdesc.addEventListener('input', () => {
    const textlength = myexpdesc.value.length;
    myexpcount.textContent = textlength + "/" + limit;

    if (textlength > limit) {
        myexpcount.style.color = 'red';
        exed2 = 1;
    } else {
        myexpcount.style.color = ''; // Optional: Set back to default color
        exed2 = 0;
    }
    updateWarningDisplay();
});

const myachivedesc = document.querySelector('#achivedes'); 
const myachivecount = document.querySelector('#achivedesc'); 
myachivecount.textContent = "0/" + limit; // Initialize character count for achievements

myachivedesc.addEventListener('input', () => {
    const textlength = myachivedesc.value.length;
    myachivecount.textContent = textlength + "/" + limit;

    if (textlength > limit) {
        myachivecount.style.color = 'red';
        exed3 = 1;
    } else {
        myachivecount.style.color = ''; // Optional: Set back to default color
        exed3 = 0;
    }
    updateWarningDisplay();
});

const myprojdesc = document.querySelector('#projectdesc'); 
const myprojcount = document.querySelector('#projdesc'); 
myprojcount.textContent = "0/" + limit; // Initialize character count for projects

myprojdesc.addEventListener('input', () => {
    const textlength = myprojdesc.value.length;
    myprojcount.textContent = textlength + "/" + limit;

    if (textlength > limit) {
        myprojcount.style.color = 'red';
        exed4 = 1;
    } else {
        myprojcount.style.color = ''; // Optional: Set back to default color
        exed4 = 0;
    }
    updateWarningDisplay();
});

// Function to update the warning button and message display
const dummybtn = document.querySelector('#dummy1');
const realbtn = document.querySelector('#next-step');
const charwarning = document.querySelector('#limitwarning');
realbtn.style.display = 'block';
dummybtn.style.display = 'none';
charwarning.style.display = 'none';

function updateWarningDisplay() {
    if (exed1 === 1 || exed2 === 1 || exed3 === 1 || exed4 === 1) {
        dummybtn.style.display = 'block';
        charwarning.style.display = 'block';
        realbtn.style.display = 'none';
    } else {
        dummybtn.style.display = 'none';
        charwarning.style.display = 'none';
        realbtn.style.display = 'block';
    }
}
