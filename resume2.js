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
const sinput = document.querySelector('#skillsinput')
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

const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const autobtn = document.querySelector('#autobtn');
const manualbtn = document.querySelector('#manulbtn');
panel2.style.display = 'none';

autobtn.addEventListener('click',()=>{
    panel1.style.display = 'none';
    panel2.style.display = '';
    autobtn.style.backgroundColor = 'rgb(74, 74, 74)';
    manualbtn.style.backgroundColor = 'blue';
})

manualbtn.addEventListener('click',()=>{
    panel1.style.display = '';
    panel2.style.display = 'none';
    autobtn.style.backgroundColor = 'blue';
    manualbtn.style.backgroundColor = 'rgb(74, 74, 74)';
})

$(document).ready(function () {
    //cities of india
    const cities = [
        "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad",
        "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", 
        "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
        "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
        "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
        "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
        "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
        "Allahabad", "Howrah", "Ranchi", "Gwalior", "Jabalpur",
        "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur",
        "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubli-Dharwad",
        "Bareilly", "Moradabad", "Mysore", "Gurgaon", "Aligarh","Dehradun"
    ];

    //some Popular institutes
    const collegesAndUniversities = [
        "Indian Institute of Technology (IIT) Bombay", 
        "Indian Institute of Technology (IIT) Delhi",
        "Indian Institute of Technology (IIT) Madras",
        "Indian Institute of Science (IISc) Bangalore",
        "All India Institute of Medical Sciences (AIIMS) New Delhi",
        "Jawaharlal Nehru University (JNU) Delhi",
        "University of Delhi (DU)", 
        "Banaras Hindu University (BHU) Varanasi",
        "National Institute of Technology (NIT) Trichy",
        "Indian Institute of Technology (IIT) Kanpur",
        "Birla Institute of Technology and Science (BITS) Pilani",
        "University of Calcutta",
        "University of Mumbai",
        "Savitribai Phule Pune University",
        "Aligarh Muslim University (AMU)",
        "University of Hyderabad",
        "Anna University Chennai",
        "Vellore Institute of Technology (VIT)",
        "National Institute of Technology (NIT) Karnataka",
        "Indian Statistical Institute (ISI) Kolkata",
        "Jadavpur University",
        "Manipal Academy of Higher Education",
        "Amity University",
        "Symbiosis International University Pune",
        "Lovely Professional University (LPU)",
        "Christ University Bangalore",
        "Shiv Nadar University",
        "Indian Institute of Management (IIM) Ahmedabad",
        "Indian Institute of Foreign Trade (IIFT)",
        "Tata Institute of Social Sciences (TISS) Mumbai",
        "Panjab University",
        "University of Rajasthan",
        "Osmania University",
        "SRM Institute of Science and Technology",
        "Indian Institute of Technology (IIT) Kharagpur",
        "Indian Institute of Technology (IIT) Roorkee",
        "National Law School of India University (NLSIU) Bangalore",
        "Guru Gobind Singh Indraprastha University",
        "Chandigarh University",
        "Kalinga Institute of Industrial Technology (KIIT) Bhubaneswar",
        "Nirma University Ahmedabad",
        "Jamia Millia Islamia (JMI) Delhi",
        "National Institute of Fashion Technology (NIFT) Delhi",
        "Narsee Monjee Institute of Management Studies (NMIMS)",
        "Indian Institute of Technology (IIT) Guwahati",
        "Institute of Chemical Technology (ICT) Mumbai",
        "National Institute of Design (NID) Ahmedabad",
        "Delhi Technological University (DTU)",
        "Presidency University Kolkata",
        "Punjab Engineering College (PEC) Chandigarh",
        "Graphic Era Univesity (GEU)"
      ];
      //courses list
      const courses = [
        "Bachelor of Technology (B.Tech)", "Bachelor of Engineering (B.E.)", "Bachelor of Computer Applications (BCA)", "Bachelor of Medicine, Bachelor of Surgery (MBBS)", "Bachelor of Dental Surgery (BDS)", "Bachelor of Ayurvedic Medicine and Surgery (BAMS)", "Bachelor of Science in Nursing (B.Sc Nursing)", "Bachelor of Pharmacy (B.Pharm)", "Bachelor of Arts (BA)", "Bachelor of Fine Arts (BFA)", "Bachelor of Social Work (BSW)", "Bachelor of Commerce (B.Com)", "Bachelor of Business Administration (BBA)","Bachelor of Management Studies (BMS)", "Bachelor of Science (B.Sc)", "Bachelor of Science in Agriculture (B.Sc Agri)", "Bachelor of Environmental Science", "Bachelor of Laws (LLB)", "BA LLB", "BBA LLB", "Bachelor of Architecture (B.Arch)", "Bachelor of Design (B.Des)", "Bachelor of Interior Design", "Master of Technology (M.Tech)", "Master of Engineering (M.E.)", "Master of Computer Applications (MCA)", "Doctor of Medicine (MD)", "Master of Surgery (MS)", "Master of Dental Surgery (MDS)", "Master of Science in Nursing (M.Sc Nursing)", "Master of Pharmacy (M.Pharm)", "Master of Arts (MA)", "Master of Fine Arts (MFA)", "Master of Social Work (MSW)", "Master of Commerce (M.Com)", "Master of Business Administration (MBA)", "Master of Management Studies (MMS)", "Master of Science (M.Sc)", "Master of Environmental Science", "Master of Laws (LLM)", "Master of Architecture (M.Arch)", "Master of Design (M.Des)", "Bachelor of Science in IT (BSc. IT)"
      ];
      //Job Roles list 
      const jobRoles = [
        "Software Engineer", "Data Scientist", "Web Developer", "Product Manager", "Digital Marketing Specialist",
        "Graphic Designer", "Financial Analyst", "Sales Executive", "Human Resources Manager", "Mechanical Engineer",
        "Civil Engineer", "Content Writer", "UX/UI Designer", "Network Engineer", "Operations Manager",
        "Business Analyst", "Data Analyst", "Electrical Engineer", "Medical Doctor", "Nurse",
        "Pharmacist", "Lawyer", "Accountant", "Teacher", "Professor",
        "Marketing Manager", "Social Media Manager", "Customer Service Representative", "Research Scientist", "Project Manager"
      ];     
      
    $("#location").autocomplete({
      source: cities,
      minLength: 1 // Show suggestions after typing 1 character
    });
    $("#institutePH").autocomplete({
        source: collegesAndUniversities,
        minLength: 1 // Show suggestions after typing 1 character
    });
    $("#coursePH").autocomplete({
        source: courses,
        minLength: 1 // Show suggestions after typing 1 character
    });
    $("#jobrolePH").autocomplete({
        source: jobRoles,
        minLength: 1 // Show suggestions after typing 1 character
    });
  });
  