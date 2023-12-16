import { useState } from 'react';
import Dropdown from './Dropdown';

function About() {
  const [isLiabilityOpen, setIsLiabilityOpen] = useState(false);
  const [isRespectOpen, setIsRespectOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);

  
  return (
    <section className='about'>
      <header className="about__banner">
        <div className="banner"></div>
      </header>
      
      {/* Fiabilité */}
      <Dropdown 
        isStateOpen={isLiabilityOpen} 
        setStateOpen={setIsLiabilityOpen}
        className={'about'}
        title={'Fiabilité'}
        description={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}
      />

      {/* Respect */}
      <Dropdown 
        isStateOpen={isRespectOpen} 
        setStateOpen={setIsRespectOpen}
        className={'about'}
        title={'Respect'}
        description={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
      />

      {/* Service */}
      <Dropdown 
        isStateOpen={isServiceOpen} 
        setStateOpen={setIsServiceOpen}
        className={'about'}
        title={'Service'}
        description={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
      />

      {/* Sécurité */}
      <Dropdown 
        isStateOpen={isSecurityOpen} 
        setStateOpen={setIsSecurityOpen}
        className={'about'}
        title={'Sécurité'}
        description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
      />
    </section>
  );
}

export default About;
