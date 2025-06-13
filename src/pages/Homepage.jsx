import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageSection from "../components/ImageSection";
import RoundedImage from "../components/RoundedImage";

const Homepage = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row items-stretch min-h-screen xl:h-screen xl:justify-between homepage-section gap-10 xl:my-28 mb-14">

      <ImageSection />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full xl:w-1/2 flex flex-col items-center text-center justify-center p-3 xl:h-screen"
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-4xl font-bold mb-10 pt-28 xl:pt-0 xl:mb-0 xl:text-8xl flex-shrink-0">
          STEFANO SPEDICATO
        </motion.p>

        <RoundedImage />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="my-10 xl:mb-5">
          <span className="text-4xl text-gray-400">I'm a</span>
          <span className="text-4xl font-semibold"> Junior Developer</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="w-full max-w-md">
          <Link to={"/storia"}><button className="cool-button mt-5 w-full">INFO</button></Link>
          <Link to={"/progetti"}><button className="cool-button mt-5 w-full">PROGETTI</button></Link>
          <Link to={"/contatti"}><button className="cool-button mt-5 w-full">CONTATTI</button></Link>
          <button className="cool-button mt-5 w-full">
            <a href="/Stefano.Spedicato.pdf" className="w-full h-full block">CV</a>
          </button>
        </motion.div>

      </motion.div>
    </section>

  );
};

export default Homepage;
