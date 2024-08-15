<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Inmovilizaciones y vendajes
    p.mb-5(data-aos='fade-right') El objetivo de la inmovilización y vendaje es prevenir lesiones mayores y disminuir el dolor mientras se traslada al paciente a un centro asistencial. #[span.azul Para colocar un vendaje, se deben considerar:]
    .fondo-slyder2.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/18.png', alt='') 
        .col-lg-8(data-aos="fade-left")
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
              .d-inline-block.m-auto.p-4(style="background-color: #ffb27e")
                h3.mb-0 Gasa sobre heridas
              p.text-center 

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
