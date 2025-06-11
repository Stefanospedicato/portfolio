import ImageSection from "../components/ImageSection"
import RoundedImage from "../components/RoundedImage"
import { tech } from "../data/data"
const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen pt-20 xl:flex-row xl:justify-between homepage-section gap-10">
      <ImageSection />
      <div className="w-full xl:w-[50%] h-screen flex flex-col items-center text-center justify-center xl:overflow-auto px-20">
        <p className="text-8xl font-bold mb-10 xl:text-8xl flex-shrink-0">SU DI ME</p>
        <RoundedImage />
        <span className="h-[10px] bg-black w-[100px] mb-5 transition-all duration-500 ease-in-out hover:w-[300px] rounded mx-auto hidden xl:block"></span>
        <div className="overflow-auto flex-grow mt-5">
          <p className="description">"Dopo anni di esperienza in settori diversi dalla programmazione, ho deciso di seguire la mia vera passione: il <strong>DEVELOPMENT</strong>.</p>
          <p className="description">Questo cambiamento mi ha portato a intraprendere un percorso di formazione intenso e stimolante, culminato nella <strong>Boolean Academy</strong>, dove ho affinato le mie competenze nel corso <strong>Full-Stack Development</strong>, approfondendo tecnologie moderne e strumenti essenziali per lo sviluppo web.</p>
          <p className="description">Ora sono pronto a mettere in gioco le mie conoscenze e la mia determinazione, affrontando nuove sfide e contribuendo a progetti innovativi. Credo nella programmazione come mezzo per <strong>creare, innovare e risolvere problemi</strong> , e sono sempre alla ricerca di opportunità per crescere e migliorare.</p>
          <span className="block h-[10px] bg-black w-[100px] mb-5 transition-all duration-500 ease-in-out hover:w-[300px] rounded mx-auto"></span>
          <p className="text-3xl text-center font-bold mb-10 xl:text-3xl flex-shrink-0 mt-10">TECNOLOGIE</p>
          <ul className="flex flex-wrap justify-center">
            {tech.map((item) => (
              <li className="flex items-center gap-2 text-xl m-5" key={item.id}>{item.name}
                <img className="w-[40px]" src={item.icon} alt={item.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>


  )
}

export default About