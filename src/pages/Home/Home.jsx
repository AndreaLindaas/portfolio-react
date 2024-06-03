import "./Home.scss";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="portrait">
          <img src="./assets/media/andrea.jpg" />
        </div>
        <h1>Andrea Luthra Lindaas</h1>
        <p>
          Andrea Luthra Lindaas, frontend-utvikler under utdanning og sykepleier
          med over 16 års erfaring i helsevesenet, spesialisert innen
          velferdsteknologi. Har kurs og opplæring innen flere løsninger innen
          velferdsteknologi.
        </p>
        <h2>Relevant arbeid</h2>

        <ul>
          <li>
            <span className="year">2020</span> Kartlegger og vurderer innførsel
            samt bruk av GPS som velferdsteknologi. Drar hjem til brukere som
            har søkt, intervjuer og vurderer blant annet egnethet for å avgjøre
            om velferdsteknologi skal innføres for denne brukeren.
          </li>
        </ul>
        <h2>Utdanning</h2>
        <ul>
          <li>
            <span className="year">2022-2024 </span>
            Toårig utdanning innen frontend-utvikling fra Noroff School of
            technology and digital media.
          </li>
          <li>
            <span className="year">2020-2021 </span>
            Ettårig videreutdanning innen Velferdsteknologi, masternivå,
            OsloMet.
          </li>
          <li>
            <span className="year">2018-2019 </span>
            Ettårig utdanning innen Velferdsteknologi fra NKI/Medlearn og
            Helsedirektoratet.
          </li>
          <li>
            <span className="year">2012-2015 </span>
            Bachelor i sykepleie fra Diakonova Høyskole.
          </li>
          <li>
            <span className="year">2010 </span>
            Sykkelinstruktør ved Norges idrettshøgskole.
          </li>
          <li>
            <span className="year">2010 </span>
            Grunnkurs i anatomi ved Norges idrettshøgskole.
          </li>
        </ul>
        <h2>Foredrag</h2>
        <ul>
          <li>
            <span className="year">2019 </span>
            Hva er velferdsteknologi? Bruk og aktuelle løsninger - for Bouvet
            Norge, avd. Oslo.
          </li>
        </ul>
        <h2>Kontakt</h2>
        <div className="contact">
          <Link
            to="https://www.linkedin.com/in/andrea-luthra-lindaas-12a94a231/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </>
  );
}
