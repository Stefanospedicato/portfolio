// Import delle dipendenze
import { motion } from "framer-motion";
import ImageSection from "../components/ImageSection";
import RoundedImage from "../components/RoundedImage";
import { tech } from "../data/data";

// Componente About
const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen pt-20 xl:flex-row xl:justify-between homepage-section gap-10 pb-28">

      {/* Sezione Immagine */}
      <ImageSection />

      {/* Sezione Testo Animata */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full xl:w-[50%] md:h-auto lg:h-screen flex flex-col items-center text-center justify-center xl:overflow-auto px-20 overflow-hidden"
      >

        {/* Titolo */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-7xl font-bold mb-10 xl:text-8xl flex-shrink-0"
        >
          SU DI ME
        </motion.p>

        {/* Immagine Rotonda */}
        <RoundedImage />

        {/* Descrizione Animata */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="md:h-auto lg:h-screen lg:overflow-auto flex-grow mt-5"
        >
          <p className="description">
            "Dopo anni di esperienza in settori diversi dalla programmazione, ho deciso di seguire la mia vera passione: il <strong>DEVELOPMENT</strong>."
          </p>
          <p className="description">
            Questo cambiamento mi ha portato a intraprendere un percorso di formazione intenso e stimolante, culminato nella <strong>Boolean Academy</strong>, dove ho affinato le mie competenze nel corso <strong>Full-Stack Development</strong>, approfondendo tecnologie moderne e strumenti essenziali per lo sviluppo web.
          </p>
          <p className="description">
            Ora sono pronto a mettere in gioco le mie conoscenze e la mia determinazione, affrontando nuove sfide e contribuendo a progetti innovativi. Credo nella programmazione come mezzo per <strong>creare, innovare e risolvere problemi</strong>, e sono sempre alla ricerca di opportunità per crescere e migliorare.
          </p>

          {/* Linea Animata */}
          <motion.span
            initial={{ opacity: 0, width: "100px" }}
            whileHover={{ width: "300px" }}
            transition={{ duration: 0.5 }}
            className="block h-[10px] bg-black w-[100px] mb-5 rounded mx-auto"
          ></motion.span>

          {/* Titolo Tecnologie */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="text-3xl text-center font-bold mb-10 xl:text-3xl flex-shrink-0 mt-10"
          >
            TECNOLOGIE
          </motion.p>

          {/* Lista Tecnologie Animata */}
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="flex flex-wrap justify-center"
          >
            {tech.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.id * 0.1 }}
                className="flex items-center gap-2 text-xl m-5"
              >
                {item.name} <img className="w-[40px]" src={item.icon} alt={item.name} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Esportazione del componente
export default About;
