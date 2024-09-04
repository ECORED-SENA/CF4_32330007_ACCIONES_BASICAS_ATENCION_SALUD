<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Esguince
    p.mb-5(data-aos='fade-right') Un esguince es una lesión de los ligamentos causada por distensión, estiramiento excesivo, torsión o rasgadura, acompañada de hematoma, inflamación y dolor. #[span.azul Los síntomas más comunes son: ]
    .row.justify-content-center.mb-3
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover
          .row.justify-content-center.align-items-center
            .col-auto: img(src='@/assets/curso/temas/13.svg', alt='')
            .col
              p.mb-0 Dolor.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover
          .row.justify-content-center.align-items-center
            .col-auto: img(src='@/assets/curso/temas/13.svg', alt='')
            .col
              p.mb-0 Hinchazón.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover
          .row.justify-content-center.align-items-center
            .col-auto: img(src='@/assets/curso/temas/13.svg', alt='')
            .col
              p.mb-0 Moretón.
      .col-lg-3
        .tarjeta.p-4.tarjeta-hover
          .row.justify-content-center.align-items-center
            .col-auto: img(src='@/assets/curso/temas/13.svg', alt='')
            .col
              p.mb-0 Movimiento limitado de la articulación.
    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Clasificación
    p.mb-5(data-aos='fade-right') Los esguinces se clasifican según su gravedad en tres grados:
    TabsC.color-acento-contenido.mb-5
      .p-4.py-md-5(titulo="Grado I" style="background-color: #eaf3fd")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Grado I
            p Distensión parcial del ligamento, sin rotura. Puede haber inflamación y dolor leve con movimientos limitados.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/14.svg', alt='')
      .p-4.py-md-5(titulo="Grado II" style="background-color: #eaf3fd")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Grado II
            p Rotura parcial o total de los ligamentos. Movimiento limitado debido a dolor intenso.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/15.svg', alt='')
      .p-4.py-md-5(titulo="Grado III" style="background-color: #eaf3fd")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Grado III
            p Rotura total del ligamento, requiere tratamiento quirúrgico. Produce dolor severo y limitación total de la extremidad.
          .col-lg-4.col-7: img(src='@/assets/curso/temas/16.svg', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Tratamiento inicial de esguinces
    p.mb-5(data-aos='fade-right') El tratamiento inicial de un esguince es crucial para reducir el dolor y la inflamación, y para prevenir complicaciones mayores. Los pasos a seguir incluyen:
    .row.justify-content-center.mb-5
      .col-lg-6.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/17.png', alt='')
      .col-lg-6
        .row.justify-content-center
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Reposo.
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Inmovilización.
        .row.justify-content-center
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Aplicación de hielo.
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Elevación de la extremidad.


</template>

<script>
export default {
  name: 'Tema3',
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
