export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      impact: 'Impact',
      accommodations: 'Accommodations',
      blog: 'Blog',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      title: 'Sustainable Growth Through Eco-Tourism',
      subtitle: 'Discover authentic Morocco while preserving our environment for future generations',
      cta: 'Explore Our Mission'
    },
    // About Section
    about: {
      title: 'About Touriver',
      description: 'Touriver is a pioneering organization dedicated to sustainable development in rural Morocco. Located on a 15,000 m² farm in Berrchid, we combine traditional Moroccan agriculture with modern eco-tourism practices. Our comprehensive approach integrates renewable energy solutions, local craft valorization, educational workshops, and authentic cultural experiences.',
      mission: 'Our Mission',
      missionText: 'To create a sustainable tourism model that empowers local communities, preserves traditional knowledge, protects the environment, and provides visitors with authentic Moroccan experiences while contributing to rural economic development.'
    },
    // Services
    services: {
      title: 'Our Services',
      sustainableTourism: {
        title: 'Sustainable Tourism',
        description: 'Eco-friendly travel experiences that respect local culture and environment'
      },
      agritourism: {
        title: 'Agritourism',
        description: 'Farm-to-table experiences connecting visitors with local agricultural practices'
      },
      renewableEnergy: {
        title: 'Renewable Energy',
        description: 'Clean energy solutions for sustainable development'
      },
      localResources: {
        title: 'Local Resources',
        description: 'Valorization of local materials and traditional crafts'
      },
      collaboration: {
        title: 'Collaboration',
        description: 'Building partnerships for community development'
      },
      innovation: {
        title: 'Innovation',
        description: 'Innovative approaches to sustainable tourism'
      },
      education: {
        title: 'Education',
        description: 'Educational programs on sustainability and environment'
      },
      localImpact: {
        title: 'Local Impact',
        description: 'Creating positive change in local communities'
      }
    },
    // Why Choose Us
    whyChooseUs: {
      title: 'Why Choose Us',
      biodiversity: {
        title: 'Rich Biodiversity',
        description: 'Experience diverse ecosystems on our 15,000 m² farm'
      },
      workshops: {
        title: 'Educational Workshops',
        description: 'Learn sustainable practices through hands-on experiences'
      },
      astronomy: {
        title: 'Astronomy Programs',
        description: 'Discover the wonders of the Moroccan night sky'
      },
      events: {
        title: 'Special Events',
        description: 'Participate in unique cultural and environmental events'
      }
    },
    // Contact
    contact: {
      title: 'Contact Us',
      address: 'Douar Alhbata, Commune Alfokra, Berrchid, Morocco',
      partnership: 'Selected by the Green Growth Accelerator Project with PNUD & DAPP'
    },
    // Common
    common: {
      learnMore: 'Learn More',
      readMore: 'Read More',
      viewAll: 'View All',
      bookNow: 'Book Now'
    }
  },
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      impact: 'Impact',
      accommodations: 'Hébergements',
      blog: 'Blog',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      title: 'Croissance Durable par l\'Éco-Tourisme',
      subtitle: 'Découvrez le Maroc authentique tout en préservant notre environnement pour les générations futures',
      cta: 'Explorer Notre Mission'
    },
    // About Section
    about: {
      title: 'À Propos de Touriver',
      description: 'Nous nous consacrons à la croissance durable grâce à l\'éco-tourisme, l\'agritourisme, les énergies renouvelables, la valorisation des ressources locales et l\'éducation. Notre mission est de créer des expériences authentiques tout en protégeant le patrimoine naturel du Maroc.',
      mission: 'Notre Mission',
      missionText: 'Promouvoir un tourisme durable qui profite aux communautés locales et préserve l\'environnement.'
    },
    // Services
    services: {
      title: 'Nos Services',
      sustainableTourism: {
        title: 'Tourisme Durable',
        description: 'Expériences de voyage écologiques respectant la culture et l\'environnement locaux'
      },
      agritourism: {
        title: 'Agritourisme',
        description: 'Expériences de la ferme à la table connectant les visiteurs aux pratiques agricoles locales'
      },
      renewableEnergy: {
        title: 'Énergie Renouvelable',
        description: 'Solutions d\'énergie propre pour le développement durable'
      },
      localResources: {
        title: 'Ressources Locales',
        description: 'Valorisation des matériaux locaux et de l\'artisanat traditionnel'
      },
      collaboration: {
        title: 'Collaboration',
        description: 'Construire des partenariats pour le développement communautaire'
      },
      innovation: {
        title: 'Innovation',
        description: 'Approches innovantes du tourisme durable'
      },
      education: {
        title: 'Éducation',
        description: 'Programmes éducatifs sur la durabilité et l\'environnement'
      },
      localImpact: {
        title: 'Impact Local',
        description: 'Créer un changement positif dans les communautés locales'
      }
    },
    // Why Choose Us
    whyChooseUs: {
      title: 'Pourquoi Nous Choisir',
      biodiversity: {
        title: 'Biodiversité Riche',
        description: 'Découvrez des écosystèmes diversifiés sur notre ferme de 15 000 m²'
      },
      workshops: {
        title: 'Ateliers Éducatifs',
        description: 'Apprenez les pratiques durables grâce à des expériences pratiques'
      },
      astronomy: {
        title: 'Programmes d\'Astronomie',
        description: 'Découvrez les merveilles du ciel nocturne marocain'
      },
      events: {
        title: 'Événements Spéciaux',
        description: 'Participez à des événements culturels et environnementaux uniques'
      }
    },
    // Contact
    contact: {
      title: 'Nous Contacter',
      address: 'Douar Alhbata, Commune Alfokra, Berrchid, Maroc',
      partnership: 'Sélectionné par le Projet d\'Accélération de la Croissance Verte avec PNUD & DAPP'
    },
    // Common
    common: {
      learnMore: 'En Savoir Plus',
      readMore: 'Lire Plus',
      viewAll: 'Voir Tout',
      bookNow: 'Réserver Maintenant'
    }
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'حول',
      services: 'الخدمات',
      impact: 'التأثير',
      accommodations: 'الإقامة',
      blog: 'المدونة',
      contact: 'اتصل بنا'
    },
    // Hero Section
    hero: {
      title: 'النمو المستدام من خلال السياحة البيئية',
      subtitle: 'اكتشف المغرب الأصيل مع الحفاظ على بيئتنا للأجيال القادمة',
      cta: 'استكشف مهمتنا'
    },
    // About Section
    about: {
      title: 'حول توريفر',
      description: 'نحن ملتزمون بالنمو المستدام من خلال السياحة البيئية والزراعية والطاقة المتجددة وتثمين الموارد المحلية والتعليم. مهمتنا هي خلق تجارب أصيلة مع حماية التراث الطبيعي للمغرب.',
      mission: 'مهمتنا',
      missionText: 'تعزيز السياحة المستدامة التي تفيد المجتمعات المحلية وتحافظ على البيئة.'
    },
    // Services
    services: {
      title: 'خدماتنا',
      sustainableTourism: {
        title: 'السياحة المستدامة',
        description: 'تجارب سفر صديقة للبيئة تحترم الثقافة والبيئة المحلية'
      },
      agritourism: {
        title: 'السياحة الزراعية',
        description: 'تجارب من المزرعة إلى المائدة تربط الزوار بالممارسات الزراعية المحلية'
      },
      renewableEnergy: {
        title: 'الطاقة المتجددة',
        description: 'حلول الطاقة النظيفة للتنمية المستدامة'
      },
      localResources: {
        title: 'الموارد المحلية',
        description: 'تثمين المواد المحلية والحرف التقليدية'
      },
      collaboration: {
        title: 'التعاون',
        description: 'بناء شراكات لتنمية المجتمع'
      },
      innovation: {
        title: 'الابتكار',
        description: 'مناهج مبتكرة للسياحة المستدامة'
      },
      education: {
        title: 'التعليم',
        description: 'برامج تعليمية حول الاستدامة والبيئة'
      },
      localImpact: {
        title: 'التأثير المحلي',
        description: 'خلق تغيير إيجابي في المجتمعات المحلية'
      }
    },
    // Why Choose Us
    whyChooseUs: {
      title: 'لماذا تختارنا',
      biodiversity: {
        title: 'تنوع بيولوجي غني',
        description: 'اكتشف النظم البيئية المتنوعة في مزرعتنا البالغة 15,000 متر مربع'
      },
      workshops: {
        title: 'ورش تعليمية',
        description: 'تعلم الممارسات المستدامة من خلال التجارب العملية'
      },
      astronomy: {
        title: 'برامج علم الفلك',
        description: 'اكتشف عجائب السماء المغربية الليلية'
      },
      events: {
        title: 'فعاليات خاصة',
        description: 'شارك في فعاليات ثقافية وبيئية فريدة'
      }
    },
    // Contact
    contact: {
      title: 'اتصل بنا',
      address: 'دوار الحباطة، جماعة الفكرة، برشيد، المغرب',
      partnership: 'مختارة من قبل مشروع مسرع النمو الأخضر مع برنامج الأمم المتحدة الإنمائي و DAPP'
    },
    // Common
    common: {
      learnMore: 'اعرف المزيد',
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض الكل',
      bookNow: 'احجز الآن'
    }
  }
};

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}
