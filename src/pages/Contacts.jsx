import { motion } from "framer-motion";
import ImageSection from "../components/ImageSection";
import { contacts } from "../data/data";

const Contacts = () => {
  return (
    <div className="w-full xl:h-[1100px] flex items-center justify-center">
      <section className="w-full flex flex-col xl:flex-row xl:justify-between min-h-screen pt-20 homepage-section gap-10 pb-20 relative">
        <ImageSection />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full w-[50%] flex flex-col items-center text-center xl:mr-10 xl:pb-32"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl font-bold mb-10 xl:text-8xl"
          >
            CONTATTI
          </motion.p>

          <motion.span
            initial={{ opacity: 0, width: "100px" }}
            whileHover={{ width: "500px" }}
            transition={{ duration: 0.5 }}
            className="block h-[10px] bg-black w-[100px] mb-5 rounded mx-auto"
          ></motion.span>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col"
          >
            {contacts.map(contact => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: contact.id * 0.1 }}
                className="text-4xl text-gray-400 m-3 cursor-pointer contact-card p-5 border border-white hover:border-gray-800"
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
                <p className="ml-5 text-xl contact">{contact.contact}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contacts;
