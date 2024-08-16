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
          texto:
            '¿Cuál es la característica principal de una fractura de tallo verde?',
          imagen: require('@/assets/componentes/pregunta-img/p1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una fractura incompleta, característica de los niños.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El hueso se rompe en varios pedazos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Forma un ángulo respecto al eje del hueso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crea una ruptura limpia y directa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de fractura se presenta en un ángulo recto respecto al eje del hueso?',
          imagen: require('@/assets/componentes/pregunta-img/p2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fractura de tallo verde.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fractura oblicua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fractura transversal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fractura conminuta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es el principal riesgo de una fractura abierta?',
          imagen: require('@/assets/componentes/pregunta-img/p3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dolor intenso.', esCorrecta: false },
            { id: 'b', texto: 'Pérdida de funcionalidad.', esCorrecta: false },
            { id: 'c', texto: 'Hemorragia.', esCorrecta: true },
            { id: 'd', texto: 'Movimiento limitado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué debe hacerse primero al atender una herida grave?',
          imagen: require('@/assets/componentes/pregunta-img/p4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluar el tipo de herida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aplicar cremas o polvos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dejar la herida expuesta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cubrir la herida con un vendaje sucio.',
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
            '¿Qué se debe evitar al inmovilizar a una persona con posible lesión de columna cervical?',
          imagen: require('@/assets/componentes/pregunta-img/p1.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Mover a la persona.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Controlar el sangrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Llamar a una ambulancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar presión directa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de herida es causada por fricción y provoca desgarros en la piel?',
          imagen: require('@/assets/componentes/pregunta-img/p2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Incisas o cortantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contusas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Punzantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Por raspones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es el primer paso para manejar una herida leve?',
          imagen: require('@/assets/componentes/pregunta-img/p3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar cremas o polvos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Levantar la extremidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lavar las manos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Colocar un vendaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una señal de que el vendaje está demasiado apretado?',
          imagen: require('@/assets/componentes/pregunta-img/p4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La herida sigue sangrando.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La extremidad está caliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El paciente no siente dolor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La extremidad se torna fría.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de fractura requiere generalmente intervención quirúrgica debido a la rotura total del ligamento?',
          imagen: require('@/assets/componentes/pregunta-img/p1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Grado I.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Grado II.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Grado III.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Grado IV.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué debe hacerse si un hueso sobresale de la piel?',
          imagen: require('@/assets/componentes/pregunta-img/p2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tratar de colocar el hueso en su sitio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar presión alrededor de los bordes de la herida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dejar que la herida sangre libremente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Colocar un vendaje sucio sobre la herida.',
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
