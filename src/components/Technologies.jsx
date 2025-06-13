import { motion } from "framer-motion";
import { tech } from "../data/data";

const Technologies = () => {
  const multiTech = [...tech, ...tech, ...tech, ...tech, ...tech, ...tech];

  return (
    <div className="overflow-hidden w-full">
      <motion.ul
        className="flex gap-5"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {multiTech.map((item) => (
          <motion.li
            key={item.id}
            className="flex items-center gap-2 text-xl mr-16"
          >
            {item.name} <img className="w-[40px]" src={item.icon} alt={item.name} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Technologies;
