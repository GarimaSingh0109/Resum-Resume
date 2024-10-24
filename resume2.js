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