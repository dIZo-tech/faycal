// Script for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Handle form data (for example, sending it to a server)
    console.log(`Nom: ${name}, Email: ${email}, Message: ${message}`);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    
    // Reset the form
    this.reset();
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Cache toutes les diapositives
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Retourne à la première diapositive
    }
    
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");  // Supprime la classe active des points
    }
    
    slides[slideIndex - 1].style.display = "block";  // Affiche la diapositive actuelle
    dots[slideIndex - 1].className += " active";  // Ajoute la classe active au point correspondant

    // Change de diapositive toutes les 5 secondes
    setTimeout(showSlides, 5000); 
}

// Pour la navigation manuelle, ajouter des boutons dans ton HTML
// <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
// <a class="next" onclick="plusSlides(1)">&#10095;</a>
// Assure-toi d'avoir des éléments pour les points de navigation
