import { useParams } from "react-router-dom";
import { tech, projects } from "../data/data";
import { motion } from "framer-motion";
import ImageSection from "../components/ImageSection";
import RoundedImage from "../components/RoundedImage";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>Progetto non trovato.</p>;
  }

  const projectTechnologies = tech.filter(t => project?.technologies.includes(t.name));

  return (
    <div className="w-fullvxl:h-[1100px] flex items-center justify-center">
      <section className="w-full flex flex-col xl:flex-row xl:justify-between min-h-screen pt-20 homepage-section gap-10 relative pb-20">
        <ImageSection />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center text-center xl:w-[50%] justify-start xl:mr-10"
        >
          <p className="text-4xl font-bold mb-10 xl:text-8xl uppercase">{project.name}</p>

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
            <p className="description">"{project.description}"</p>
          </motion.div>

          <motion.span
            initial={{ width: "100px" }}
            whileHover={{ width: "500px" }}
            transition={{ duration: 0.5 }}
            className="block h-[10px] bg-black w-[100px] my-10 rounded mx-auto"
          ></motion.span>

          {/* Contenitore con overflow per tecnologie e video */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-full xl:overflow-y-auto max-h-[700px] xl:max-h-[650px] p-5"
          >
            {/* Tecnologie utilizzate */}
            <div className="mb-20">
              <ul className="flex flex-wrap justify-center my-5">
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
              <div className="w-full mt-5">
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
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetail;
