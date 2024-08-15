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
            .col-2.col-lg-4: img(src='@/assets/curso/temas/13.svg', alt='')
            .col-lg-8
              p.mb-0 Inflamación
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover
          .row.justify-content-center.align-items-center
            .col-2.col-lg-4: img(src='@/assets/curso/temas/13.svg', alt='')
            .col-lg-8
              p.mb-0 Prominencia ósea o depresión visible
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.tarjeta-hover
          .row.justify-content-center.align-items-center
            .col-2.col-lg-4: img(src='@/assets/curso/temas/13.svg', alt='')
            .col-lg-8
              p.mb-0 Dolor moderado
      .col-lg-3
        .tarjeta.p-4.tarjeta-hover
          .row.justify-content-center.align-items-center
            .col-2.col-lg-4: img(src='@/assets/curso/temas/13.svg', alt='')
            .col-lg-8
              p.mb-0 Pérdida de funcionalidad de la extremidad
    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Clasificación
    p.mb-5(data-aos='fade-right') Los esguinces se clasifican según su gravedad en tres grados:


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
