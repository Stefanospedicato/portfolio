import { useParams } from "react-router-dom";
import { tech, projects } from "../data/data";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Progetto non trovato.</p>;
  }

  const projectTechnologies = tech.filter(t => project?.technologies.includes(t.name));

  return (
    <div className="w-full min-h-screen flex items-center justify-center pb-20">
      <section className="w-full flex flex-col xl:flex-row xl:h-screen">

        {/* Sezione Sinistra - Titolo e Descrizione */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full xl:w-1/2 flex flex-col items-center justify-center text-center xl:px-20 pt-28 xl:h-screen"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl font-bold mb-10 xl:text-8xl uppercase"
          >
            {project.name}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl mb-5"
          >
            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="description hover:text-blue-400">Repository in GitHub</a>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-2xl"
          >
            <p className="description ">"{project.description}"</p>
          </motion.div>
        </motion.div>

        {/* Sezione Destra - Tecnologie e Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full xl:w-1/2 flex flex-col items-center xl:h-screen xl:mt-16 py-10 xl:py-0 xl:pb-10 xl:px-10"
        >
          {/* Tecnologie utilizzate */}
          <div className="xl:mb-10">
            <ul className="flex flex-wrap justify-center xl:my-5">
              {projectTechnologies.map((techItem) => (
                <li key={techItem.id} className="flex items-center gap-2 text-xl m-5">
                  <img className="w-[40px]" src={techItem.icon} alt={techItem.name} />
                  {techItem.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Video presentazione */}
          {project.video && (
            <div className="w-full mt-5 xl:mt-0">
              <div className="w-full aspect-video p-3">
                <iframe
                  src={project.video}
                  title="Video presentazione"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetail;
