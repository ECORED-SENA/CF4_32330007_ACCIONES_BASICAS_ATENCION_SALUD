<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-4.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/1.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 El componente de primeros auxilios está diseñada para proporcionar información esencial sobre el manejo inicial de lesiones osteomusculares y heridas. Estas lesiones, que incluyen fracturas, luxaciones y esguinces, pueden tener consecuencias graves si no se tratan adecuadamente. Por ello, es fundamental conocer los procedimientos básicos que se deben seguir para estabilizar al paciente y evitar complicaciones mayores mientras se espera la llegada de ayuda profesional.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #FFE0CB").mb-4
          p.mb-0 En la primera parte, se abordan las fracturas, tanto cerradas como abiertas, y se describen los síntomas característicos de estas lesiones, como el dolor intenso y la deformidad de la extremidad afectada. También se incluye información sobre la correcta inmovilización del paciente, una medida crucial para prevenir daños adicionales en los tejidos y vasos sanguíneos cercanos a la fractura. Además, se ofrece una clasificación de los esguinces según su gravedad y se detallan los pasos a seguir para su tratamiento inicial.
        p En la segunda parte se centra en las luxaciones, explicando cómo se producen y cuáles son sus principales síntomas. Se proporcionan instrucciones claras sobre cómo inmovilizar la articulación afectada y qué medidas deben tomarse para minimizar el dolor y las posibles complicaciones. 
          br
          br
          |Finalmente, se incluyen pautas para el manejo de diferentes tipos de heridas, tanto abiertas como cerradas, con el objetivo de controlar la hemorragia y reducir el riesgo de infecciones, asegurando así la mejor atención posible hasta que el paciente pueda recibir atención médica especializada.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/2.svg', alt='')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
