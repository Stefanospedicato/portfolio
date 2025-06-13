import { motion } from "framer-motion";
import { tech } from "../data/data";

const Technologies = () => {
  const multiTech = [...tech, ...tech];

  return (
    <div className="overflow-hidden w-full">
      <motion.ul
        className="flex gap-5"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {multiTech.map((item, index) => (
          <motion.li
            key={item.id + "-" + index}
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

