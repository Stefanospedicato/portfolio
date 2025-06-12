import ImageSection from "../components/ImageSection";
import RoundedImage from "../components/RoundedImage";
import { motion } from "framer-motion";
import { projects } from "../data/data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-full  xl:h-[1100px] flex items-center justify-center">
      <section className="w-full flex flex-col xl:flex-row xl:justify-between min-h-screen homepage-section gap-10 relative">
        <ImageSection />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center text-center xl:w-[50%] justify-start xl:mr-10"
        >
          <p className="text-4xl font-bold mb-10 xl:text-8xl">PROGETTI</p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RoundedImage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
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

          {/* Lista Progetti Animata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap xl:overflow-y-auto xl:max-h-[500px] mb-20"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="w-full p-3"
              >
                <Link to={`/progetti/${project.id}`} className="block">
                  <div className="project-card flex flex-col items-center cursor-pointer border border-gray-200 bg-white transition duration-500 overflow-hidden rounded">
                    <div className="w-full h-[200px] overflow-hidden flex items-center justify-center">
                      <img className="object-cover w-full mb-3 hover:scale-110 transition duration-500" src={project.image} alt={project.name} />
                    </div>
                    <h2 className="text-2xl font-semibold uppercase p-5">{project.name}</h2>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
