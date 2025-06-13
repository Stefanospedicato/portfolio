import { motion } from "framer-motion";
import Technologies from "../components/Technologies";
import RoundedImage from "../components/RoundedImage";
import SquareImage from "../components/SquareImage";

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <section className="w-full flex flex-col xl:flex-row xl:h-screen">

        {/* Sezione Sinistra - Titolo e Immagine */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full xl:w-1/2 flex flex-col items-center justify-center text-center pt-10 mt-20 xl:mt-0 xl:px-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl font-bold mb-10 xl:text-9xl xl:mb-20"
          >
            SU DI ME
          </motion.p>
          <SquareImage />
          <RoundedImage />
        </motion.div>

        {/* Sezione Destra - Descrizione e Carosello */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full xl:w-1/2 flex flex-col justify-center items-center xl:px-20 text-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-5"
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
          </motion.div>

          {/* Carosello */}
          <Technologies />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
