const toggleBtn = document.getElementById('hamburger');
const mobileNavLinks = document.getElementById("mobileNav");

toggleBtn.addEventListener('change', () => { 
    if(toggleBtn.checked) {
        mobileNavLinks.style.display = "block";
    } else {
        mobileNavLinks.style.display = "none";
    }
});