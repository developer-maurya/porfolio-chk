var tablinks = document.getElementsByClassName("tab-link")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for( let tablink of tablinks ){
        tablink.classList.remove("active-link")
    }
    for(let tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var typed = new Typed('#element', {
  strings: ['Frontend Developer', 'Web Developer', 'Graphic Designer', 'Web Designer'],
  typeSpeed: 50,
  backSpeed: 30,      
  backDelay: 1000,    
  loop: true          
});

// ---------------------------card--------------------------------    
var tablinks = document.getElementsByClassName("work-item")
var tabcards = document.getElementsByClassName("all-card")

function opentab1(work){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link1")
    }
     for(let tabcard of tabcards){
        tabcard.classList.remove("active-tab1")
    }
    event.currentTarget.classList.add("active-link1")
    document.getElementById(work).classList.add("active-tab1")
}
