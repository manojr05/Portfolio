// -----------about_______________

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// -----------------navbar-----------------


const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector("#menu-icon");
const menuLinks = navbar.querySelectorAll("a");

// Function to toggle the "active" class on the clicked navigation item
const toggleActiveClass = (event) => {
  // Remove the "active" class from all navigation items
  menuLinks.forEach((link) => link.classList.remove("active"));

  // Add the "active" class to the clicked navigation item
  event.target.classList.add("active");
};

// Add event listener to each navigation item
menuLinks.forEach((link) => {
  link.addEventListener("click", toggleActiveClass);
});

// Toggle the navigation menu on small screens when the menu icon is clicked
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
}


// ----------------formdata-------------------


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzWUMRyfnswQ5eCEBRB8iwHV-1KrOxR0w6qPlN8veHcvFIGeEPY2P_OZJNHwevSZEi9/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
