import { motion } from "framer-motion";
import { projects } from "../data/data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <section className="w-full flex flex-col items-center text-center pt-28 pb-20 px-5">

        {/* Titolo */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-bold mb-10 xl:text-8xl"
        >
          PROGETTI
        </motion.p>

        {/* Descrizione */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full"
        >
          <p className="description">
            "Benvenuto nella sezione <strong>PROGETTI</strong>, il cuore pulsante del mio portfolio. Qui troverai il frutto di lunghe ore di dedizione, sperimentazione e, sì, anche qualche ostacolo superato con <strong>determinazione</strong>."
          </p>
          <p className="description">
            Dietro ogni riga di codice e ogni elemento visivo c’è un percorso di <strong>crescita</strong>, di sfide affrontate e di soluzioni trovate con creatività e <strong>perseveranza</strong>.
          </p>
          <p className="description">
            Questo spazio è più di una semplice raccolta: è la <strong>testimonianza</strong> del mio impegno, della mia passione e di quel pizzico di fatica che rende ogni risultato ancora più gratificante."
          </p>
        </motion.div>

        {/* Lista Progetti */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center mt-10  w-full px-5"
        >
          {projects.sort((a, b) => a.id - b.id).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full p-3 md:w-1/2 md:p-10"
            >
              <Link to={`/progetti/${project.id}`} className="block">
                <div className="flex flex-col items-center cursor-pointer transition duration-500 overflow-hidden">
                  <div className="w-full h-[200px] overflow-hidden flex items-center justify-center">
                    <img
                      className="object-cover w-full hover:scale-110 transition duration-500"
                      src={project.image}
                      alt={project.name}
                    />
                  </div>
                  <h2 className="text-lg mb-5 pt-1">{project.name}</h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;



