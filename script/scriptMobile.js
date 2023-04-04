
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



// Modal
const modals = document.querySelector(".wrapper");
//console.log(cards);

// array modal
const wildersProfils = [
  {
    id: 30,
    firstname: "Val",
    photo: "photos/photosEleveDegrade/val.png",
    name: "Val Agostini",
    age: "33 ans",
    lastjob: "Ebeniste",
    newjob: "Trouver du travail à la sortie de formation",
    description: "Parisienne au grand coeur, adoptée dans ma tendre enfance, j'aime les bons repas entre amis, à table!",
    linkedin: "https://www.linkedin.com",
    badge: "photos/badges/badgeVal.png",
    textbadge: "Merci pour ce badge! Val était un peu fatiguée. Vive le café",
    idPhotobis: "photo-val-1bis"
  },
  {
    id: 31,
    firstname: "Mohamed",
    photo: "photos/photosEleveDegrade/mohamed.png",
    name: "Mohamed Ait Amar",
    age: "27 ans",
    lastjob: "Auto-entrepreneur",
    newjob: "Développeur Web Full-Stack",
    description: "Je suis un fashionboy, ma casquette est toujours assortie à ma veste, je suis aussi passionnée des voitures.",
    linkedin: "https://www.linkedin.com/in/%F0%9F%92%BB-mohamed-a%C3%AFt-amar-95411523b/",
    textbadge: "Merci pour ce badge! Grâce à toi, Momo a encore plus de style!",
    badge: "photos/badges/badgeMohamed.png",
    idPhotobis: 'photo-mohamed-2bis'
  },
  {
    id: 33,
    firstname: "Alexandre",
    photo: "photos/photosEleveDegrade/alexD.png",
    name: "Alexandre Delbarre",
    age: "21 ans",
    lastjob: "Cuisinier",
    newjob: "Développeur Web",
    description: "Fan de chausson Vador nous dit: Pour trouver la rose de sa vie, il faut cueillir la plus belle du jardin et ne plus jamais changer d’avis.",
    linkedin: "https://www.linkedin.com/in/alexandre-delbarre-6635b0264/",
    badge: "photos/badges/badgeAlexD.png",
    textbadge: "Merci pour ce badge! Alex est encore plus fan de Star Wars!",
    idPhotobis: 'photo-alexD-4bis'
  },
  {
    id: 34,
    firstname: "Jocelyn",
    photo: "photos/photosEleveDegrade/jocelyn.png",
    name: "Jocelyn Deloose",
    age: "37 ans",
    lastjob: "Clerc d'Huissier",
    newjob: "Développeur Web",
    description: "Papa connaitre le sens du vent, il faut mettre son doigt dans le cul d'une poule !!!",
    linkedin: "https://www.linkedin.com/in/jocelyn-deloose-990615246/",
    badge: "photos/badges/badgeJocelyn.png",
    textbadge: "Merci pour ce badge! Jocelyn avait besoin d'un petit café!",
    idPhotobis: 'photo-jocelyn-5bis'
  },
  {
    id: 35,
    firstname: "Tessa",
    photo: "photos/photosEleveDegrade/tessa.png",
    name: "Fondeur Tessa",
    age: "25 ans",
    lastjob: "Freelance ",
    newjob: "Développeur Web Front-end",
    description: "Ma citation: Le plus lourd fardeau, c'est d'exister sans vivre Victor Hugo. Petit secret: Je jouais à la DS sous mes draps après le coucher ! Dédicace à Papa et Maman ♥",
    linkedin: "https://www.linkedin.com/in/tessa-fondeur-431b2015b/",
    badge: "photos/badges/badgeTessa.png",
    textbadge: "Merci pour ce badge! Tessa est trop mignone avec son casque!",
    idPhotobis:'photo-tessa-6bis'
  },
  {
    id: 36,
    firstname: "Hugo",
    photo: "photos/photosEleveDegrade/hugo.png",
    name: "Hugo Hanocq",
    age: "21 ans",
    lastjob: "Modeleur 3D",
    newjob: "Développeur Web ",
    description: "En tant que représentant jeunesse de la promo, j'apporte joie et fraicheur. Malgré quelques reveils difficiles, mon esprit vif, lui, est toujours à l'heure.",
    linkedin: "https://www.linkedin.com/in/hugo-hanocq-891342183/",
    badge: "photos/badges/badgeHugo.png",
    textbadge: "Merci pour ce badge! Hugo est devenu le kind of video games.",
    idPhotobis:'photo-hugo-8bis'
  },
  {
    id: 37,
    firstname: "Ambre",
    photo: "photos/photosEleveDegrade/ambre.png",
    name: "Ambre Henno",
    age: "22 ans",
    lastjob: "Arrêt des études",
    newjob: "Développeuse Web ou UI/UX Designer",
    description: "Ma Citation: Toujours voir le positif dans le négatif. Et mon péché mignon: les muffins au chocolat! Discrète, je suis pourtant très créative et appliquée.",
    linkedin: "https://www.linkedin.com/in/ambre-h-34b97b248/",
    badge: "photos/badges/badgeAmbre.png",
    textbadge: "Merci pour ce badge! Ambre est prête pour les podiums.",
    idPhotobis:'photo-ambre-8bis'
  },
  {
    id: 38,
    firstname: "Khouloud",
    photo: "photos/photosEleveDegrade/khouloud.png",
    name: "Khouloud Belkir",
    age: "30 ans",
    lastjob: "Prof d'anglais",
    newjob: "Développeur Web Full-Stack",
    description: "Ma Citation: Apprendre à s'aimer soi-même, c'est le début d'une grande histoire d'amour qui va durer toute la vie. Oscar Wilde. Et mon péché mignon: les chewing-gum",
    linkedin: "https://www.linkedin.com/in/khouloud-belkhir-7865a8216/",
    badge: "photos/badges/badgeKhouloud.png",
    textbadge: "Merci pour ce badge! Khouloud avait un peu froid sans son pyjama.",
    idPhotobis:'photo-khouloud-9bis'
  },
  {
    id: 39,
    firstname: "Anne",
    photo: "photos/photosEleveDegrade/anne.png",
    name: "Anne Marchasson",
    age: "32 ans",
    lastjob: "Infographiste",
    newjob: "Développeur Web Front-end",
    description: "Nordiste pure souche, je suis la cadette d'une grande famille, aussi suis-je surnommée Titanne. Autrefois infographiste, le dev web est mon nouveau projet pro. Je collection aussi les chaussettes dépareillées.",
    linkedin: "https://www.linkedin.com/in/anne-marchasson/",
    badge: "photos/badges/badgeAnne.png",
    textbadge: "Merci pour ce badge! Anne va pouvoir réveiller son âme d'artiste! ",
    idPhotobis:'photo-anne-10bis'
  },
  {
    id: 40,
    firstname: "Florent",
    photo: "photos/photosEleveDegrade/florent.png",
    name: "Florent Marin",
    age: "27 ans",
    lastjob: "Assitant Monteur",
    newjob: "Développeur Web",
    description: "Je suis Mr zen et doux mais mon humour reste toujours présent et un peu piquant. Ma citation:J'ai assez de vices pour faire du bricolages par Rohff. Ma passion: les playlist rnb dans la voiture.",
    linkedin: "https://www.linkedin.com/in/florent-m-297455194/",
    badge: "photos/badges/badgeFlorent.png",
    textbadge: "Merci pour ce badge! Florent passe au niveau 83 en Zen-Attitude!",
    idPhotobis:'photo-florent-11bis'
  },
  {
    id: 41,
    firstname: "Michael",
    photo: "photos/photosEleveDegrade/michael.png",
    name: "Michael McGrath",
    age: "31 ans",
    lastjob: "Chargé e-commerce",
    newjob: "A good job and good life",
    description: "Irishman venu de ma belle île irlandaise je pratique le français avec brio. Mon péché mignon: les bonbons. Et mon plus grand secret: Je ne sais pas faire de division à grands chiffres.",
    linkedin: "https://www.linkedin.com/in/michael-mc-grath/",
    badge: "photos/badges/badgeMichael.png",
    textbadge: "Merci pour ce badge! Michael retrouve son thé irlandais!",
  
    idPhotobis:'photo-michael-12bis'
  },
  {
    id: 42,
    firstname: "Sacha",
    photo: "photos/photosEleveDegrade/sacha.png",
    name: "Sacha Loumachi",
    age: "25 ans",
    lastjob: "Serveur",
    newjob: "Un Métier Passionnant",
    description: "L'informatique a toujours été une passion, j'ai exploré cet univers fascinant en développant des bots et des plugins, en jouant à des jeux vidéo en montant des ordinateurs. Aujourd'hui j'allie passion et travail pour m'épanouir pleinement.",
    linkedin: "https://www.linkedin.com/in/sacha-loumachi-28251b269/",
    badge: "photos/badges/badgeSacha.png",
    textbadge: "Merci pour ce badge! Sacha agumente son potentiel fashion!",
    idPhotobis:'photo-sacha-13bis'
  },
  {
    id: 43,
    firstname: "Rudy",
    photo: "photos/photosEleveDegrade/rudy.png",
    name: "Rudy Plessis",
    age: "29 ans",
    lastjob: "Développeur Java EE",
    newjob: "Développeur Web Full-Stack",
    description: "Mon humour saisissant a conquis la promo 2023. Ma citation:T'es pas l'pingouin qui glisse le plus loin. Je suis le cousin éloigné de Jim Carrey et j'aime les lasagnes.",
    linkedin: "https://www.linkedin.com/in/rudy-plessis/",
    badge: "photos/badges/badgeRudy.png",
    textbadge: "Merci pour ce badge! Son pouvoir est toujours supérieur au vôtre.",
    idPhotobis: 'photo-rudy-14bis'
  },
  {
    id: 44,
    firstname: "Alexandre",
    photo: "photos/photosEleveDegrade/alexF.png",
    name: "alexandre Rohde Ferreira",
    age: "21 ans",
    lastjob: "Monteur de Pc",
    newjob: "Monter sa boîte de Dev",
    description: "J'aime enfin ce que je fais...visiblement avoir le nez dans des syllabus de Droit belge n'était pas fait pour moi alors me voilà! Guitariste 'élétrique', j'ai un humour taquin qui enchante la promo.",
    linkedin: "https://www.linkedin.com/in/alexandre-rohde-ferreira-337662250/",
    badge: "photos/badges/badgeAlexF.png",
    textbadge: "Merci pour ce badge! La trottinette d'Alexandra a gagné en puissance, 17 km/h!",
    idPhotobis:'photo-alexF-15bis'
  },
  {
    id: 45,
    firstname: "Anthony",
    photo: "photos/photosEleveDegrade/anthony.png",
    name: "Anthony Sénéchal",
    age: "30 ans",
    lastjob: "Cariste",
    newjob: "Développeur Web",
    description: "Bon camarade, j'apprécie le travail en équipe. Je suis aussi prêt à partager des moments de détente avec les amis. Et mon péché mignon: Le welsh bourgeois",
    linkedin: "https://www.linkedin.com/in/anthony-senechal-1b0928265/",
    badge: "photos/badges/badgeAnthony.png",
    textbadge: "Merci pour ce badge! Anthony profite d'un bon verre!",
    idPhotobis:'photo-anthony-16bis'
  },
  {
    id: 32,
    firstname: "Romain",
    photo: "photos/photosEleveDegrade/romain.png",
    name: "Romain Constant",
    age: "41 ans",
    lastjob: "Manager",
    newjob: "Developpeur Front-end",
    description: "Ma citation préférée: Il a un côté sympathique, seulement on le voit toujours de face, nous dit ce jeune amateur de bière. Son plus grand secret: Il travaillait aux pompes funèbres",
    linkedin: "https://www.linkedin.com/in/romain-constant-969149152/",
    badge: "photos/badges/badgeRomain.png",
    textbadge: "Merci pour ce badge! Prof sera encore plus pédagogue! ",
    idPhotobis: 'photo-romain-3bis'
  },
  {
    id: 46,
    firstname: "Marie",
    photo: "photos/photosEleveDegrade/marie.png",
    name: "Marie Vangrevelynghe",
    age: "29 ans",
    lastjob: "Gérante, Programmeuse Python",
    newjob: "CyberSecurity Engineer 👨‍💻",
    description: "Ma citation: Hier est l'histoire, demain est un mystère, aujourd'hui est un cadeau. Mon secret: J'ai été championne de saut en longueur.",
    linkedin: "lhttps://www.linkedin.com/in/marie-vangrevelynghe/",
    badge: "photos/badges/badgeMarie.png",
    textbadge: "Merci pour ce badge! Le terminal de Marie est au top fonctionnel.",
    idPhotobis:'photo-marie-17bis'
  },
  {
    id: 47,
    firstname: "Marzouk",
    photo: "photos/photosEleveDegrade/marzouk.png",
    name: "Marzouk Yahia",
    age: "27 ans",
    lastjob: "Technicien Fibre optique",
    newjob: "Développeur Web",
    description: "Ma citation: Doucement mais surement. Ceci dit mon travail rigoureux me permet d'avancer sur le chemin de la reconvertion vers mon but ultime, le dev! ",
    linkedin: "https://www.linkedin.com/in/yahia-marzouk-b69799266/",
    badge: "photos/badges/badgeMarzouk.png",
    textbadge: "Merci pour ce badge! Et ce coup de pouce énergétique!",
    idPhotobis: 'photo-marzouk-18bis'
  },
  {
    id: 48,
    firstname: "Alexandre",
    photo: "photos/photosEleveDegrade/alexR.png",
    name: "Alexandre Rouzière",
    age: "31 ans",
    lastjob: "Agent Immobilier",
    newjob: "Développeur Web",
    description: " Je suis un papa comblé, toujours ravi d'apprendre et travailleur .Ma citation: Quand on veut, on peut. Et mon péché mignon: les crêpes.",
    linkedin: "linkedin",
    badge: "photos/badges/badgeAlexR.png",
    textbadge: "Merci pour ce badge! Alex est toujours dans les temps, et au taquet!",
    idPhotobis:'photo-alexR-19bis'
  },
  {
    id: 49,
    firstname: "Jade",
    photo: "photos/photosEleveDegrade/jade.png",
    name: "Jade-Ambre Rousseau",
    age: "25 ans",
    lastjob: "Communication",
    newjob: "Développeur Web",
    description: "J'ai un don pour cuisiner les pancakes. Et mon oeil artistique est bien aiguisé! Et le code est mon terrain de jeu.",
    linkedin: "https://www.linkedin.com/in/jadambre/",
    badge: "photos/badges/badgeJade.png",
    textbadge: "Merci pour ce badge! Et une paire de crocks de plus pour Jade!",
    idPhotobis:'photo-jade-20bis'
  },
  {
    id: 50,
    firstname: "Imène",
    photo: "photos/photosEleveDegrade/imene.png",
    name: "Imène Ramdan",
    age: "30 ans",
    lastjob: "",
    newjob: "",
    description: "Sincère jeune femme, J'ai une passion pas du tout secrête pour les séries coréennes. Mon caractère est bien trempé mais j'ai aussi le coeur sur la main. ",
    linkedin: "https://www.linkedin.com/in/imene-ramdan/",
    badge: "photos/badges/badgeImene.png",
    textbadge: "Merci pour ce badge! Petit coeur avec les doigts à vous aussi!",
    idPhotobis:'photo-imene-21bis'
  },
  {
    id: 51,
    firstname: "Valentin",
    photo: "photos/photosEleveDegrade/valentin.png",
    name: "Valentin Waquet",
    age: "27 ans",
    lastjob: "Infirmier",
    newjob: "Formateur Développement Web",
    description: "Saxophoniste émérite, je ne jure que pas la nourriture nordiste et en particulier, les Frites! J'assiste Fantine dans la formation de nos jeunes wilders.",
    linkedin: "https://www.linkedin.com/in/valentin-waquet-420412254/",
    badge: "photos/badges/badgeValentin.png",
    textbadge: "Merci pour ce badge! Une note de musique en plus sur sa partition!",
    idPhotobis:'photo-thomas-22bis'
  },
  {
    id: 52,
    firstname: "Fantine",
    photo: "photos/photosEleveDegrade/fantine.png",
    name: "Fantine Rudent",
    age: "30 ans",
    lastjob: "Educatrice de jeunes enfants",
    newjob: "Créer un projet qui aide les gens",
    description: "Je suis la formatrice de la promo. J'allie humour, bienveillance et pédagogie. Ma citation: Quand nous arrivons à la fin de nous-mêmes, nous arrivons au commencement de Dieu. Billy Graham. Et mon péché mignon: les bonbons qui piquent.",
    linkedin: "https://www.linkedin.com/in/fantine-rudent/",
    badge: "photos/badges/badgeFantine.png",
    textbadge: "Merci pour ce badge! On sera bientôt cerné par les crocks!",
    idPhotobis:'photo-fantine-23bis'
  },
  {
    id: 53,
    firstname: "Félicien",
    photo: "photos/photosEleveDegrade/felicien.png",
    name: "Félicien Renaud",
    age: "28 ans",
    lastjob: "",
    newjob: "Student Manager ",
    description: "Parisien bien intégré au Nord-Pas-de-Calais, Je suis passé pro dans la gestion des stocks de café. c'est moi qui m'occupe de toute cette petite bande.",
    linkedin: "https://www.linkedin.com/in/felicienrenaud/",
    badge: "photos/badges/badgeFelicien.png",
    textbadge: "Merci pour ce badge! Drache entre dans le vocabulaire de Félicien! ",
    idPhotobis:'photo-felicien-24bis'
  },
  {
    id: 54,
    firstname: "Thomas",
    photo: "photos/photosEleveDegrade/thomas.png",
    name: "Thomas Nigon",
    age: "34 ans",
    lastjob: "responsable maintenance de machine laser",
    newjob: "Développeur Web",
    description: "Je suis plutôt calme et réfléchi, ma tenue est très souvent assortie à mes chaussures et mon short à mes gants de boxes. Le hipidi-hop en fond sonore rien ne m'arrête. 'If it bleeds, we can kill it'- Predator.",
    linkedin: "https://www.linkedin.com/in/thomas-nigon-3699a1267/",
    badge: "photos/badges/badgeThomas.png",
    textbadge: "Merci pour ce badge! Thomas va revenir en forme! ",
    idPhotobis:'photo-thomas-25bis'
  },

];

// copy  item array in modal pop 
function createModal(learner) {
  const { id, firstname, photo, name, age, lastjob, newjob, description, linkedin, badge, textbadge } = learner;

  const cardWilder = document.createElement("div");
  cardWilder.setAttribute('id', id);
  cardWilder.classList.add("pop");
  modals.appendChild(cardWilder);

  const firstNameWilder = document.createElement("h3");
  firstNameWilder.innerHTML = firstname;
  firstNameWilder.classList.add("firstname-title");
  cardWilder.appendChild(firstNameWilder);

  const photoWilder = document.createElement("img");
  //photoWilder.style.background = `url(${photo})`;
  photoWilder.classList.add("photo");
  cardWilder.appendChild(photoWilder);
  photoWilder.setAttribute('src',photo);


  const nameWilder = document.createElement("div");
  nameWilder.innerHTML = name;
  nameWilder.classList.add("name");
  cardWilder.appendChild(nameWilder);

  const ageWilder = document.createElement("div");
  ageWilder.classList.add("age");
  ageWilder.innerHTML = age;
  cardWilder.appendChild(ageWilder);

  const lastJobWilder = document.createElement("div");
  lastJobWilder.classList.add("last-job");
  lastJobWilder.innerHTML = lastjob;
  cardWilder.appendChild(lastJobWilder);

  const newJobWilder = document.createElement("div");
  newJobWilder.classList.add("new-job");
  newJobWilder.innerHTML = newjob;
  cardWilder.appendChild(newJobWilder);

  const descriptionWilder = document.createElement("div");
  descriptionWilder.classList.add("description");
  descriptionWilder.innerHTML = description;
  cardWilder.appendChild(descriptionWilder);

  const linkedinLink = document.createElement("a");
  linkedinLink.classList.add("pop-button");
  linkedinLink.href = linkedin;
  linkedinLink.innerHTML = "Linkedin";
  cardWilder.appendChild(linkedinLink);

  const photoBadge = document.createElement("img");
  photoBadge.classList.add("badge");
  cardWilder.appendChild(photoBadge);
  photoBadge.setAttribute('src',badge);
  photoBadge.onclick = function() {
       modalBadge.style.display = "flex";
  }

  const modalBadge = document.createElement("div");
  modalBadge.classList.add("modalBadge");
  cardWilder.appendChild(modalBadge);

  const closeBadge = document.createElement("span");
  closeBadge.classList.add("closeBadge");
  closeBadge.innerHTML = "x";
  modalBadge.appendChild(closeBadge);
  closeBadge.onclick = function() {
      modalBadge.style.display = "none";
  }

  const ParaBadge = document.createElement("div");
  ParaBadge.classList.add("paraBadge");
  ParaBadge.innerHTML = textbadge;
  modalBadge.appendChild(ParaBadge);

  const closeBtn = document.createElement ("button");
  closeBtn.classList.add ("close-button");
  closeBtn.innerHTML = "x";
  cardWilder.appendChild (closeBtn);
  closeBtn.onclick = () => {
  cardWilder.remove()
   }

}
































//loop to set presentation cards
// for (let i = 0; i < wildersProfils.length; i++) {
//   createModal(wildersProfils[i])
// }

//creation tableau d'image grid1 
const ArrayGrid = document.querySelectorAll('.img-grid');

//création function evenement 
const openedDiv = (event) => {
// creation tableau etudiant avec filter où idphoto renvoie la pop complete par son id
  let learner = wildersProfils.filter(learner => learner.idPhotobis === event.target.id);
// si tebleau étudiant exite alors on crée la pop à partir du premier élément du tableau  sinon pas possible
 if (learner.length > 0) { createModal(learner[0]) } else {console.log('I can not link the modal Anne !')  }
 
}

//boucle sur tableau d'image grid1
for (let i = 0; i < ArrayGrid.length; i++) {
// cliquer sur l'élément du tableau alors on fait la fonction evenement ci dessus
ArrayGrid[i].addEventListener('click', openedDiv)
// }

}
