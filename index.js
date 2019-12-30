
let stickyNavOffset = $('.quickNav').offset().top;
let curElmSize = $('.JBioSection').height();
let NavSize = $('.quickNav').height();
console.log(curElmSize);
let stickyBioOffset = $('.JBioSection').offset().top - stickyNavOffset;
let stickyEducationOffset = ($('.JEductionSection').offset().top - stickyNavOffset - curElmSize);// - curElmSize;
let stickySkillsOffset = ($('.JSkillSection').offset().top - NavSize - curElmSize);// - curElmSize;
let stickyExperienceOffset = ($('.JWorkSection').offset().top - NavSize - curElmSize);// - curElmSize;
let stickyProjectsOffset = ($('.JProjectSection').offset().top - NavSize - curElmSize);// - curElmSize;
let stickyContactOffset = ($('.JContactSection').offset().top - NavSize - curElmSize);// - curElmSize;



console.log(stickyNavOffset);
$(window).scroll(function(){
    let stickyNav = $('.quickNav');
    let stickyBio = $('.JBioSection');
    let stickyEdu = $('.JEductionSection');
    let stickySkill = $('.JSkillSection');
    let stickyWork = $('.JWorkSection');
    let stickyProject = $('.JProjectSection');
    let stickyContact = $('.JContactSection');
    let scroll = $(window).scrollTop();
    console.log("scroll: " + scroll);
    if(scroll >= stickyNavOffset){
        stickyNav.addClass('afterQuickNav');
        //console.log("added sticky");
    }else{
        stickyNav.removeClass('afterQuickNav');
    }
    console.log("Bio " + stickyBioOffset);
    console.log("Edu " + stickyEducationOffset);
    console.log("skill " + stickySkillsOffset);
    console.log("Work " + stickyExperienceOffset);
    console.log("Project " + stickyProjectsOffset);
    console.log("contact " + stickyContactOffset);
    /*--------------------------Sticky For Bio------------------------------------------- */
    if(scroll >= stickyBioOffset && scroll < stickyEducationOffset-curElmSize){
        stickyBio.addClass('duringSectionHeader');
        console.log("add sticky");
    }else{
        stickyBio.removeClass('duringSectionHeader');
    }
    /*----------------------------Sticky For Edu----------------------------------------- */
    if(scroll >= stickyEducationOffset && scroll < stickySkillsOffset){
        stickyEdu.addClass('duringSectionHeader');
        console.log("add sticky");
    }else{
        stickyEdu.removeClass('duringSectionHeader');
    }
    /*------------------------------Sticky For Skill--------------------------------------- */
    if(scroll >= stickySkillsOffset && scroll < stickyExperienceOffset){
        stickySkill.addClass('duringSectionHeader');
        console.log("add sticky");
    }else{
        stickySkill.removeClass('duringSectionHeader');
    }
    /*------------------------------Sticky For Work--------------------------------------- */
    if(scroll >= stickyExperienceOffset && scroll < stickyProjectsOffset){
        stickyWork.addClass('duringSectionHeader');
        console.log("add sticky");
    }else{
        stickyWork.removeClass('duringSectionHeader');
    }
    /*------------------------------Sticky For Projects--------------------------------------- */
    if(scroll >= stickyProjectsOffset && scroll < stickyContactOffset){
        stickyProject.addClass('duringSectionHeader');
        console.log("add sticky");
    }else{
        stickyProject.removeClass('duringSectionHeader');
    }
    /*------------------------------Sticky For Contact--------------------------------------- */
    if(scroll >= stickyContactOffset){
        stickyContact.addClass('duringSectionHeader');
        console.log("add sticky");
    }else{
        stickyContact.removeClass('duringSectionHeader');
    }
});


function handleMoveToEduction(){
    $('.moveToEducation').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyEducationOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}

function handleMoveToSkills(){
    $('.moveToSkills').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickySkillsOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}
function handleMoveToExperience(){
    $('.moveToWork').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyExperienceOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}
function handleMoveToProjects(){
    $('.moveToProjects').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyProjectsOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}
function handleMoveToContact(){
    $('.moveToContact').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyContactOffset//$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}


function handleNavToBio(){
    $('.bioQuickLink').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyBioOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}
function handleNavToEduction(){
    $('.eduQuickLink').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyEducationOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}

function handleNavToSkills(){
    $('.skillQuickLink').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickySkillsOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}
function handleNavToExperience(){
    $('.workQuickLink').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyExperienceOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}
function handleNavToProjects(){
    $('.projectQuickLink').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyProjectsOffset //$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}
function handleNavToContact(){
    $('.contactQuickLink').on('click', function(event){
        event.preventDefault();
        console.log("this ran");
        $('html, body').animate({
            scrollTop: stickyContactOffset//$('.JEductionSection').offset().top
        }, 1000);
        //$('.JEductionSection').scroll();
    });
}

function handleActions(){
    handleMoveToEduction();
    handleMoveToSkills();
    handleMoveToExperience();
    handleMoveToProjects();
    handleMoveToContact();

    handleNavToBio();
    handleNavToEduction();
    handleNavToSkills();
    handleNavToExperience();
    handleNavToProjects();
    handleNavToContact();
}

$(handleActions);