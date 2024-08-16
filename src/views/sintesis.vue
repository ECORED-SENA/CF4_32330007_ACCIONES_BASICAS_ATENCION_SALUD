<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama de lesiones osteomusculares que abarca fracturas, esguinces y luxaciones. Cada categoría presenta sus tipos y síntomas. Las fracturas se dividen en cerradas y abiertas, mientras que los esguinces se clasifican en grados 1, 2 y 3. Las luxaciones detallan síntomas como inflamación, dolor y pérdida de funcionalidad en la extremidad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
