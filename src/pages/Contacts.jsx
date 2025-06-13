import { motion } from "framer-motion";
import RoundedImage from "../components/RoundedImage";
import SquareImage from "../components/SquareImage";
import { contacts } from "../data/data";

const Contacts = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center pb-20">
      <section className="w-full flex flex-col xl:flex-row  xl:h-screen">

        {/* Sezione Sinistra - Titolo e Immagini */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full xl:w-1/2 flex flex-col items-center justify-center text-center pt-10 mt-20 xl:mt-0 xl:px-20 xl:h-screen"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl font-bold mb-10 xl:text-9xl xl:mb-20"
          >
            CONTATTI
          </motion.p>
          <SquareImage />
          <RoundedImage />
        </motion.div>

        {/* Sezione Destra - Lista Contatti */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full xl:w-1/2 flex flex-col items-center xl:h-screen xl:overflow-y-auto xl:max-h-screen xl:mt-24 xl:px-10"
        >
          {contacts.map(contact => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: contact.id * 0.1 }}
              className="text-4xl text-gray-400 m-3 cursor-pointer contact-card p-5"
              onClick={() => {
                if (contact.id === 4) {
                  window.open(`tel:${contact.contact}`);
                } else if (contact.contact.startsWith("http")) {
                  window.open(contact.contact);
                } else {
                  window.open(`mailto:${contact.contact}`);
                }
              }}
            >
              <div className="flex items-center justify-center mb-5">
                <img className="w-[30px] mr-3" src={contact.icon} alt={contact.name} />
                <span>{contact.name}</span>
              </div>
              <p className="ml-5 text-xl contact text-center">{contact.contact}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Contacts;
