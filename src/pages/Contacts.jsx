import ImageSection from "../components/ImageSection"
import { contacts } from "../data/data"
const Contacts = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen pt-20 xl:flex-row xl:justify-between homepage-section overflow-y-auto gap-10">
      <ImageSection />
      <div className="w-full flex flex-col items-center text-center xl:w-[50%] xl:mr-10">
        <p className="text-8xl font-bold mb-10 xl:text-8xl">CONTATTI</p>
        <span className="block h-[10px] bg-black w-[100px] mb-5 transition-all duration-500 ease-in-out hover:w-[500px] rounded mx-auto"></span>
        <div className="flex flex-col">
          {contacts.map(contact => (
            <div className="text-4xl text-gray-400 m-3 cursor-pointer contact-card p-5 border border-white hover:border-gray-800" key={contact.id} onClick={() => contact.contact.startsWith("http") ? window.open(contact.contact) : window.open(`mailto:${contact.contact}`)}>
              <div className="flex items-center justify-center mb-5">
                <img className="w-[30px] mr-3" src={contact.icon} alt={contact.name} />
                <span>{contact.name}</span>
              </div>
              <p className=" ml-5 text-xl contact">{contact.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacts