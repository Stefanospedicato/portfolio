const tech = [
  {
    id: 1,
    name: "HTML5",
    icon: "https://www.svgrepo.com/show/452228/html-5.svg",
  },
  { id: 2, name: "CSS", icon: "https://www.svgrepo.com/show/373535/css.svg" },
  {
    id: 3,
    name: "Javascript",
    icon: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
  },
  {
    id: 4,
    name: "Typescript",
    icon: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
  },
  {
    id: 5,
    name: "React.js",
    icon: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    id: 6,
    name: "Vite",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png",
  },
  {
    id: 7,
    name: "Express.js",
    icon: "https://img.icons8.com/color/512/express-js.png",
  },
  {
    id: 8,
    name: "Node.js",
    icon: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
  },
  {
    id: 9,
    name: "Bootstrap",
    icon: "https://www.svgrepo.com/show/353498/bootstrap.svg",
  },
  {
    id: 10,
    name: "TailwindCSS",
    icon: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
  },
  {
    id: 11,
    name: "MySQL Workbench",
    icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  },
  {
    id: 12,
    name: "Jest",
    icon: "https://www.svgrepo.com/show/306268/jest.svg",
  },
];

const contacts = [
  {
    id: 3,
    name: "GitHub",
    contact: "https://github.com/Stefanospedicato",
    icon: "https://www.svgrepo.com/show/475654/github-color.svg",
  },
  {
    id: 2,
    name: "LinkedIn",
    contact: "https://www.linkedin.com/in/stefano-spedicato-59b441127/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png",
  },
  {
    id: 1,
    name: "Email",
    contact: "stefano.spedicato11@gmail.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
  },
  {
    id: 4,
    name: "Cellulare",
    contact: "+393335694685",
    icon: "https://www.svgrepo.com/show/13641/phone-call.svg",
  },
];

const projects = [
  {
    id: 1,
    name: "YourCars",
    description:
      "Per il progetto finale del corso di Boolean, ho sviluppato un portale dedicato alle automobili, permettendo la consultazione, la ricerca avanzata, il confronto tra modelli, il filtraggio e la creazione di nuovi record. Gli utenti possono esplorare i veicoli disponibili, aggiungerne di nuovi, comparare dati tecnici e salvare i modelli preferiti.",
    image: "/yourcars-cop.png",
    video: "/video-yourcars.mp4",
    repository:
      "https://github.com/Stefanospedicato/progetto-finale-spec-frontend-front",
    technologies: [
      "Vite",
      "HTML5",
      "CSS",
      "Bootstrap",
      "React.js",
      "Typescript",
    ],
  },
  {
    id: 2,
    name: "BoolBnB",
    description:
      "Si tratta di un progetto di gruppo in collaborazione con Fabio Ferrero e Lucia Meneghin, dove abbiamo sviluppato un sito ispirato ad AirBnB per la ricerca di immobili, integrando un sistema di filtraggio e pagine di dettaglio per ogni annuncio. Gli host possono inserire le proprie proprietà nel portale, mentre gli utenti possono effettuare ricerche mirate e contattare direttamente gli host in caso di interesse. ",
    image: "/boolbnb-cop.png",
    video: "/video-boolbnb.mp4",
    repository: "https://github.com/fabioferrero90/boolbnb-frontend-pw",
    technologies: [
      "Express.js",
      "Node.js",
      "MySQL",
      "Vite",
      "HTML5",
      "CSS",
      "TailwindCSS",
      "React.js",
    ],
  },
  {
    id: 3,
    name: "Film Area",
    description:
      "In questo progetto ho sviluppato un sito web dedicato ai film, permettendo agli utenti di consultare i propri titoli preferiti, di aggiungerne di nuovi e di lasciare recensioni. L'obiettivo era offrire un'esperienza di navigazione fluida e gradevole, con informazioni dettagliate su ogni film.",
    image: "/filmarea-cop.png",
    video: "/video-filmarea.mp4",
    repository: "https://github.com/Stefanospedicato/webapp-react",
    technologies: [
      "Express.js",
      "Node.js",
      "HTML5",
      "CSS",
      "Bootstrap",
      "Vite",
      "React.js",
    ],
  },
  {
    id: 4,
    name: "Boolflix",
    description:
      "Immergiti in un'avventura cinematografica con questo progetto ispirato a Netflix! Gli utenti possono esplorare un vasto catalogo di film e serie TV, scoprendo dettagli intriganti e recensioni appassionate. Grazie a Bootstrap, l'interfaccia offre un'esperienza visiva accattivante, mentre Express.js potenzia il back-end per una navigazione fluida e reattiva.",
    image: "/boolflix-cop.png",
    video: "/video-boolflix.mp4",
    repository: "https://github.com/Stefanospedicato/react-boolflix",
    technologies: [
      "Express.js",
      "Node.js",
      "HTML5",
      "CSS",
      "Bootstrap",
      "Vite",
      "React.js",
    ],
  },
  {
    id: 5,
    name: "Bool Travel",
    description:
      "Questo progetto di gruppo ci ha permesso di mettere alla prova le nostre competenze come sviluppatori. Abbiamo intervistato un potenziale cliente e replicato quanto richiesto. Bool Travel è un'applicazione per guide turistiche che consente di creare e gestire i propri viaggi, aggiungendo i partecipanti e i dettagli del viaggio. Le guide possono creare nuovi viaggi e aggiungere partecipanti in modo semplice e intuitivo.",
    image: "/booltravel-cop.png",
    video: "/video-booltravel.mp4",
    repository: "https://github.com/Stefanospedicato",
    technologies: ["HTML5", "CSS", "Bootstrap", "Vite", "React.js"],
  },
  {
    id: 6,
    name: "DC Comics",
    description:
      "In questo progetto, nonostante la navigazione e i link non siano funzionanti, ho cercato di riprodurre l'interfaccia del sito web ufficiale della DC Comics, implementando funzionalità come la presentazione dei vari personaggi e la loro descrizione. Questo progetto mi ha permesso di mettere alla prova le mie competenze stilistiche nel CSS e con Bootstrap.",
    image: "/dc-cop.png",
    video: "/video-dc-comics.mp4",
    repository: "https://github.com/Stefanospedicato/react-dc-comics",
    technologies: ["HTML5", "CSS", "Bootstrap", "Vite", "React.js"],
  },
];

export { tech, contacts, projects };
