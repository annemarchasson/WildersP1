// Modal
const cards = document.querySelector(".cards-desktop");

// array modal
const profilWilders = [
  {
    id: 1,
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
    idPhoto: 'photo-val-1'
  },
  {
    id: 2,
    firstname: "Mohamed",
    photo: "photos/photosEleveDegrade/mohamed.png",
    name: "Mohamed Ait Amar",
    age: "27 ans",
    lastjob: "Auto-entrepreneur",
    newjob: "Développeur Web Full-Stack",
    description: "Fashionboy, ma casquette est toujours assortie à ma veste, je suis aussi passionné de voiture.",
    linkedin: "https://www.linkedin.com/in/%F0%9F%92%BB-mohamed-a%C3%AFt-amar-95411523b/",
    badge: "photos/badges/badgeMohamed.png",
    textbadge: "Merci pour ce badge! Grâce à toi, Momo a encore plus de style!",
    idPhoto: 'photo-mohamed-2'
  },
  {
    id: 3,
    firstname: "Romain",
    photo: "photos/photosEleveDegrade/romain.png",
    name: "Romain Constant",
    age: "41 ans",
    lastjob: "Manager",
    newjob: "Developpeur Front-end",
    description: "Ma citation préférée: Il a un côté sympathique, seulement on le voit toujours de face. Je suis un jeune amateur de bière et mon plus grand secret: j'étais employé aux pompes funèbres",
    linkedin: "https://www.linkedin.com/in/romain-constant-969149152/",
    badge: "photos/badges/badgeRomain.png",
    textbadge: "Merci pour ce badge! Prof sera encore plus pédagogue! ",
    idPhoto: 'photo-romain-3'
  },
  {
    id: 4,
    firstname: "Alexandre",
    photo: "photos/photosEleveDegrade/alexD.png",
    name: "Alexandre Delbarre",
    age: "21 ans",
    lastjob: "Cuisinier",
    newjob: "Développeur Web",
    description: "Fan de mes chaussons Vador, voici ma citation préférée: Pour trouver la rose de sa vie, il faut cueillir la plus belle du jardin et ne plus jamais changer d’avis.",
    linkedin: "https://www.linkedin.com/in/alexandre-delbarre-6635b0264/",
    badge: "photos/badges/badgeAlexD.png",
    textbadge: "Merci pour ce badge! Alex est encore plus fan de Star Wars!",
    idPhoto: 'photo-alexD-4'
  },
  {
    id: 5,
    firstname: "Jocelyn",
    photo: "photos/photosEleveDegrade/jocelyn.png",
    name: "Jocelyn Deloose",
    age: "37 ans",
    lastjob: "Clerc d'Huissier",
    newjob: "Développeur Web",
    description: "Papa d'un petit Luke, je suis l'humoriste de notre promo. Toujours souriant et aimable, j'apprends le code avec plaisir et aime le travail en équipe.",
    linkedin: "https://www.linkedin.com/in/jocelyn-deloose-990615246/",
    badge: "photos/badges/badgeJocelyn.png",
    textbadge: "Merci pour ce badge! Jocelyn avait besoin d'un petit café!",
    idPhoto: 'photo-jocelyn-5'
  },
  {
    id: 6,
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
    idPhoto:'photo-tessa-6'
  },
  {
    id: 7,
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
    idPhoto:'photo-hugo-7'
  },
  {
    id: 8,
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
    idPhoto:'photo-ambre-8'
  },
  {
    id: 9,
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
    idPhoto:'photo-khouloud-9'
  },
  {
    id: 10,
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
    idPhoto:'photo-anne-10'
  },
  {
    id: 11,
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
    idPhoto:'photo-florent-11'
  },
  {
    id: 12,
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
    idPhoto:'photo-michael-12'
  },
  {
    id: 13,
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
    idPhoto:'photo-sacha-13'
  },
  {
    id: 14,
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
    idPhoto: 'photo-rudy-14'
  },
  {
    id: 15,
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
    idPhoto:'photo-alexF-15'
  },
  {
    id: 16,
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
    idPhoto:'photo-anthony-16'
  },
  {
    id: 17,
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
    idPhoto:'photo-marie-17'
  },
  {
    id: 18,
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
    idPhoto: 'photo-marzouk-18'
  },
  {
    id: 19,
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
    idPhoto:'photo-alexR-19'
  },
  {
    id: 20,
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
    idPhoto:'photo-jade-20'
  },
  {
    id: 21,
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
    idPhoto:'photo-imene-21'
  },
  {
    id: 22,
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
    idPhoto:'photo-valentin-22'
  },
  {
    id: 23,
    firstname: "Fantine",
    photo: "photos/photosEleveDegrade/fantine.png",
    name: "Fantine Rudent",
    age: "30 ans",
    lastjob: "Educatrice jeunes enfents",
    newjob: "Créer un projet qui aide les gens",
    description: "Je suis la formatrice de la promo. J'allie humour, bienveillance et pédagogie. Ma citation: Quand nous arrivons à la fin de nous-mêmes, nous arrivons au commencement de Dieu. Billy Graham. Et mon péché mignon: les bonbons qui piquent.",
    linkedin: "https://www.linkedin.com/in/fantine-rudent/",
    badge: "photos/badges/badgeFantine.png",
    textbadge: "Merci pour ce badge! On sera bientôt cerné par les crocks!",
    idPhoto:'photo-fantine-23'
  },
  {
    id: 24,
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
    idPhoto:'photo-felicien-24'
  },

];

// copy  item array in modal card 
function createCard(student) {
  const { id, firstname, photo, name, age, lastjob, newjob, description, linkedin, badge, textbadge} = student;

  const cardWilder = document.createElement("div");
  cardWilder.setAttribute('id', id);
  cardWilder.classList.add("card");
  cards.appendChild(cardWilder);

  const firstNameWilder = document.createElement("h3");
  firstNameWilder.innerHTML = firstname;
  firstNameWilder.classList.add("firstname-title");
  cardWilder.appendChild(firstNameWilder);

  const photoWilder = document.createElement("img");
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
  linkedinLink.classList.add("card-button");
  linkedinLink.innerHTML = "Linkedin";
  linkedinLink.href = linkedin;


  // linkedinLink.setAttribute('href',linkedin);
  // linkedinLink.onclick = function() {
  // linkedinLink.href = linkedin;
  //onclick="window.open(this.href, '_blank')
  //target="_blank"
  //window.open('https://waytolearnx.com', '_blank');

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














//creation tableau d'image grid 
const imgGridArray = document.querySelectorAll('.img-grid');

//création function evenement 
const divOpenened = (event) => {
// creation tableau etudiant avec filter où idphoto renvoie la card complete par son id
  let student = profilWilders.filter(student => student.idPhoto === event.target.id);
// si tebleau étudiant exite alors on crée la card à partir du premier élément du tableau  sinon pas possible
  if (student.length > 0) { createCard(student[0]) } else { console.log('I can not link the modal') }
}

// boucle sur tableau d'image grid
for (let i = 0; i < imgGridArray.length; i++) {
// cliquer sur l'élément  i du tableau alors on fait la fonction evenement ci dessus
imgGridArray[i].addEventListener('click', divOpenened)
}