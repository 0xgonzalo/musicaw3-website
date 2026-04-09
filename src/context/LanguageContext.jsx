'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav: {
      about: 'About',
      events: 'Events',
      drops: 'Drops',
    },
    // About Banner
    about: {
      subtitle: 'Our Community',
      description1: 'We are a community of independent Latin American musicians dedicated to promoting education, support, and awareness about the collaborative effects of Web3 music networks in Spanish.',
      description2: 'You can find us daily organizing discussions and debates about blockchain technology on various social media platforms, as well as offering free content for new and advanced Web3 users on how to leverage these tools for more sustainable careers through onchain song creation and network effects.',
      description3: 'Our main goal is to cultivate an inclusive and mutually beneficial environment for everyone involved, welcoming new individuals into the ecosystem, including fans, holders, tech enthusiasts, musicians, producers, managers, and anyone interested in participating.',
      stats: {
        drops: 'Drops',
        artists: 'Artists',
        community: 'Community',
      },
    },
    // Carousel
    carousel: {
      subtitle: 'Gallery',
      title: 'MOMENTS',
    },
    // Oasis Banner
    oasis: {
      subtitle: 'Educational Program',
      title1: 'Towards Sovereignty',
      title2: 'of Onchain Creators',
      description1: 'Our comprehensive program for onchain creators is now available. We provide you with all the tools to make your career as an artist more sustainable.',
      description2: "It's 100% free and we cover various topics of interest for beginners, intermediate, and advanced creators.",
      cta: 'Go to Course',
      partners: 'In Partnership with',
    },
    // Farcaster Banner
    farcaster: {
      subtitle: 'Masterclass',
      title: 'Connecting with the Farcaster Community',
      description1: 'Our Masterclass about Farcaster and how to monetize as a creator is now available.',
      description2: 'Farcaster is a decentralized social network that allows users to create and share content freely and without censorship.',
      cta: 'Watch Masterclass',
    },
    // Events Banner
    events: {
      subtitle: 'Our History',
      title: 'EVENTS',
      images: {
        1: { alt: 'Resonancias Paralelas general flyer', description: 'Resonancias Paralelas was an exhibition with various events held at the CCK in Buenos Aires in July 2024 where more than 15,000 people came to an exhibition hall, live music concerts, and talks about blockchain technology applied to cultural industries.' },
        2: { alt: 'Cyberw3b Festival', description: 'Cyberw3b was the first onchain music festival of the community held in October 2023 with the participation of MusicaW3 members together with new students from "El Método Web3" academy at Blockhouse, Buenos Aires.' },
        3: { alt: 'La Bitconf 2023', description: 'We participated in various blockchain creator panels discussing the importance of digital sovereignty and community ecosystems on the internet.' },
        4: { alt: 'Buenopalooza', description: 'Buenopalooza was an initiative by Bueno NFT where various live music works by community musicians were presented in the metaverse.' },
        5: { alt: 'Music NFT Workshop in Cali', description: 'The first workshop given by one of our founders where we brought the world of onchain music to various Colombian musicians who had never before had an approach to this new industry.' },
        6: { alt: 'Virtuality 2023', description: 'Virtuality is one of the largest technology conventions in Buenos Aires. MúsicaW3 participated with its stand where we exhibited the work of various artists participating in the collective, in addition to providing information about available platforms and live music recording and performance.' },
        7: { alt: 'Talk at Resonancias Paralelas', description: 'The talk given by one of our founders was in the CCK auditorium where she taught artists and content creators to monetize their works through the new industries posed by decentralized economies. In addition to raising the philosophical side of blockchain in relation to artistic sovereignty and quality education.' },
        8: { alt: 'Resonancias Paralelas Shows', description: 'The shows were held in the CCK dome, an enviable venue in the city with great technical, acoustic, and architectural quality. In both shows we had collective members who played live for a full house audience.' },
        9: { alt: 'Resonancias Paralelas Expo', description: 'Resonancias Paralelas was an Augmented Art exhibition where various music and visual experiences were presented to a wide diversity of audiences. There was also a micro-cinema in the room where videos of that month\'s Collective Drop were displayed along with access links for collection.' },
        10: { alt: 'Base Meetup Buenos Aires', description: 'The first Base meetup held in Buenos Aires in June 2024. There were talks about ENS, Base adoption, and live music listening and the presentation of the Collective Drop in a movie theater.' },
        11: { alt: 'Songcamp Buenos Aires 2024', description: 'The Buenos Aires Songcamp was a community initiative together with Sweetman.eth where a professional audio studio was rented and 4 groups gathered to make a song as a team and release it in February 2024 as part of the first Buenos Aires Onchain Songcamp.' },
        12: { alt: 'End of Year Event 2024', description: 'We celebrated our event at the legendary Buenos Aires venue Dunepark with the participation of Collective Drop Vol.10 together with the Northwest Argentina community Maskay and with live musicians and onboarding dynamics for new users through prizes from our sponsors.' },
      },
    },
    // Drops Banner
    drops: {
      subtitle: 'Collective Releases',
      title: 'DROPS',
      description: 'MúsicaW3 collective releases are monthly publications in which we bring together established artists within the web3 ecosystem along with new talents and musicians attracted by the community. We believe it is vital to create promotional spaces where support and collaborative network effects are expansive for all participants.',
      selectPlaceholder: 'Select a Drop',
      emptyState: 'Select a drop to see more details',
      listenNow: 'Listen now',
    },
    // Founders Banner
    founders: {
      subtitle: 'The Team',
      title: 'FOUNDERS',
      follow: 'Follow',
    },
    // Footer
    footer: {
      tagline: 'Independent music in Web3',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      forCommunity: 'for the community',
    },
    // WOW Festival
    wow: {
      badge: 'Music Festival',
      tagline: 'Art, Music and Tech for EVERYONE',
      description: 'A live cultural lab where musicians, artists, creators, collectives and communities experiment with',
      descriptionHighlight1: 'onchain tools',
      descriptionHighlight2: 'digital collectibles',
      descriptionListConnector: 'and',
      descriptionHighlight3: 'new ownership models',
      descriptionEnd: 'through music, art exhibitions, experiences and participation —',
      descriptionItalic: 'not speculation',
      features: [
        'Art, live music, and interactive installations',
        'Onchain + offchain cultural activations',
        'Workshops, talks, and immersive experiences',
        'Bridging technology, art, and culture',
        'Culture in service of the community',
        'Development of our own tools to distribute digital art',
      ],
      collectors: {
        badge: 'For Collectors',
        title: 'Rewards for Artifact Collectors',
        description: 'An Artifact is a unique digital collectible that represents your support for the festival. By collecting Artifacts, you not only help fund the event, but also gain access to an exclusive rewards drop and become an active participant in its cultural and creative growth.',
        rewards: [
          'AI-generated Artifacts (Bronze / Silver / Gold / Diamond)',
          'Commemorative digital badge of the festival',
          'Access to digital rewards and future community benefits',
          'Exclusive drop of original MusicaW3 songs',
          'Priority access to future music releases',
          'Public recognition within the MusicaW3 community',
        ],
      },
      tiers: {
        badge: 'Collector Tiers',
        title: 'Artifact Collector Tiers',
        description: 'The more you collect, the more you unlock. Each tier brings increasing value, exclusivity, and deeper participation in the MusicaW3 community.',
        bronze: {
          name: 'Bronze',
          artifacts: '1 Artifact',
          benefits: [
            'Honorary mention on social media',
            'Bronze community token',
          ],
        },
        silver: {
          name: 'Silver',
          artifacts: '5 Artifacts',
          benefits: [
            'Social media mention',
            'Website mention',
            'Audiovisual material credit',
            'Silver community token',
          ],
        },
        gold: {
          name: 'Gold',
          artifacts: '10 Artifacts',
          benefits: [
            'All previous benefits',
            'Gold community token',
            'Official music collectible from the drop',
            'Transferable Investor Pass NFT',
            'Access to Creative Governance Group',
          ],
        },
        investor: {
          name: 'Investor',
          artifacts: '20 Artifacts',
          benefits: [
            'All previous benefits',
            'Immersive on-site + online experience',
            'Bi-weekly 1:1 sessions with the team',
            'Access to Snapshot governance',
          ],
        },
        diamond: {
          name: 'Diamond',
          artifacts: '50+ Artifacts',
          benefits: [
            'All previous benefits',
            'Exclusive dinner with team & artists',
            'Full premium immersive experience',
            'Diamond MusicaW3 tokens',
            'Featured mentions everywhere',
          ],
        },
      },
      firstWeek: {
        badge: 'Limited Time',
        title: 'First Days Voting Bonus',
        description: 'Vote during the first week and unlock exclusive early supporter rewards. Early participation builds community and earns recognition.',
        bonuses: [
          'Songs from previous collective drops (or commemorative badges)',
          'Animated community tokens based on tier (Bronze / Silver / Gold)',
          'Percentage allocation of MusicaW3 token supply on Zora',
          'Early access to community mini-apps (AR minting tools, festival apps)',
          'Daily MVP Voter: highlight post for top voter each day',
          'Commemorative digital badge via Spaces and redeemable codes',
        ],
        urgency: "Don't miss out — early voters shape the future of MusicaW3",
      },
      cta: 'Collect Artifact',
    },
  },
  es: {
    // Navbar
    nav: {
      about: 'About',
      events: 'Eventos',
      drops: 'Drops',
    },
    // About Banner
    about: {
      subtitle: 'Nuestra Comunidad',
      description1: 'Somos una comunidad de músicos independientes de América Latina dedicados a promover la educación, el apoyo y la concienciación sobre los efectos colaborativos de las redes musicales en Web3 en español.',
      description2: 'Nos encuentras diariamente organizando discusiones y debates sobre tecnología blockchain en diversas plataformas de redes sociales, además de ofrecer contenido gratuito para usuarios nuevos y avanzados de Web3 sobre cómo aprovechar estas herramientas para carreras más sostenibles mediante la creación de canciones en la blockchain y los network effects.',
      description3: 'Nuestro principal objetivo es cultivar un entorno inclusivo y mutuamente beneficioso para todos los involucrados, dando la bienvenida a nuevas personas en el ecosistema, incluidos fanáticos, holders, entusiastas tecnológicos, músicos, productores, gestores y cualquier persona interesada en participar.',
      stats: {
        drops: 'Drops',
        artists: 'Artistas',
        community: 'Comunidad',
      },
    },
    // Carousel
    carousel: {
      subtitle: 'Galería',
      title: 'MOMENTOS',
    },
    // Oasis Banner
    oasis: {
      subtitle: 'Programa Educativo',
      title1: 'Hacia la Soberanía',
      title2: 'de los Creadores Onchain',
      description1: 'Nuestro programa integral para creadores onchain se encuentra disponible. Te brindamos todas las herramientas que puedas lograr que tu carrera como artista sea más sostenible.',
      description2: 'Es 100% gratuito y cubrimos varios tópicos de interés para principiantes, intermedios y creadores avanzados.',
      cta: 'Ir al Curso',
      partners: 'In Partnership with',
    },
    // Farcaster Banner
    farcaster: {
      subtitle: 'Masterclass',
      title: 'Conectando con la Comunidad Farcaster',
      description1: 'Ya está disponible nuestra Masterclass sobre Farcaster y cómo monetizar siendo creador.',
      description2: 'Farcaster es una red social descentralizada que permite a los usuarios crear y compartir contenido de forma libre y sin censura.',
      cta: 'Ver Masterclass',
    },
    // Events Banner
    events: {
      subtitle: 'Nuestra Historia',
      title: 'EVENTOS',
      images: {
        1: { alt: 'Resonancias Paralelas flyer general', description: 'Resonancias Paralelas fue una exhibición con distintos eventos realizada en el CCK de Buenos Aires en Julio del 2024 donde más de 15.000 personas se acercaron a una sala de exposiciones, recitales de música en vivo y charlas sobre tecnología blockchain aplicada a las industrias culturales.' },
        2: { alt: 'Cyberw3b Festival', description: 'Cyberw3b fue el primer festival de música onchain de la comunidad realizado en Octubre de 2023 y con la participación de los miembros de MusicaW3 en conjunto con nuevos alumnos de la academia "El Método Web3" en Blockhouse, Buenos Aires.' },
        3: { alt: 'La Bitconf 2023', description: 'Participamos en distintos páneles de creadores en blockchain discutiendo sobre la importancia de la soberanía digital y los ecosistemas de las comunidades en internet.' },
        4: { alt: 'Buenopalooza', description: 'Buenopalooza fue una iniciativa de Bueno NFT donde se presentaron en el metaverso distintos trabajos en vivo de músicos de la comunidad.' },
        5: { alt: 'Music NFT Workshop en Cali', description: 'El primer workshop dado por uno de nuestros founders donde llevamos el mundo de la música onchain a diversos músicos colombianos que nunca antes habían tenido un acercamiento a esta nueva industria.' },
        6: { alt: 'Virtuality 2023', description: 'Virtuality es una de las convenciones de tecnología mas grandes de la ciudad de Buenos Aires. MúsicaW3 estuvo participando con su stand donde exhibimos el trabajo de distintos artistas que participan del colectivo además de brindar información sobre plataformas disponibles y grabación e interpretación de música en vivo.' },
        7: { alt: 'Charla en Resonancias Paralelas', description: 'La charla dada por un de nuestras founders fue en el auditorio del CCK donde enseñó a artistas y creadores de contenido a monetizar sus obras a través de las nuevas industrias que plantean las economías descentralizadas. Además de plantear el lado filosófico de la blockchain en relación a la sobernaía artística y la educación de calidad.' },
        8: { alt: 'Resonancias Paralelas Shows', description: 'Los shows se realizaron en la cúpula del CCK, un envidiable venue de la ciudad con una gran calidad técnica, acústica y arquitectónica. En ambos shows contamos con miembros del colectivo que tocaron en vivo para una audiencia a sala llena.' },
        9: { alt: 'Resonancias Paralelas Expo', description: 'Resonancias Paralelas fue una exhibición de Arte Aumentado donde distintas experiencias de música y visuales fueron presentadas ante una gran diversidad de audiencias. Además se contó con un microcine en la sala donde se exponían video del Drop Colectivo de ese mes y los links de acceso para que puedan ser coleccionados.' },
        10: { alt: 'Base Meetup Buenos Aires', description: 'El primer meetup de Base realizado en Buenos Aires en Junio de 2024. Hubieron charlas sobre ENS, adopción de Base y la escucha de música en vivo y la presentación del Drop Colectivo en una sala de Cine.' },
        11: { alt: 'Songcamp Buenos Aires 2024', description: 'El Songcamp Buenos Aires fue una iniciativa de la comunidad en conjunto con Sweetman.eth donde se alquiló un estudio profesional de audio y se juntaron 4 grupos para hacer una canción en equipo y lanzarla en Febrero de 2024 en el marco del primer Songcamp Onchain de Buenos Aires.' },
        12: { alt: 'Evento fin de año 2024', description: 'Celebramos nuestro evento en el mítico lugar de Buenos Aires Dunepark con la participación del Drop Colectivo Vol.10 en conjunto con la comunidad del Noroeste Argentino Maskay y con músicos en vivo y dinámicas de onboarding de nuevos usuarios mediante premios de nuestros sponsors.' },
      },
    },
    // Drops Banner
    drops: {
      subtitle: 'Lanzamientos Colectivos',
      title: 'DROPS',
      description: 'Los lanzamientos colectivos de MúsicaW3 son publicaciones mensuales en las que reunimos a artistas consolidados dentro del ecosistema web3 junto con nuevos talentos y músicos atraídos por la comunidad. Creemos que es vital crear espacios promocionales donde el apoyo y los efectos de red colaborativos sean expansivos para todos los participantes.',
      selectPlaceholder: 'Selecciona un Drop',
      emptyState: 'Selecciona un drop para ver más detalles',
      listenNow: 'Escuchar ahora',
    },
    // Founders Banner
    founders: {
      subtitle: 'El Equipo',
      title: 'FOUNDERS',
      follow: 'Follow',
    },
    // Footer
    footer: {
      tagline: 'Música independiente en Web3',
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      forCommunity: 'para la comunidad',
    },
    // WOW Festival
    wow: {
      badge: 'Festival de Música',
      tagline: 'Arte, Música y Tecnología para TODOS',
      description: 'Un laboratorio cultural en vivo donde músicos, artistas, creadores, colectivos y comunidades experimentan con',
      descriptionHighlight1: 'herramientas onchain',
      descriptionHighlight2: 'coleccionables digitales',
      descriptionListConnector: 'y',
      descriptionHighlight3: 'nuevos modelos de propiedad',
      descriptionEnd: 'a través de música, exhibiciones de arte, experiencias y participación —',
      descriptionItalic: 'no especulación',
      features: [
        'Arte, música en vivo e instalaciones interactivas',
        'Activaciones culturales onchain + offchain',
        'Talleres, charlas y experiencias inmersivas',
        'Conectando tecnología, arte y cultura',
        'Cultura al servicio de la comunidad',
        'Desarrollo de nuestras propias herramientas para distribuir arte digital',
      ],
      collectors: {
        badge: 'Para Coleccionistas',
        title: 'Recompensas para Collectors de Artifacts',
        description: 'Un Artifact es un coleccionable digital único que representa tu apoyo al festival. Al coleccionar Artifacts, no solo ayudas a financiar el evento, sino que también obtienes acceso a un drop exclusivo de recompensas y te convertís en un participante activo de su crecimiento cultural y creativo.',
        rewards: [
          'Artifacts (Bronce / Plata / Oro / Diamante)',
          'Insignia digital conmemorativa del festival',
          'Acceso a recompensas digitales y beneficios futuros de la comunidad',
          'Drop exclusivo de canciones originales de MusicaW3',
          'Acceso prioritario a futuros lanzamientos musicales',
          'Reconocimiento público dentro de la comunidad MusicaW3',
        ],
      },
      tiers: {
        badge: 'Niveles de Collectors',
        title: 'Niveles de Collectors',
        description: 'Cuanto más coleccionas, más desbloqueas. Cada nivel trae mayor valor, exclusividad y participación más profunda en la comunidad MusicaW3.',
        bronze: {
          name: 'Bronce',
          artifacts: '1 Artifact',
          benefits: [
            'Mención honoraria en redes sociales',
            'Token comunitario Bronce',
          ],
        },
        silver: {
          name: 'Plata',
          artifacts: '5 Artifacts',
          benefits: [
            'Mención en redes sociales',
            'Mención en el sitio web',
            'Crédito en material audiovisual',
            'Token comunitario Plata',
          ],
        },
        gold: {
          name: 'Oro',
          artifacts: '10 Artifacts',
          benefits: [
            'Todos los beneficios anteriores',
            'Token comunitario Oro',
            'Coleccionable musical oficial del drop',
            'NFT Pase de Inversor transferible',
            'Acceso al Grupo de Gobernanza Creativa',
          ],
        },
        investor: {
          name: 'Investor',
          artifacts: '20 Artifacts',
          benefits: [
            'Todos los beneficios anteriores',
            'Experiencia inmersiva presencial + online',
            'Sesiones 1:1 quincenales con el equipo',
            'Acceso a gobernanza en Snapshot',
          ],
        },
        diamond: {
          name: 'Diamante',
          artifacts: '50+ Artifacts',
          benefits: [
            'Todos los beneficios anteriores',
            'Cena exclusiva con el equipo y artistas',
            'Experiencia inmersiva premium completa',
            'Tokens MusicaW3 Diamante',
            'Menciones destacadas en todo',
          ],
        },
      },
      firstWeek: {
        badge: 'Tiempo Limitado',
        title: 'Bonus de Votación Primeros Días',
        description: 'Vota durante la primera semana y desbloquea recompensas exclusivas para early supporters. La participación temprana construye comunidad y gana reconocimiento.',
        bonuses: [
          'Canciones de drops colectivos anteriores (o insignias conmemorativas)',
          'Tokens comunitarios animados según nivel (Bronce / Plata / Oro)',
          'Porcentaje de asignación del suministro de tokens MusicaW3 en Zora',
          'Acceso anticipado a mini-apps comunitarias (herramientas AR, apps del festival)',
          'Votante MVP Diario: publicación destacada para el mejor votante del día',
          'Insignia digital conmemorativa vía Spaces y códigos canjeables',
        ],
        urgency: 'No te lo pierdas — los votantes tempranos moldean el futuro de MusicaW3',
      },
      cta: 'Collect Artifact',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('mw3-language');
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('mw3-language', newLang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
