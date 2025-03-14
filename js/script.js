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
const img=document.getElementById("iconeclic");

document.getElementById("informationPerso").addEventListener("click",function(){
    document.getElementById("cacheI").classList.toggle("hidden");
    
});
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
// gerere formation
const BoutonFormation =document.getElementById("BoutonFormation");
const AfficheFormation=document.getElementById("AfficheFormation");
const AfficheFormation2=document.getElementById("AfficheFormation2");
BoutonFormation.addEventListener("click", function(event) {
    event.preventDefault();
    
    document.getElementById("foma").classList.remove("hidden");
    const diplome =document.getElementById("diplome").value;
    const DateFormation =document.getElementById("DateFormation").value;
    const Etablissemnt =document.getElementById("Etablissemnt").value;
    if (!diplome || !DateFormation || !Etablissemnt) {
        alert("Veuillez remplir tous les champs !");
        return;
    }
    let NouvelleFormation = document.createElement("li");
    let NouvelleFormation2 = document.createElement("li");
    let x=" ";
    NouvelleFormation.innerHTML = `<strong>${diplome}</strong><br>${Etablissemnt}`;
    NouvelleFormation2.innerHTML = `<strong>${DateFormation}</strong>`+"<br> &nbsp;";
    document.getElementById("AfficheFormation").appendChild(NouvelleFormation);
    document.getElementById("AfficheFormation2").appendChild(NouvelleFormation2);
    document.getElementById("diplome").value = "";
    document.getElementById("DateFormation").value = "";
    document.getElementById("Etablissemnt").value = "";
});
// gerere competence
let BoutonCompetence = document.getElementById("BoutonCompetence");
let AfficheCompetence = document.getElementById("AfficheCompetence");
let RecupereCompetence = document.getElementById("RecupereCompetence");
BoutonCompetence.addEventListener("click",function(event){
    event.preventDefault();
    if(!RecupereCompetence.value){
        alert("Veuillez remplir une competences !");
        return;
    }
    document.getElementById("compet").classList.remove("hidden");
    let NouvelleCompetence= document.createElement("li");
    NouvelleCompetence.innerHTML=RecupereCompetence.value;
    
    AfficheCompetence.appendChild(NouvelleCompetence);
    RecupereCompetence.value="";
})
// gerer Langue
let BoutonLangue = document.getElementById("BoutonLangue");
let AfficheLangue = document.getElementById("AfficheLangue");
let CacheLangue = document.getElementById("CacheLangue");
let RecupereLangue= document.getElementById("RecupereLangue");
BoutonLangue.addEventListener("click",function(event){
    document.getElementById("lang").classList.remove("hidden");
    if(!RecupereLangue.value){
        alert("Veuillez remplir une langue !");
        return;
    }
    let NouvelleLangue= document.createElement("li");
    NouvelleLangue.innerHTML=RecupereLangue.value;
    AfficheLangue.appendChild(NouvelleLangue);
    RecupereLangue.value="";
})
// gerer Loisir
let AfficheLoisir = document.getElementById("AfficheLoisir");
let RecupereLoisir = document.getElementById("RecupereLoisir");
BoutonLoisir = document.getElementById("BoutonLoisir").addEventListener("click",function(event){
    document.getElementById("CacheLoisir").classList.remove("hidden");
    if(!RecupereLoisir.value){
        alert("Veuillez remplir une loisir !");
        return;
    }
    let NouvelleLoisir = document.createElement("li");
    NouvelleLoisir.innerHTML=RecupereLoisir.value;
    AfficheLoisir.appendChild(NouvelleLoisir);
    RecupereLoisir.value="";
})
// gerer telechargement cv
document.getElementById("telechager").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;  // Extraire jsPDF de la fenêtre globale
    const doc = new jsPDF(); // Créer un nouvel objet jsPDF
    
    const content = document.getElementById("Moncv");  // Récupérer le contenu HTML à convertir

    // Utiliser la méthode html() de jsPDF pour générer le PDF à partir du contenu HTML
    doc.html(content, {
        margin: [10, 10, 10, 10], // Marge autour du contenu
        callback: function (doc) {
            doc.save("MonCV.pdf"); // Télécharger le fichier PDF avec le nom souhaité
        },
        x: 10, // Position X du contenu dans le PDF
        y: 10  // Position Y du contenu dans le PDF
    });
});
// gerer la sauvergarde

document.addEventListener("DOMContentLoaded", function () {
    // Charger les valeurs sauvegardées au chargement de la page
    //affichage sur le inpout
    document.getElementById("Recupere-Nom").value = localStorage.getItem("nom") || "";
    document.getElementById("Recupere-Prenom").value = localStorage.getItem("prenom") || "";
    document.getElementById("RecupereMail").value = localStorage.getItem("email") || "";
    document.getElementById("Recupere-profil").value= localStorage.getItem("poste")|| "";
    document.getElementById("Telephone").value=localStorage.getItem("Telephone")|| "";
    document.getElementById("RecuperePoste").value = localStorage.getItem("RecuperePoste");
    // affiche sur le cv 
    document.getElementById("AfficheNom").innerHTML=localStorage.getItem("nom") || "";
    document.getElementById("AfficheMail").innerHTML=localStorage.getItem("email") ;
    document.getElementById("AffichePrenom").innerHTML=localStorage.getItem("prenom") || "";
    document.getElementById("AfficheProfil").innerHTML=localStorage.getItem("poste") || "";
    document.getElementById("AfficheTel").innerHTML=localStorage.getItem("Telephone")|| "";
    document.getElementById("AffichePoste").innerHTML= localStorage.getItem("RecuperePoste");
});

function sauvegarder() {
    // Récupérer les valeurs des inputs
    let nom = document.getElementById("Recupere-Nom").value;
    let prenom = document.getElementById("Recupere-Prenom").value;
    let email = document.getElementById("RecupereMail").value;
    let poste = document.getElementById("Recupere-profil").value;
    let Telephone = document.getElementById("Telephone").value;
    let RecuperePoste = document.getElementById("RecuperePoste").value;
    // Stocker dans localStorage avec les mêmes clés utilisées pour la récupération
    localStorage.setItem("nom", nom);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("email", email);
    localStorage.setItem("poste", poste);
    localStorage.setItem("Telephone",Telephone);
    localStorage.setItem("RecuperePoste",RecuperePoste);

    alert("Données sauvegardées !");
    
}

// gerer telechargement 

        document.getElementById('telechager').addEventListener('click', function () {
            const { jsPDF } = window.jspdf;
    
            // Sélectionne la div à capturer
            const cvElement = document.getElementById('Moncv');
    
            // Utilise html2canvas pour capturer la div sous forme d'image
            html2canvas(cvElement, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png'); // Convertir le canvas en image
                const pdf = new jsPDF('p', 'mm', 'a4'); // Créer un document PDF
    
                // Calcul de la taille optimale
                const imgWidth = 210; // Largeur A4 en mm
                const pageHeight = 297; // Hauteur A4 en mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width; // Hauteur ajustée pour conserver les proportions
    
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('cv.pdf'); // Télécharger le PDF
            });
        });
    

