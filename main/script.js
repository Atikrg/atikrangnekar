window.addEventListener('scroll', function(){
    const scroll = document.querySelector('nav');
    if(window.scrollY >= 100){
        scroll.classList.add("nav-scroll")
    }else{
        scroll.classList.remove("nav-scroll")
    }
})
document.getElementById("aboutme_email").addEventListener("click", function() {
      /* Get the text input element */
      var inputElement = document.getElementById("aboutme_email");

      /* Create a range object */
      var range = document.createRange();
      range.selectNode(inputElement);

      /* Select the text inside the input element */
      window.getSelection().removeAllRanges(); // Clear any existing selection
      window.getSelection().addRange(range);

      /* Copy the selected text to the clipboard */
      document.execCommand("copy");
      /* Alert the user */
      alert("Email copied!");
    });
/* 
document.getElementById("aboutme_email").addEventListener('click', function(){
     let copyEmail = document.getElementById("aboutme_email");
     copyEmail.select();
     console.log(copyEmail);
}) */
function copyEmailText() {
    /* Get the text field */
    let copyEmail = document.getElementById("aboutme_email");
    
    /* Select the text field */
    copyEmail.select();
    
    /* Copy the text inside the text field */
    document.execCommand("copy");
        
    /* Use below command to access the 
       value of copied text */
    console.log(copyEmail.value);
}

const subscribe = document.querySelector('.subscribe');
subscribe.addEventListener('click', function () {
    prompt("ENTER YOUR EMAIL ADDRESS TO SUBSCRIBE");
})



// Get the container element
var navContainer = document.getElementById("nav-listbar");

// Get all buttons with class="btn" inside the container
var navActiveLink = navContainer.getElementsByClassName("nav__link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navActiveLink.length; i++) {
    navActiveLink[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

const brandNm = document.querySelector(".brand-name").innerHTML;
console.log(brandNm)

