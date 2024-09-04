<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Luxaciones
    p.mb-5(data-aos='fade-right') Una luxación es la separación de dos huesos de la articulación que los sostiene, causada generalmente por una fuerza que desgarra los ligamentos. Es muy dolorosa y la extremidad pierde funcionalidad. Los síntomas incluyen:
    .row.justify-content-center.mb-5
      .col-lg-6.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/14.png', alt='')
      .col-lg-6
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Inflamación.
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Prominencia ósea o depresión visible.
        .row.justify-content-center.mb-3
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Dolor moderado.
          .col-lg-6.mb-3
            .tarjeta.p-4.tarjeta-hover.h-100
              .row.justify-content-center.align-items-center
                .col-auto: img(src='@/assets/curso/temas/13.svg', alt='').mx-auto
                .col
                  p.mb-0 Pérdida de funcionalidad de la extremidad.
    .titulo-tres: h3 Manejo inicial de luxaciones
    p.mb-5(data-aos='fade-right') El primer respondiente debe: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.t-1.h-100 
          .row.justify-content-center.mb-3
            .col-5: img(src='@/assets/curso/temas/15b.svg', style="max-width: 90px", alt='').mx-auto
          p.text-center Inmovilizar la articulación afectada
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.t-1.h-100 
          .row.justify-content-center.mb-3
            .col-5: img(src='@/assets/curso/temas/16b.svg', style="max-width: 90px", alt='').mx-auto
          p.text-center Colocar al lesionado en una posición cómoda hasta su traslado, para evitar dolor.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.t-1.h-100 
          .row.justify-content-center.mb-3
            .col-5: img(src='@/assets/curso/temas/17b.svg', style="max-width: 90px", alt='').mx-auto
          p.text-center No suministrar medicamentos.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.t-1.h-100 
          .row.justify-content-center.mb-3
            .col-5: img(src='@/assets/curso/temas/18b.svg', style="max-width: 90px", alt='').mx-auto
          p.text-center No intentar colocar el hueso en su sitio.









</template>

<script>
export default {
  name: 'Tema2',
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
