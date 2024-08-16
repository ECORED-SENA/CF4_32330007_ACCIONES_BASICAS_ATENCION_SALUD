export default {
  global: {
    componenteFormativo:
      'Primeros auxilios para lesiones osteomusculares y heridas ',
    descripcionCurso:
      'Este componente aborda el manejo inicial de lesiones osteomusculares y heridas. Se detallan los tipos de fracturas, luxaciones, y esguinces, junto con sus síntomas y tratamientos. Incluye instrucciones para la inmovilización y vendajes, así como el manejo de heridas leves y graves. El objetivo es prevenir complicaciones y proporcionar primeros auxilios adecuados hasta la llegada de ayuda profesional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Primeros auxilios y evaluación de la escena',
      referencia:
        'Martín Villaoslada, O. & Arenal Laza, C. (2020). Primeros auxilios. MF0272: ( ed.). Editorial Tutor Formación.',
      tipo: 'Capítulo 1',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/125938',
    },
    {
      tema: 'Actitud del auxiliador y valoración de la escena',
      referencia:
        'Agencia Nacional de Seguridad Vial (2023). MÓDULO 1 - DEBERES PRIMER RESPONDIENTE. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/4JudaYDBcho?feature=shared',
    },
    {
      tema: '¿Qué debe hacer un primer auxiliador?',
      referencia:
        'Tejero Fernández, J. (2022). Primeros auxilios. AFDA0211: (2 ed.). IC Editorial.',
      tipo: 'Capítulo 3',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/227699',
    },
    {
      tema: 'Cinemática del trauma',
      referencia:
        'Centro Nacional Operativo en Salud. (2015). CINEMATICA DEL TRAUMA 2. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=yO_K1wqTQ6c&ab_channel=CentroNacionalOperativoenSalud',
    },
    {
      tema: 'Botiquín de primeros auxilios',
      referencia:
        'Facultad de Medicina UNAM (2018). Botiquín. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=t5S7zmerXD4&ab_channel=Prevenci%C3%B3nSalud',
    },
  ],
  glosario: [
    {
      termino: 'Escena',
      significado:
        'ambiente en el que se produjo la lesión y que se debe valorar.',
    },
    {
      termino: 'Evacuación',
      significado:
        'acción tendiente a establecer una barrera (distancia) entre una fuente de riesgo y las personas amenazadas, mediante el desplazamiento de estas.',
    },
    {
      termino: 'Explosión',
      significado:
        'liberación brusca de una gran cantidad de energía con desprendimiento de calor, luz y gases.',
    },
    {
      termino: 'Incendio',
      significado:
        'fenómeno que se presenta cuando uno o varios materiales combustibles o inflamables son consumidos de forma incontrolada por el fuego, generando pérdidas de vidas humanas, animales y bienes materiales.',
    },
    {
      termino: 'Posible',
      significado:
        'amenaza que, según el diagnóstico de sus condiciones inherentes, no ha sucedido, pero puede llegar a ocurrir.',
    },
    {
      termino: 'Primeros auxilios',
      significado:
        'son aquellas primeras medidas o cuidados adecuados que se ponen en práctica en forma provisional tan pronto se reconoce una emergencia.',
    },
    {
      termino: 'Recurso',
      significado:
        'son las personas, elementos, equipos y herramientas con los cuales se cuenta para evitar un desastre y atender correctamente la situación en peligro.',
    },
    {
      termino: 'Riesgo',
      significado:
        'probabilidad de que un objeto, sujeto, materia, sustancia o fenómeno pueda perturbar la integridad física de la persona o el medio.',
    },
    {
      termino: 'Testigo',
      significado:
        'persona que presencia o adquiere directo y verdadero conocimiento de algo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández-Villacañas Martín, M. D. (2013). Primeros auxilios: ( ed.). Macmillan Iberia, S.A.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/42972',
    },
    {
      referencia:
        'Pérez Aguilera, M. D. M. (2013). Primeros auxilios: ( ed.). Editorial CEP, S.L.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50755',
    },
    {
      referencia:
        'Seguridad del paciente. (2016). Guía curricular sobre seguridad del paciente.',
      link: '',
    },
    {
      referencia:
        'Torres Nieto, H. (2012). Manual de primeros auxilios y brigadas de emergencia: ( ed.). Fundación Universitaria del Área Andina.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/70932',
    },
    {
      referencia:
        'Urgencias y emergencias médicas tanto para el personal paramédico y médico. (2013). Evaluación de la escena por un primer respondiente.',
      link:
        'http://urgenciasyemergenciasmedicas.blogspot.com/2013/01/3-evaluacion-de-la-escena-por-un-primer.html',
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
          nombre: 'Paola Alexandra Moya',
          cargo: 'valuadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad Didáctica',
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
