export default {
  global: {
    componenteFormativo:
      'Primeros auxilios para lesiones osteomusculares y heridas ',
    descripcionCurso:
      'Este componente aborda el manejo inicial de lesiones osteomusculares y heridas. Se detallan los tipos de fracturas, luxaciones, y esguinces, junto con sus síntomas y tratamientos. Incluye instrucciones para la inmovilización y vendajes, así como el manejo de heridas leves y graves. El objetivo es prevenir complicaciones y proporcionar primeros auxilios adecuados hasta la llegada de ayuda profesional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal2.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Lesiones osteomusculares',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fracturas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo inicial de las fracturas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Luxaciones ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Esguince ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clasificación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tratamiento inicial de esguinces',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inmovilizaciones y vendajes ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Heridas ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/32330007_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Lesiones osteomusculares',
      referencia:
        'Grupo Empresas ASYSTE (2014). Primeros auxilios, Lesiones Osteomusculares. Capitulo 3. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=pZIG94etYk0&ab_channel=GrupoEmpresasASYSTE',
    },
    {
      tema: 'Fracturas',
      referencia:
        'FisioOnline (2020). Tipos de FRACTURAS de hueso y su tratamiento y recuperación. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/uc421PwTEX8?si=g9oScsEb5wMAgog7',
    },
    {
      tema: 'Luxaciones',
      referencia:
        'Clínica Alemana (2019). ¿Qué hacer en caso de luxación, esguince o fractura? | Clínica Alemana. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/IxFpbOI971Q?si=MfC5dcxQfhOijrW4',
    },
    {
      tema: 'Esguince',
      referencia:
        'Fisioterapia a tu alcance (2021). Como saber si un ESGUINCE de tobillo es GRAVE.  [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/0rmpRcDV208?si=a0qcNIQHbEFj7UqO',
    },
    {
      tema: 'Inmovilizaciones y vendajes',
      referencia:
        'CANAL PRIMEROSAUXILIOS (2014). Primeros Auxilios – Inmovilizaciones.  [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ePM5DG4M-mQ&ab_channel=CANALPRIMEROSAUXILIOS',
    },
    {
      tema: 'Heridas',
      referencia:
        'CANAL PRIMEROSAUXILIOS. (2014). Primeros Auxilios – Heridas. [Archivo de video] YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/MPeG0HYzcX0?si=i4vktroKHViDI3or',
    },
  ],
  glosario: [
    {
      termino: 'Cabestrillo',
      significado:
        'vendaje que pasa por el cuello y cae sobre el pecho para sostener el antebrazo o la mano afectada.',
    },
    {
      termino: 'Contusión',
      significado:
        'tipo de lesión física no penetrante sobre un cuerpo humano.',
    },
    {
      termino: 'Edema',
      significado:
        'acumulación anormal de líquido en los espacios intersticiales de los tejidos.',
    },
    {
      termino: 'Flexión',
      significado:
        'movimiento de algunas articulaciones que disminuye el ángulo entre huesos articulados.',
    },
    {
      termino: 'Fractura',
      significado:
        'rotura de un hueso ocasionada por la aplicación de una fuerza violenta sobre el cuerpo; interrupción de la continuidad del tejido óseo.',
    },
    {
      termino: 'Fractura de tallo verde',
      significado:
        'fractura incompleta, el hueso no se rompe completamente. Esta fractura se da en niños.',
    },
    {
      termino: 'Hematoma',
      significado:
        'acumulación de sangre atrapada en los tejidos de la piel o de un órgano.',
    },
  ],
  referencias: [
    {
      referencia: 'Creusport.com. (2016). Esguince 2 grado.',
    },
    {
      referencia:
        'Damedeporte.wordpress. (2016). Esguince de tobillo en corredores: definición y tratamiento.',
      link:
        'https://damedeporte.wordpress.com/2013/11/29/esguince-de-tobillo-en-corredores-definicion-y-tratamiento/',
    },
    {
      referencia: 'Guía infantil. (2016). Las heridas y cortes en los niños.',
      link:
        'https://www.guiainfantil.com/articulos/salud/heridas/las-heridas-y-cortes-en-los-ninos/',
    },
    {
      referencia: 'Guía tu cuerpo. (2016). Tipos de fracturas.',
      link: 'http://www.guiatucuerpo.com/tipos-fracturas/',
    },
    {
      referencia: 'Nevasport.com. (2016). Esguince 1 grado.',
      link:
        'http://www.nevasport.com/phorum/read.php?3,3143000,3143101,quote=1',
    },
    {
      referencia:
        'Preliminar (2016). PRIMEROS AUXILIOS (Vendaje y inmovilización)',
      link:
        'http://premilitar-primeros-auxilios-vi.blogspot.com.co/2012/03/primeros-auxilios-vendaje-y.html',
    },
    {
      referencia: 'Tiposde. (2016). Tipos de heridas.',
      link: 'http://tiposde.info/tipos-de-heridas/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz María Cardona Correa',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra ',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
