//chat,login button
const chat=document.querySelector(".chat");
const btnpopup=document.querySelector(".buttonLogin");
// close icon for pop up window
const closeIcon=document.querySelector(".closeIcon");
//logi,register link swith
const loginlink=document.querySelector(".loginlink");
const registerlink=document.querySelector(".registerlink");
//login,register chat base plase wrapper
const wrapper=document.querySelector(".wrapper");
const chatwrapper=document.querySelector(".chatwrapper");
//chat popup place
//chat button onclick event

chat.addEventListener('click',()=>{
    wrapper.classList.add('chatwrapper');
    console.log("created chatwrapper");
    wrapper.classList.remove('wrapper');
    const chatwrapper=document.querySelector(".chatwrapper");
    console.log("remove wrapper");
    chatwrapper.classList.add("active-popup");
    console.log("created active-popup");
    chatwrapper.classList.add("activechat");
    
});



//login register popup place
//register link onclick event switch between login page to register page
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    
});
//login link onclick event switch between register page to login page
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
});
//login button onclick show popup window
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');

    
    
    
});
//close icon onclick remove popup window
closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    window.location.reload();
    
});


