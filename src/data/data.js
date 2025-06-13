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
    id: 11,
    name: "Typescript",
    icon: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
  },
  {
    id: 8,
    name: "React.js",
    icon: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    id: 9,
    name: "Vite",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png",
  },
  {
    id: 4,
    name: "Express.js",
    icon: "https://img.icons8.com/color/512/express-js.png",
  },
  {
    id: 5,
    name: "Node.js",
    icon: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: "https://www.svgrepo.com/show/353498/bootstrap.svg",
  },
  {
    id: 7,
    name: "TailwindCSS",
    icon: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
  },
  {
    id: 9,
    name: "MySQL Workbench",
    icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  },
  {
    id: 10,
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
    logo: "",
    image: "/yourcars-cop.jpeg",
    video: "/video-yourcars.mp4",
    repository:
      "https://github.com/Stefanospedicato/progetto-finale-spec-repository-front",
    technologies: ["CSS", "React.js", "Vite", "Typescript"],
  },
  {
    id: 2,
    name: "BoolBnB",
    description:
      "Si tratta di un progetto di gruppo in collaborazione con Fabio Ferrero e Lucia Meneghin, dove abbiamo sviluppato un sito ispirato ad AirBnB per la ricerca di immobili, integrando un sistema di filtraggio e pagine di dettaglio per ogni annuncio. Gli host possono inserire le proprie proprietà nel portale, mentre gli utenti possono effettuare ricerche mirate e contattare direttamente gli host in caso di interesse. ",
    logo: "",
    image: "/boolbnb-cop.jpeg",
    video: "/video-boolbnb.mp4",
    repository: "https://github.com/fabioferrero90/boolbnb-repository-pw",
    technologies: [
      "Express.js",
      "Node.js",
      "MySQL",
      "CSS",
      "TailwindCSS",
      "Vite",
      "React.js",
    ],
  },
  {
    id: 3,
    name: "Film Area",
    description:
      "Questo progetto offre un sito web che permette al cliente di sfogliare i propri titoli preferiti, aggiungerne di nuovi e di lasciare recensioni.",
    logo: "",
    image: "/filmarea-cop.jpeg",
    video: "/video-filmarea.mp4",
    repository: "https://github.com/Stefanospedicato/webapp-react",
    technologies: [
      "Express.js",
      "Node.js",
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
      "Questo progetto realizza un'interfaccia ispirata a Netflix, dove l'utente può cercare i suoi film e serie TV preferite e riceverne informazioni in merito.",
    logo: "",
    image: "/boolflix-cop.jpeg",
    video: "/video-boolflix.mp4",
    repository: "https://github.com/Stefanospedicato/react-boolflix",
    technologies: [
      "Express.js",
      "Node.js",
      "CSS",
      "Bootstrap",
      "Vite",
      "React.js",
    ],
  },
];

export { tech, contacts, projects };
