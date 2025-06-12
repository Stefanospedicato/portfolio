import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageSection from "../components/ImageSection";
import RoundedImage from "../components/RoundedImage";

const Homepage = () => {
  return (
    <div className="w-full  xl:h-[1100px] flex items-center justify-center">
      <section className="w-full flex flex-col items-center justify-center min-h-screen pt-20 xl:flex-row xl:justify-between homepage-section gap-10 pb-20">
        <ImageSection />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full xl:w-[50%] flex flex-col items-center text-center justify-center p-3 overflow-hidden"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-8xl font-bold mb-10 xl:text-9xl flex-shrink-0"
          >
            STEFANO SPEDICATO
          </motion.p>
          <RoundedImage />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="mb-5"
          >
            <span className="text-4xl text-gray-400">I'm a</span>
            <span className="text-4xl font-semibold"> Junior Developer</span>
          </motion.div>
          <motion.span
            initial={{ width: "100px" }}
            whileHover={{ width: "500px" }}
            transition={{ duration: 0.5 }}
            className="block h-[10px] bg-black w-[100px] mb-5 rounded mx-auto"
          ></motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="w-full max-w-md"
          >
            <Link to={"/about"}><button className="cool-button mt-10 w-full">INFO</button></Link>
            <Link to={"/progetti"}><button className="cool-button mt-10 w-full">PROGETTI</button></Link>
            <Link to={"/contatti"}><button className="cool-button mt-10 w-full">CONTATTAMI</button></Link>
            <button className="cool-button mt-10 w-full">
              <a href="/Stefano.Spedicato.pdf" className="w-full h-full block">VISUALIZZA CV</a>
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;
