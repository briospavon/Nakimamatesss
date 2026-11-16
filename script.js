/**
 * NAKIMA MATES - JAVASCRIPT PRINCIPAL
 * Control de catálogo, modal interactivo con precios mayorista y minorista,
 * sección de combos, filtros y WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // Número de WhatsApp oficial
  const WHATSAPP_NUMBER = '5493794062142';

  // Base de datos completa de productos Nakima Mates
  const matesData = [


    // ================= IMPERIALES =================
    {
      id: 'imperial-con-diseno',
      name: 'Imperial con Diseño',
      fileName: 'imperial con diseño.jpeg',
      category: 'imperial',
      badge: 'Diseño Pelota',
      prices: {
        mayorista: '$26.000',
        minorista: '$47.000'
      },
      shortDesc: 'Cuero grabado con gajos hexagonales estilo pelota de fútbol y virola cincelada de alpaca.',
      fullDesc: 'Mate imperial en cuero vacuno negro con diseño temático de pelota de fútbol grabado en relieve. Virola de alpaca cincelada a mano con guarda pampa y base de 4 patas firmes. Un modelo codiciado por los amantes del fútbol y el mate.',
      specs: {
        virola: 'Alpaca Maciza Cincelada',
        cuerpo: 'Calabaza Brasilera Gruesa',
        cuero: 'Cuero Negro Grabado Hexagonal',
        base: '4 Patas Forradas al Tono'
      }
    },
    {
      id: 'imperial-con-diseno-bolita',
      name: 'Imperial con Diseño y Bolita',
      fileName: 'imperial con diseño y bolita.jpeg',
      category: 'imperial',
      badge: 'Fútbol & Bolitas',
      prices: {
        mayorista: '$27.000',
        minorista: '$49.000'
      },
      shortDesc: 'Cuero fútbol con virola repujada y base reforzada con bolitas de alpaca maciza.',
      fullDesc: 'Edición especial del mate imperial fútbol, elevada con una base de 4 patas protegidas con zócalos cincelados y bolitas de alpaca esféricas. Virola de alpaca maciza labrada de excelente brillo.',
      specs: {
        virola: 'Alpaca Labrada a Mano',
        cuerpo: 'Calabaza Gruesa de Selección',
        cuero: 'Cuero Vacuno Grabado Pelota',
        base: 'Patas de Alpaca con Bolitas'
      }
    },
    {
      id: 'imperial-acero-blanco',
      name: 'Imperial Acero Blanco',
      fileName: 'imperial acero blanco.jpeg',
      category: 'imperial',
      badge: 'Edición White',
      prices: {
        mayorista: '$20.000',
        minorista: '$36.000'
      },
      shortDesc: 'Exclusivo cuero vacuno blanco grano fino con virola de acero cincelada en relieve.',
      fullDesc: 'Una pieza única de distinguida presencia. Forrado en cuero legítimo blanco grano fino con costuras al tono y virola de acero inoxidable grabada con motivos geométricos andinos. Modernidad y tradición en equilibrio.',
      specs: {
        virola: 'Acero Inoxidable Grabado',
        cuerpo: 'Calabaza Gruesa Importada',
        cuero: 'Cuero Vacuno Color Blanco',
        base: '4 Patas Forradas al Tono'
      }
    },
    {
      id: 'imperial-cuero-exclusivo',
      name: 'Imperial Cuero Exclusivo',
      fileName: 'imperial cuero exlasivo.jpeg',
      category: 'imperial',
      badge: 'Cuero Exótico',
      prices: {
        mayorista: '$20.000',
        minorista: '$36.000'
      },
      shortDesc: 'Cuero grabado textura exótica tipo pitón blanco y negro con virola de acero labrada.',
      fullDesc: 'Mate imperial confeccionado en cuero grabado textura exótica de alta resistencia en contraste blanco y negro. Cuenta con virola de acero inoxidable labrada con guarda griega perimetral y base clásica de 4 patas.',
      specs: {
        virola: 'Acero Inoxidable con Guarda',
        cuerpo: 'Calabaza Gruesa Seleccionada',
        cuero: 'Cuero Textura Exótica Pitón',
        base: '4 Patas de Cuero Reforzadas'
      }
    },
    {
      id: 'imperial-acero',
      name: 'Imperial Acero',
      fileName: 'imperial acero.jpeg',
      category: 'imperial',
      badge: 'Acero Inox',
      prices: {
        mayorista: '$16.000',
        minorista: '$29.000'
      },
      shortDesc: 'Calabaza seleccionada forrada en cuero vacuno con virola de acero grabada y costuras reforzadas.',
      fullDesc: 'Mate Imperial artesanal confeccionado sobre calabaza gruesa de máxima absorción y durabilidad. Forrado en cuero vacuno teñido en tono marrón rojizo con costura a la vista hecha a mano. Posee virola de acero inoxidable con delicado diseño cincelado.',
      specs: {
        virola: 'Acero Inoxidable Cincelado',
        cuerpo: 'Calabaza Brasilera Gruesa',
        cuero: 'Vacuno Seleccionado Marrón',
        base: '4 Patas Reforzadas'
      }
    },
    {
      id: 'imperial-de-acero',
      name: 'Imperial de Acero',
      fileName: 'imperial de acero.jpeg',
      category: 'imperial',
      badge: 'Acero Labrado',
      prices: {
        mayorista: '$16.000',
        minorista: '$29.000'
      },
      shortDesc: 'Virola de acero con guarda geométrica tradicional y cuero negro de primera calidad.',
      fullDesc: 'Mate Imperial con virola de acero decorada con guardas geométricas en relieve. Construido sobre calabaza gruesa de excelente porte y forrado en cuero genuino teñido en negro profundo con costuras al tono.',
      specs: {
        virola: 'Acero Inoxidable con Guarda',
        cuerpo: 'Calabaza Seleccionada',
        cuero: 'Cuero Vacuno Negro',
        base: 'Estructura Firme 4 Patas'
      }
    },
    {
      id: 'imperial-de-acero-liso',
      name: 'Imperial de Acero Liso',
      fileName: 'imperial de acero liso.jpeg',
      category: 'imperial',
      badge: 'Acero Pulido',
      prices: {
        mayorista: '$16.000',
        minorista: '$29.000'
      },
      shortDesc: 'Diseño sobrio y minimalista con virola lisa de acero inoxidable y cuero negro seleccionado.',
      fullDesc: 'Un clásico atemporal. Combina la calidez de la calabaza natural forrada en cuero vacuno negro con el brillo pulido de la virola lisa de acero inoxidable. Ideal para el uso cotidiano gracias a su fácil limpieza y resistencia.',
      specs: {
        virola: 'Acero Inoxidable Liso Espejo',
        cuerpo: 'Calabaza Brasilera Curada',
        cuero: 'Cuero Vacuno Color Negro',
        base: 'Apoyo Clásico Reforzado'
      }
    },
    {
      id: 'imperial-alpaca-liso-base-bolita',
      name: 'Imperial Alpaca Liso con Base y Bolita',
      fileName: 'imperial alpaca liso con base y bolita.jpeg',
      category: 'imperial',
      badge: 'Alpaca & Bolitas',
      prices: {
        mayorista: '$24.000',
        minorista: '$44.000'
      },
      shortDesc: 'Elegante virola lisa de alpaca maciza con base de 4 apoyos y terminación en bolitas.',
      fullDesc: 'Modelo Imperial de porte distinguido. Su virola lisa de alpaca maciza resalta el brillo natural del metal, mientras que su base incorpora patas con bolitas de alpaca soldadas que brindan una estabilidad insuperable en cualquier superficie.',
      specs: {
        virola: 'Alpaca Maciza Pulida Lisa',
        cuerpo: 'Calabaza Gruesa de Selección',
        cuero: 'Cuero Negro / Suela Premium',
        base: 'Patas de Alpaca con Bolitas'
      }
    },
    {
      id: 'imperial-animal-print-alpaca-base-bolita',
      name: 'Imperial Animal Print Alpaca Base y Bolita',
      fileName: 'imperial animal prin alpaca base y bolita.jpeg',
      category: 'imperial',
      badge: 'Diseño Exclusivo',
      prices: {
        mayorista: '$27.000',
        minorista: '$49.000'
      },
      shortDesc: 'Cuero grabado textura animal print con virola de alpaca cincelada y base con bolitas.',
      fullDesc: 'Pieza de edición especial para quienes buscan distinción absoluta. Cuero legítimo trabajado con textura animal print de alta resistencia, complementado con virola de alpaca repujada y base artesanal con bolitas esféricas.',
      specs: {
        virola: 'Alpaca Labrada a Mano',
        cuerpo: 'Calabaza Gruesa Premium',
        cuero: 'Vacuno Textura Animal Print',
        base: 'Base 4 Patas con Bolitas'
      }
    },
    {
      id: 'imperial-alpaca-repujado-base-bolita',
      name: 'Imperial de Alpaca Repujado con Base y Bolita',
      fileName: 'imperial de alpaca repujado con base y bolita.jpeg',
      category: 'imperial',
      badge: 'Alpaca Repujada',
      prices: {
        mayorista: '$27.000',
        minorista: '$49.000'
      },
      shortDesc: 'Máxima expresión de orfebrería criolla con virola labrada y base de bolitas de alpaca.',
      fullDesc: 'Una verdadera obra de arte tradicional. Cada detalle de su virola de alpaca fue cincelado a mano por orfebres expertos. La base de 4 patas cuenta con zócalo labrado y bolitas macizas que elevan la presencia del mate en cualquier ronda.',
      specs: {
        virola: 'Alpaca Repujada a Mano',
        cuerpo: 'Calabaza Importada Extra Gruesa',
        cuero: 'Cuero Suela Labrado',
        base: 'Zócalo de Alpaca y Bolitas'
      }
    },
    {
      id: 'imperiales-alpaca-premium',
      name: 'Imperiales Alpaca Premium',
      fileName: 'imperiales alpaca premium.jpeg',
      category: 'imperial',
      badge: 'Línea Premium',
      prices: {
        mayorista: '$30.000',
        minorista: '$54.000'
      },
      shortDesc: 'Cuero repujado con motivos florales, virola ancha de alpaca y base con bolitas.',
      fullDesc: 'El tope de gama de nuestra colección Imperial. Cuero vacuno cincelado artesanalmente con motivos botánicos y florales, virola ancha de alpaca maciza con guardas pampas y base de apoyo de alpaca con bolitas pulidas.',
      specs: {
        virola: 'Alpaca Cincelada Guarda Pampa',
        cuerpo: 'Calabaza Estacionada Gruesa',
        cuero: 'Cuero Repujado a Mano',
        base: 'Base Bolita en Alpaca Maciza'
      }
    },
    {
      id: 'imperial-de-acero-con-bolita',
      name: 'Imperial de Acero con Bolita',
      fileName: 'imperial de acero con bolita.jpeg',
      category: 'imperial',
      badge: 'Acero & Bolitas',
      prices: {
        mayorista: '$24.000',
        minorista: '$44.000'
      },
      shortDesc: 'Mate imperial en cuero vacuno suela con virola de acero cincelada y base con bolitas.',
      fullDesc: 'Elegante mate imperial artesanal forrado en cuero vacuno teñido en tono marrón rojizo con costura a la vista hecha a mano. Posee virola de acero inoxidable con delicado diseño cincelado y patas reforzadas con zócalos labrados y bolitas que brindan máxima firmeza y presencia en la mesa.',
      specs: {
        virola: 'Acero Inoxidable Cincelado',
        cuerpo: 'Calabaza Brasilera Gruesa',
        cuero: 'Cuero Vacuno Color Marrón Suela',
        base: 'Patas de Apoyo con Bolitas'
      }
    },

    // ================= TORPEDOS =================
    {
      id: 'torpedo-acero',
      name: 'Torpedo Acero',
      fileName: 'torpedo acero.jpeg',
      category: 'torpedo',
      badge: 'Acero Pulido',
      prices: {
        mayorista: '$16.000',
        minorista: '$29.000'
      },
      shortDesc: 'Torpedo en cuero suela castaño con virola cónica de acero inoxidable pulido espejo.',
      fullDesc: 'Clásico formato torpedo uruguayo forrado en cuero suela teñido artesanalmente en cálido tono marrón. Su virola cónica de acero inoxidable pulido a espejo brinda gran durabilidad e higiene para el uso de todos los días.',
      specs: {
        virola: 'Acero Inoxidable Pulido Espejo',
        cuerpo: 'Calabaza Torpedo Curada',
        cuero: 'Cuero Suela Castaño',
        base: 'Apoyo Clásico Torpedo 4 Vértices'
      }
    },
    {
      id: 'torpedo-de-acero',
      name: 'Torpedo de Acero',
      fileName: 'torpedo de acero.jpeg',
      category: 'torpedo',
      badge: 'Black & Acero',
      prices: {
        mayorista: '$16.000',
        minorista: '$29.000'
      },
      shortDesc: 'Torpedo en cuero vacuno negro azabache con virola cónica de acero inoxidable pulido.',
      fullDesc: 'Mate torpedo sobrio y moderno en cuero vacuno negro profundo con grano fino. Virola cónica de acero inoxidable pulido de alta duración. Diseñado para un agarre ergonómico perfecto.',
      specs: {
        virola: 'Acero Inoxidable Liso',
        cuerpo: 'Calabaza Torpedo Seleccionada',
        cuero: 'Cuero Negro Grano Fino',
        base: 'Base Torpedo 4 Vértices'
      }
    },
    {
      id: 'torpedo-animal',
      name: 'Torpedo Animal',
      fileName: 'torpedo animal.jpeg',
      category: 'torpedo',
      badge: 'Animal Print',
      prices: {
        mayorista: '$22.000',
        minorista: '$40.000'
      },
      shortDesc: 'Torpedo forrado en cuero textura leopardo con virola de bronce cincelada a mano.',
      fullDesc: 'Mate torpedo confeccionado en cuero grabado leopardo con virola de bronce macizo labrada a mano. Diseño exótico de gran presencia y tacto muy agradable.',
      specs: {
        virola: 'Bronce Macizo Cincelado',
        cuerpo: 'Calabaza Torpedo Gruesa',
        cuero: 'Cuero Textura Leopardo',
        base: 'Apoyo Torpedo Tradicional'
      }
    },
    {
      id: 'torpedo-animal-alpaca-bronce',
      name: 'Torpedo Animal Alpaca y Bronce',
      fileName: 'torpedo  animal alpaca y bronce.jpeg',
      category: 'torpedo',
      badge: 'Alpaca & Bronce',
      prices: {
        mayorista: '$22.000',
        minorista: '$40.000'
      },
      shortDesc: 'Torpedo en cuero texturado con virola bicolor combinando la pureza de la alpaca y el bronce.',
      fullDesc: 'Hermoso mate torpedo de tamaño ergonómico, cómodo para sostener en la mano durante largas cebadas. Cuero trabajado con diseño animal print y virola con combinación exclusiva de tonos alpaca y bronce pulido.',
      specs: {
        virola: 'Combinada Alpaca y Bronce',
        cuerpo: 'Calabaza Forma Torpedo Clásica',
        cuero: 'Cuero con Grabado Especial',
        base: 'Costura Reforzada en Vértice'
      }
    },
    {
      id: 'torpedo-alpaca-bronce-base-bolita',
      name: 'Torpedo de Alpaca y Bronce con Base y Bolita',
      fileName: 'torpedo de alpaca y bronce con base y bolita.jpeg',
      category: 'torpedo',
      badge: 'Bicolor & Bolita',
      prices: {
        mayorista: '$27.000',
        minorista: '$49.000'
      },
      shortDesc: 'Formato torpedo de lujo con virola mixta y patas de soporte con bolitas esféricas.',
      fullDesc: 'Una de nuestras piezas más solicitadas. El clásico torpedo tradicional pero con la practicidad de la base de 4 patas y bolitas de alpaca, eliminando la necesidad de posamates adicionales.',
      specs: {
        virola: 'Alpaca y Bronce Pulido',
        cuerpo: 'Calabaza Torpedo Brasilera',
        cuero: 'Cuero Suela Vacuno',
        base: 'Patas con Bolitas de Apoyo'
      }
    },
    {
      id: 'torpedo-bronce-alpaca-repujado-avejentado',
      name: 'Torpedo de Bronce y Alpaca Repujado Avejentado',
      fileName: 'torpedo de bronce y alpaca  repujado avegentado.jpeg',
      category: 'torpedo',
      badge: 'Estilo Vintage',
      prices: {
        mayorista: '$24.000',
        minorista: '$44.000'
      },
      shortDesc: 'Acabado avejentado en tonos bronce y alpaca con labrado rústico y cuero artesanal.',
      fullDesc: 'Para amantes de la estética rústica y colonial. Virola con pátina especial de acabado avejentado que resalta las sombras del cincelado en bronce y alpaca. Un mate con carácter e historia propia.',
      specs: {
        virola: 'Bronce & Alpaca Pátina Vintage',
        cuerpo: 'Calabaza Natural Estacionada',
        cuero: 'Cuero Envejecido Artesanal',
        base: 'Diseño Torpedo Ergonómico'
      }
    },
    {
      id: 'torpedos-de-alpaca',
      name: 'Torpedos de Alpaca',
      fileName: 'torpedos de alpaca.jpeg',
      category: 'torpedo',
      badge: 'Clásico Uruguayo',
      prices: {
        mayorista: '$18.000',
        minorista: '$33.000'
      },
      shortDesc: 'Dúo de torpedos con virola de alpaca cincelada en cuero negro y cuero suela.',
      fullDesc: 'Los auténticos mates torpedos con virola de alpaca cincelada a mano con motivos festoneados. Disponibles en tonos negro azabache y marrón suela con cuero vacuno grueso de excelente agarre.',
      specs: {
        virola: 'Alpaca Maciza Cincelada',
        cuerpo: 'Calabaza Gruesa Forma Torpedo',
        cuero: 'Cuero Vacuno de 2.5mm',
        base: 'Base Torpedo de 4 Vértices'
      }
    },
    {
      id: 'torpedos-de-bronce',
      name: 'Torpedos de Bronce',
      fileName: 'torpedos de bronce.jpeg',
      category: 'torpedo',
      badge: 'Bronce Pulido',
      prices: {
        mayorista: '$18.000',
        minorista: '$33.000'
      },
      shortDesc: 'Trío de mates torpedos con brillante virola de bronce macizo y distintos tonos de cuero.',
      fullDesc: 'La elegancia dorada del bronce macizo en la silueta torpedo tradicional. Confeccionados en cueros seleccionados: negro, marrón castaño y chocolate oscuro. Un contraste cromático cálido y distinguido.',
      specs: {
        virola: 'Bronce Macizo Pulido Dorado',
        cuerpo: 'Calabaza Brasilera Seleccionada',
        cuero: 'Cuero Vacuno Tres Tonos',
        base: 'Base Torpedo Reforzada'
      }
    },

    // ================= MODELO ROMA =================
    {
      id: 'mate-roma-alpaca-repujado',
      name: 'Mate Roma Alpaca Repujado',
      fileName: 'mate roma alpaca repujado.jpeg',
      category: 'roma',
      badge: 'Modelo Roma',
      prices: {
        mayorista: '$27.000',
        minorista: '$49.000'
      },
      shortDesc: 'Formato Roma de boca ancha y base compacta con virola de alpaca finamente cincelada.',
      fullDesc: 'El modelo Roma se caracteriza por su silueta armoniosa de boca abierta que facilita el armado y mantención de la montañita de yerba mate. Forrado en cuero seleccionado con costura punto cruz y virola de alpaca repujada.',
      specs: {
        virola: 'Alpaca Repujada Tradicional',
        cuerpo: 'Formato Roma Boca Ancha',
        cuero: 'Cuero Vacuno Legítimo',
        base: 'Apoyo Estable Compacto'
      }
    },
    {
      id: 'roma-base-bolita-alpaca-liso',
      name: 'Roma con Base y Bolita de Alpaca Liso',
      fileName: 'roma con base y bolita de alpaca liso.jpeg',
      category: 'roma',
      badge: 'Roma con Base',
      prices: {
        mayorista: '$27.000',
        minorista: '$49.000'
      },
      shortDesc: 'Silueta Roma combinada con base de 4 patas y bolitas de alpaca con virola pulida.',
      fullDesc: 'Innovación y tradición en un solo diseño: el formato Roma elevado sobre patas de alpaca con bolitas que protegen el cuero del contacto directo con mesas y superficies húmedas. Virola de alpaca pulida a espejo.',
      specs: {
        virola: 'Alpaca Lisa Terminación Espejo',
        cuerpo: 'Calabaza Curada Formato Roma',
        cuero: 'Cuero Teñido Artesanal',
        base: 'Patas de Alpaca con Bolitas'
      }
    },

    // ================= MATES CRIOLLOS =================
    {
      id: 'criollo-base-alambre',
      name: 'Criollo Base de Alambre',
      fileName: 'criollo base de alambre.jpeg',
      category: 'criollo',
      badge: 'Criollo Tradicional',
      prices: {
        mayorista: '$5.000',
        minorista: '$10.000'
      },
      shortDesc: 'Calabaza porongo natural de boca abierta con soporte reforzado de alambre acerado.',
      fullDesc: 'Auténtico mate criollo confeccionado sobre calabaza porongo natural seleccionada de paredes gruesas. Cuenta con una estructura de alambre acerado torsionado de 4 patas que mantiene el mate elevado, aireado y sumamente firme en cualquier mesa.',
      specs: {
        virola: 'Borde de Porongo Natural Pulido',
        cuerpo: 'Calabaza Porongo Seleccionada',
        cuero: 'Calabaza Natural (Sin Forrar)',
        base: 'Estructura de Alambre Acerado 4 Patas'
      }
    },
    {
      id: 'criollo-base-cuero',
      name: 'Criollo Base de Cuero',
      fileName: 'criollo base de cuero.jpeg',
      category: 'criollo',
      badge: 'Cuero con Pelo',
      prices: {
        mayorista: '$7.000',
        minorista: '$12.000'
      },
      shortDesc: 'Calabaza porongo pura con base artesanal en cuero vacuno con pelo y tiento de potro.',
      fullDesc: 'Pieza gaucha por excelencia. Mate de calabaza porongo natural montado en una base envolvente de cuero vacuno legítimo con pelo natural, cosido artesanalmente al frente con tiento de potro blanco. Brinda calidez al tacto y máxima estabilidad.',
      specs: {
        virola: 'Boca Rústica Natural Pulida',
        cuerpo: 'Porongo Grueso Estacionado',
        cuero: 'Cuero Vacuno Natural con Pelo',
        base: 'Soporte Abrazadera en Cuero con Tiento'
      }
    },
    {
      id: 'criollo-con-base-acero',
      name: 'Criollo con Base de Acero',
      fileName: 'criollo con base de acero.jpeg',
      category: 'criollo',
      badge: 'Virola y Base Acero',
      prices: {
        mayorista: '$6.000',
        minorista: '$10.000'
      },
      shortDesc: 'Porongo criollo seleccionado con virola ancha repujada y base pedestal de acero.',
      fullDesc: 'Una fusión perfecta entre la rusticidad del porongo criollo y la elegancia del metal. Virola ancha labrada con motivos ornamentales y pedestal inferior de acero inoxidable pulido para una presencia destacada.',
      specs: {
        virola: 'Acero Inoxidable Cincelado',
        cuerpo: 'Porongo Seleccionado Curado',
        cuero: 'Porongo Natural Encerado',
        base: 'Pedestal Metálico de Acero Pulido'
      }
    },
    {
      id: 'criollo-con-base-cuero',
      name: 'Criollo con Base de Cuero',
      fileName: 'criollo con base de cuero.jpeg',
      category: 'criollo',
      badge: 'Base Cuero Suela',
      prices: {
        mayorista: '$5.000',
        minorista: '$8.000'
      },
      shortDesc: 'Mate criollo de calabaza porongo natural sobre base cilíndrica de cuero suela rojizo.',
      fullDesc: 'Mate criollo de tamaño tradicional muy cómodo en mano, asentado sobre una firme base cilíndrica de cuero suela curtido al vegetal en tono rojizo que aísla la temperatura y brinda un soporte seguro.',
      specs: {
        virola: 'Borde Natural Suavizado',
        cuerpo: 'Calabaza Porongo Natural',
        cuero: 'Base Cilíndrica en Cuero Suela',
        base: 'Apoyo Plano Circular de Cuero'
      }
    },
    {
      id: 'criollo-base-acero',
      name: 'Criollo Base de Acero',
      fileName: 'criollo base de acero.jpeg',
      category: 'criollo',
      badge: 'Base Labrada',
      prices: {
        mayorista: '$5.000',
        minorista: '$8.000'
      },
      shortDesc: 'Porongo natural con boca quemada al fuego y pie esculpido en acero con pátina oscura.',
      fullDesc: 'Mate criollo tradicional con boca quemada al fuego que acentúa los tonos de la madera natural. Base de acero esculpida con relieve geométrico que aporta peso en la base para evitar vuelcos al colocar la bombilla.',
      specs: {
        virola: 'Boca Quemada al Fuego Tradicional',
        cuerpo: 'Porongo Grueso Seleccionado',
        cuero: 'Porongo Pulido Natural',
        base: 'Pie de Acero Labrado con Pátina Oscura'
      }
    },

    // ================= BOMBILLAS =================
    {
      id: 'bombilla-pico-loro',
      name: 'Bombilla Pico de Loro con Dijes',
      fileName: 'bombilla pico de loro.jpeg',
      category: 'bombillas',
      badge: 'Con Dijes',
      prices: {
        mayorista: '$2.700',
        minorista: '$5.000'
      },
      shortDesc: 'Bombilla pico de loro en acero/alpaca con dijes variados aplicados (caballo, corazón, búho).',
      fullDesc: 'Bombilla pico de loro con caño pulido y filtro de pala microperforada de excelente filtrado. Incluye variados dijes ornamentales de alpaca soldados en el caño (herradura, corazón, búho, guarda). Práctica y elegante.',
      specs: {
        virola: 'Boquilla Pico de Loro Ergonómica',
        cuerpo: 'Caño de Acero Inoxidable / Alpaca',
        cuero: 'Filtro Tipo Pala Ranurado',
        base: 'Detalles con Dijes Artesanales'
      }
    },
    {
      id: 'bombilla-pico-loro-cincelada',
      name: 'Bombilla Pico de Loro Cincelada',
      fileName: 'bombilla-pico de loro.jpeg',
      category: 'bombillas',
      badge: 'Caño Torsionado',
      prices: {
        mayorista: '$3.000',
        minorista: '$5.500'
      },
      shortDesc: 'Bombilla pico de loro con caño labrado en espiral helicoidal torsionado de alta gama.',
      fullDesc: 'Elegante bombilla pico de loro trabajada con caño helicoidal torsionado que ayuda a disipar el calor y ofrece un agarre cómodo. Filtro de cuchara microperforado de fácil limpieza y excelente tiro para cualquier yerba.',
      specs: {
        virola: 'Boquilla Anatómica Pulida',
        cuerpo: 'Caño Torsionado Helicoidal',
        cuero: 'Filtro Cuchara Microperforado',
        base: 'Terminación Pulido Espejo'
      }
    },

    // ================= MATERIA PRIMA / PORONGOS =================
    {
      id: 'porongo-imperiales-torpedos',
      name: 'Porongo Imperiales y Torpedos',
      fileName: 'porongo imperiales y torpedos.jpeg',
      category: 'insumos',
      badge: 'Solo por Mayor',
      prices: {
        mayorista: '$3.000',
        minorista: 'Solo x Mayor ($3.000)'
      },
      shortDesc: 'Calabazas porongo seleccionadas en bruto de paredes gruesas para artesanos y fabricantes.',
      fullDesc: 'Calabazas porongo naturales estacionadas, cortadas y listas para armar mates imperiales y torpedos. Paredes extra gruesas, excelente consistencia y porosidad óptima. Venta exclusiva por mayor para fabricantes y emprendedores.',
      specs: {
        virola: 'Boca Abierta para Encastre',
        cuerpo: 'Calabaza Porongo en Bruto',
        cuero: 'Materia Prima Seleccionada',
        base: 'Forma Imperial / Torpedo'
      }
    }
  ];

  // Renderizar tarjetas en el catálogo
  const catalogGrid = document.getElementById('catalogGrid');
  
  function renderCatalog(filter = 'all') {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    const filteredMates = matesData.filter(mate => {
      if (filter === 'all') return true;
      if (filter === 'imperial') return mate.category.includes('imperial');
      if (filter === 'torpedo') return mate.category.includes('torpedo');
      if (filter === 'roma') return mate.category.includes('roma');
      if (filter === 'criollo') return mate.category.includes('criollo');
      if (filter === 'combos') return mate.category.includes('combos');
      if (filter === 'bombillas') return mate.category.includes('bombillas');
      if (filter === 'insumos') return mate.category.includes('insumos');
      return true;
    });

    filteredMates.forEach(mate => {
      const card = document.createElement('article');
      card.className = 'mate-card';
      card.setAttribute('data-id', mate.id);

      card.innerHTML = `
        <div class="mate-card-image-box" onclick="openModal('${mate.id}')">
          <img src="assets/images/${encodeURIComponent(mate.fileName)}" 
               alt="${mate.name}" 
               class="mate-card-img" 
               loading="lazy">
          <span class="mate-badge">${mate.badge}</span>
        </div>
        <div class="mate-card-content">
          <h3 class="mate-card-title">${mate.name}</h3>
          
          <!-- Precios visibles en la tarjeta -->
          <div class="mate-card-prices">
            <div class="card-price-pill minorista">
              <span class="price-pill-label">Minorista:</span>
              <span class="price-pill-val">${mate.prices.minorista}</span>
            </div>
            <div class="card-price-pill mayorista">
              <span class="price-pill-label">Mayorista:</span>
              <span class="price-pill-val">${mate.prices.mayorista}</span>
            </div>
          </div>

          <p class="mate-card-summary">${mate.shortDesc}</p>
          <div class="mate-card-footer">
            <button type="button" class="btn btn-ver-mas" onclick="openModal('${mate.id}')">
              <span>Ver más</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;

      catalogGrid.appendChild(card);
    });
  }

  // Inicializar catálogo completo
  renderCatalog('all');

  // Filtros de categoría
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderCatalog(filterValue);
    });
  });

  // Función global para filtrar rápidamente por Criollos desde el banner
  window.filterByCriollos = function() {
    const criollosBtn = document.querySelector('.filter-btn[data-filter="criollo"]');
    if (criollosBtn) {
      filterButtons.forEach(b => b.classList.remove('active'));
      criollosBtn.classList.add('active');
      renderCatalog('criollo');
      const grid = document.getElementById('catalogGrid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Función global para filtrar rápidamente por Combos
  window.filterByCombos = function() {
    const combosBtn = document.querySelector('.filter-btn[data-filter="combos"]');
    if (combosBtn) {
      filterButtons.forEach(b => b.classList.remove('active'));
      combosBtn.classList.add('active');
      renderCatalog('combos');
      const grid = document.getElementById('catalogGrid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Modal logic
  const modal = document.getElementById('mateModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalPriceMinorista = document.getElementById('modalPriceMinorista');
  const modalPriceMayorista = document.getElementById('modalPriceMayorista');
  const modalDescription = document.getElementById('modalDescription');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalPedirBtn = document.getElementById('modalPedirBtn');

  window.openModal = function(mateId) {
    const mate = matesData.find(m => m.id === mateId);
    if (!mate) return;

    modalImg.src = `assets/images/${encodeURIComponent(mate.fileName)}`;
    modalImg.alt = mate.name;
    modalBadge.textContent = mate.badge;
    modalTitle.textContent = mate.name;

    // Asignar precios mayorista y minorista en la info de la derecha
    if (modalPriceMinorista) modalPriceMinorista.textContent = mate.prices.minorista;
    if (modalPriceMayorista) modalPriceMayorista.textContent = mate.prices.mayorista;

    modalDescription.textContent = mate.fullDesc;

    // Renderizar especificaciones técnicas
    modalSpecs.innerHTML = `
      <div class="spec-item">
        <span class="spec-label">Virola</span>
        <span class="spec-val">${mate.specs.virola}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Cuerpo</span>
        <span class="spec-val">${mate.specs.cuerpo}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Cuero</span>
        <span class="spec-val">${mate.specs.cuero}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Base / Detalles</span>
        <span class="spec-val">${mate.specs.base}</span>
      </div>
    `;

    // Configurar enlace de WhatsApp para pedir este producto específico
    let message = '';
    if (mate.id === 'combo-emprendedor') {
      message = `¡Hola! Vengo de la página web de Nakima Mates. Me interesa pedir el *Combo Emprendedor* ($120.000). ¿Tienen stock disponible para coordinar pago y envío? ¡Muchas gracias!`;
    } else if (mate.id === 'porongo-imperiales-torpedos') {
      message = `¡Hola! Vengo de la página web de Nakima Mates. Me interesa consultar por *Porongo Imperiales y Torpedos* al por mayor ($3.000 c/u). ¿Cuál es la cantidad mínima de compra? ¡Muchas gracias!`;
    } else {
      message = `¡Hola! Vengo de la página web de Nakima Mates. Me interesa consultar/pedir el producto: *${mate.name}*\n- Precio Minorista: ${mate.prices.minorista}\n- Precio Mayorista: ${mate.prices.mayorista}\n¿Tienen stock disponible? ¡Muchas gracias!`;
    }

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    modalPedirBtn.href = waUrl;

    // Abrir modal con animación
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
  };

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic en el backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Navbar sticky / scrolled effect
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // Highlight del botón activo en el Navbar según la sección visible
  const sections = document.querySelectorAll('section[id]');
  const navBtns = document.querySelectorAll('.nav-btn');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navBtns.forEach(btn => {
          btn.classList.remove('active');
          if (btn.getAttribute('href') === `#${sectionId}`) {
            btn.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // Toggle de navegación móvil
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('active');
      });
    });
  }

  // Actualizar año actual en el footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
