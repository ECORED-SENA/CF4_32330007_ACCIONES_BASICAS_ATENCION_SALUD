<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lesiones osteomusculares
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        .row.justify-content-center.g-0
          .col-lg-5.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/3.png', alt='').w-100
          .col-lg-7
            .p-5(style="background-color: #d7f38d ").h-100
              p.mb-0 Las lesiones osteomusculares incluyen daños en los huesos, las articulaciones y los músculos. Es crucial tratarlas adecuadamente para evitar lesiones permanentes. Las principales lesiones del sistema osteomuscular son fracturas, esguinces y luxaciones.
      .col-lg-3.col-5: img(src='@/assets/curso/temas/c1.png', alt='')
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Fracturas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-7(data-aos="fade-right"): img.w-100(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .tarjeta.p-5(style="background-color: #d9e9fc ")
          p.mb-4 Una fractura es la pérdida de continuidad de un hueso, que puede romperse parcial o totalmente. Esto ocurre generalmente debido a una fuerza significativa, aunque enfermedades como la osteoporosis y la deficiencia de calcio también pueden debilitar los huesos, aumentando el riesgo de fracturas.
          .row.justify-content-end
            .col-2: img(src='@/assets/curso/temas/5.svg', alt='')
    p.mb-5(data-aos='fade-right') 
      span.azul El trauma osteomuscular puede ser potencialmente mortal si provoca hemorragias internas o externas. Las fracturas se clasifican en:
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/6.png", alt="alt")
          .crd_hover_txt--body.text-center.w-100(style="background-color: #2b63a8")
            h4.mb-3.text-white Fractura cerrada
            p.mb-0.text-white 	El hueso se fractura sin perforar la piel, por lo que no hay lesiones cutáneas.
      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/7.png", alt="alt")
          .crd_hover_txt--body.text-center.w-100(style="background-color: #eefad1")
            h4.mb-3 Fractura abierta
            p.mb-0 	El hueso fracturado perfora la piel, lesionando los tejidos blandos. El riesgo principal es la hemorragia, ya que los vasos sanguíneos pueden dañarse, lo que requiere control inmediato para evitar una descompensación mayor del paciente.
    .titulo-tres: h3 Tipos de fracturas
    p.mb-5(data-aos='fade-right') Las fracturas son lesiones comunes que pueden afectar a personas de todas las edades. Se clasifican según la naturaleza de la ruptura y su relación con el eje del hueso. A continuación, se detallan algunos de los tipos más comunes de fracturas:
    .fondo-slyder.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Fractura de tallo verde
              p Es una fractura incompleta en la que el hueso no se rompe completamente, característica de los huesos más flexibles de los niños.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/8.svg', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Fractura transversal
              p Este tipo de fractura se presenta en un ángulo recto respecto al eje del hueso, creando una ruptura limpia y directa.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/9.svg', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Fractura oblicua
              p Se distingue por una ruptura que forma un ángulo respecto al eje de la médula, lo que puede provocar una lesión menos estable y más compleja de tratar.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/10.svg', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-lg-6.mb-4.mb-md-0
              h4 Fractura conminuta
              p En esta fractura, el hueso se rompe en varios pedazos, lo que suele requerir una intervención médica más compleja y puede tener un período de recuperación prolongado.
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/11.svg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Los síntomas de una fractura son: 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/12.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13b.svg', alt='')
                .col
                  p.mb-0 Dolor.
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/14b.svg', alt='')
                .col
                  p.mb-0 Deformidad.
        .row.justify-content-center
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/15c.svg', alt='')
                .col
                  p.mb-0 Hinchazón.
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/16c.svg', alt='')
                .col
                  p.mb-0 Incapacidad para usar la extremidad.
        .row
          .col-lg-6
            .tarjeta.p-4.tarjeta-hover
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/17c.svg', alt='')
                .col
                  p.mb-0 Moretones.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Manejo inicial de las fracturas
    p.mb-5(data-aos='fade-right') El manejo inicial consiste en una adecuada inmovilización para prevenir complicaciones mayores. Las recomendaciones para un primer respondiente incluyen:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vJ0kG6734Rg?si=WoT3mJSvhGHD289W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Manejo inicial fracturas
        













</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
