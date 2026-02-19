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
// -----Email----
<script>
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      messageBox.style.display = "block";
      messageBox.style.background = "#d4edda";
      messageBox.style.color = "#155724";
      messageBox.style.padding = "10px";
      messageBox.style.borderRadius = "5px";
      messageBox.innerHTML = "✅ Your message has been sent successfully!";
      form.reset();
    } else {
      messageBox.style.display = "block";
      messageBox.style.background = "#f8d7da";
      messageBox.style.color = "#721c24";
      messageBox.style.padding = "10px";
      messageBox.style.borderRadius = "5px";
      messageBox.innerHTML = "❌ Something went wrong. Please try again.";
    }
  });
</script>
