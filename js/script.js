document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.getElementById('carousel-items');
    const paginationItems = document.querySelectorAll('.carousel-pagination div');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    // Fonction de mise à jour du carousel
    function updateCarousel() {
        const offset = -100 * currentSlide; // Calcul de l'offset
        carouselItems.style.transform = `translateX(${offset}%)`; // Applique l'offset
        paginationItems.forEach((item, index) => {
            item.classList.toggle('bg-gray-300', index === currentSlide); // Met en surbrillance le point de la pagination
        });
    }

    // Fonction pour faire défiler automatiquement
    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    // Pagination
    paginationItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Initialisation du carousel
    updateCarousel();

    // Démarrer le défilement automatique
    setInterval(autoSlide, 3000); // Change d'image toutes les 3 secondes
});
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let index = 0;
    const totalTestimonials = testimonials.length;

    function updateCarousel() {
        const offset = -(index * 100) + '%';
        container.style.transform = `translateX(${offset})`;
    }

    nextButton.addEventListener('click', function() {
        index = (index + 1) % totalTestimonials;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        index = (index - 1 + totalTestimonials) % totalTestimonials;
        updateCarousel();
    });
});

//----------

document.getElementById("informationPerso").addEventListener("click",function(){
    document.getElementById("cacheI").classList.toggle("hidden");
})
document.getElementById("informationPerso2").addEventListener("click",function(){
    document.getElementById("cache2").classList.toggle("hidden");
})
document.getElementById("informationPerso3").addEventListener("click",function(){
    document.getElementById("cache3").classList.toggle("hidden");
})
document.getElementById("informationPerso4").addEventListener("click",function(){
    document.getElementById("cache4").classList.toggle("hidden");
})
document.getElementById("informationPerso5").addEventListener("click",function(){
    document.getElementById("cache5").classList.toggle("hidden");
})
document.getElementById("informationPerso6").addEventListener("click",function(){
    document.getElementById("cache6").classList.toggle("hidden");
})


// gerer le cv
// recucerper la valeur du profil
const RecupProfil = document.getElementById("Recupere-profil");
const AffProfil = document.getElementById("AfficheProfil");
 RecupProfil.addEventListener("input",function(event){
    let x = RecupProfil.value;
    AffProfil.innerHTML=x;
let valeur =RecupProfil.value;
    let image=document.getElementById("profil");
    if (valeur.trim() !== "") {
        image.classList.remove("hidden"); // Affiche l'image
    } else {
        image.classList.add("hidden"); // Cache l'image
    }
 })
// recucerper la valeur du nom et prenom
const RecupNom = document.getElementById("Recupere-Nom");
const RecupPrenom = document.getElementById("Recupere-Prenom");
// affichage nom et prenom
const affichageNom = document.getElementById("AfficheNom");
const affichagePrenom = document.getElementById("AffichePrenom");
RecupNom.addEventListener("input",function(event){
    let valeur=RecupNom.value;
    affichageNom.innerHTML=valeur;
})
RecupPrenom.addEventListener("input",function(event){
    let valeur=RecupPrenom.value;
    affichagePrenom.innerHTML=valeur;
})
// recucerper la valeur du telephone et date
const RecupTel = document.getElementById("Telephone");
const RecupDate = document.getElementById("Date");
// affichage telepho,e et date
const affichageTel = document.getElementById("AfficheTel");
RecupTel.addEventListener("input",function(event){
    let valeur=RecupTel.value;
    affichageTel.innerHTML=valeur;
    let image=document.getElementById("imgphone");
    if (valeur.trim() !== "") {
        image.classList.remove("hidden"); // Affiche l'image
    } else {
        image.classList.add("hidden"); // Cache l'image
    }
})
RecupPrenom.addEventListener("input",function(event){
    let valeur=RecupPrenom.value;
    affichagePrenom.innerHTML=valeur;
})
// geer poste
const  AffichePost =document.getElementById("AffichePoste");
const RecuperePoste=document.getElementById("RecuperePoste");
RecuperePoste.addEventListener("input",function(event){
    let valeur=RecuperePoste.value;
    AffichePost.innerHTML=valeur;
})
// geer mail
const AfficheMail=document.getElementById("AfficheMail");
const RecupereMail=document.getElementById("RecupereMail");
RecupereMail.addEventListener("input",function(event){
    let valeur=RecupereMail.value;
    AfficheMail.innerHTML=valeur;
    let image=document.getElementById("ima");
    if (valeur.trim() !== "") {
        image.classList.remove("hidden"); // Affiche l'image
    } else {
        image.classList.add("hidden"); // Cache l'image
    }
})
// geer Adresss
const RecupereAdress=document.getElementById("RecupereAdress");
const AfficheAdrees=document.getElementById("AfficheAdress");
RecupereAdress.addEventListener("input",function(event){
    let valeur=RecupereAdress.value;
    AfficheAdrees.innerHTML=valeur;
    let image=document.getElementById("imgAdress");
    if (valeur.trim() !== "") {
        image.classList.remove("hidden"); // Affiche l'image
    } else {
        image.classList.add("hidden"); // Cache l'image
    }
})

// geer Date
 const Date =document.getElementById("Date");
 const affichageDate=document.getElementById("AfficheDate"); 
 Date.addEventListener("input",function(event){
    let valeur=Date.value;
    affichageDate.innerHTML=valeur;
    
})
document.addEventListener("DOMContentLoaded", function() {
    const imageInput = document.getElementById("imageInput");
    const previewImage = document.getElementById("previewImage");
    const uploadBtn = document.getElementById("uploadBtn");

    uploadBtn.addEventListener("click", function() {
        imageInput.click(); // Ouvre l'explorateur de fichiers
    });

    imageInput.addEventListener("change", function(event) {
        const file = event.target.files[0]; // Récupère le fichier

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result; // Charge l'image
                previewImage.classList.remove("hidden"); // Affiche l'image
            };
            reader.readAsDataURL(file);
        }
    });
});
const diplome =document.getElementById("diplome");
const DateFormation =document.getElementById("DateFormation");
const Etablissemnt =document.getElementById("Etablissemnt");
const BoutonFormation =document.getElementById("BoutonFormation");
RecupereEltformation
BoutonFormation.addEventListener("click").addEventListener(function(){
    
})