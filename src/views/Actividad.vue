<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Primeros auxilios y valoración de la escena.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Quién puede ser un primer respondiente?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103014.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Solo profesionales de la salud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cualquier persona capacitada o testigo del evento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo miembros de la familia.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Solo policías.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es una de las características del primer auxiliador?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103016.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No debe tener ningún deseo de ayudar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Debe estar preparado y motivado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Debe ser indiferente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Debe ser rápido pero no preciso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué acción debe tomar el primer auxiliador al llegar a la escena?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103018.png'),
          opciones: [
            { id: 'a', texto: 'Gritar por ayuda.', esCorrecta: false },
            { id: 'b', texto: 'Identificarse.', esCorrecta: true },
            { id: 'c', texto: 'Mover a todos los heridos.', esCorrecta: false },
            { id: 'd', texto: 'Esperar sin hacer nada.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué debe hacer el primer auxiliador para prevenir más riesgos?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103029.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Llamar inmediatamente a la policía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener la calma e inspeccionar el lugar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar hablar con testigos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dejar la escena lo más rápido posible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes acciones corresponde a alertar en primeros auxilios?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103014.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Realizar una evaluación primaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Llamar a emergencia y proporcionar información precisa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Vigilar la evolución del paciente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar medicación sin autorización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué se debe hacer durante la fase de examen?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103016.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar primeros auxilios sin evaluar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar una evaluación primaria y hacer preguntas clave.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar cualquier contacto con el paciente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo esperar a los profesionales de la salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué implica la acción de vigilar en el contexto de primeros auxilios?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103018.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las instrucciones previas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Observar la evolución del paciente y verificar medidas aplicadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Administrar medicamentos sin consulta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo llamar a la policía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué características debe tener el primer auxiliador?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103029.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Ser indiferente y despreocupado.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Ser solidario y respetuoso.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Ser autoritario y dominante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No necesita ninguna capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una de las acciones iniciales del primer auxiliador?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103014.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Administrar medicamentos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Identificarse y decir su nombre.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mover al paciente sin evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dejar la escena sin ayudar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué debe hacer el primer auxiliador al observar la evolución del paciente?',
          imagen: require('@/assets/componentes/pregunta-img/Grupo 1103016.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar cambios y no registrar nada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verificar medidas aplicadas y registrar datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hacer suposiciones sin evidencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo esperar a los servicios de emergencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, has superado la actividad.',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
