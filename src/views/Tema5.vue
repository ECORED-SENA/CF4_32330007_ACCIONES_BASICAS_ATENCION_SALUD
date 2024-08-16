<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Heridas
    p.mb-5(data-aos='fade-right') Una herida es la pérdida de continuidad de la piel, generalmente causada por traumatismos. Las heridas pueden clasificarse en abiertas y cerradas, dependiendo de si los tejidos subyacentes quedan expuestos. #[span.azul El manejo adecuado de las heridas es crucial para prevenir infecciones y promover una cicatrización rápida y efectiva. #[br] Los tipos de heridas son: ]
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/31.png", alt="alt")
          .crd_hover_txt--body.text-center.w-100(style="background-color: #2b63a8")
            h4.mb-3.text-white Heridas abiertas
            p.mb-0.text-white Separación de tejidos blandos, con riesgo de infección.
      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/32.png", alt="alt")
          .crd_hover_txt--body.text-center.w-100(style="background-color: #eefad1")
            h4.mb-3 Heridas cerradas
            p.mb-0 	Lesiones internas no visibles, pueden comprometer órganos y causar hemorragias graves.
    h4 La clasificación de heridas
    p.mb-5(data-aos='fade-right') Las heridas se clasifican según su naturaleza y las características de los tejidos afectados. A continuación, se presentan los tipos principales de heridas:
    .tarjetas-fondo-azul.mn
      .contenedor.p-5
        .row.justify-content-center.mb-5
          .col-lg-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.abajo.bg-white(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img.p-5.d-flex(:style="{'background-image': `url(${require('@/assets/curso/temas/f1.png')})`}")
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2
                      h5.mb-0.text-center Incisas o cortantes
                .tarjeta-slide__contenido.p-5.p-xl-5.bg-white
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2.mb-3
                      h5.mb-0 Incisas o cortantes
                  p.mb-0.text-center Producen hemorragia moderada o abundante, son superficiales y tienen bordes limpios.
          .col-lg-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.abajo.bg-white(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img.p-5.d-flex(:style="{'background-image': `url(${require('@/assets/curso/temas/f2.png')})`}")
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2
                      h5.mb-0 Contusas
                .tarjeta-slide__contenido.p-5.p-xl-5.bg-white
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2.mb-3
                      h5.mb-0 Contusas
                  p.mb-0.text-center Generalmente no sangran, tienen bordes irregulares y son causadas por golpes.
          .col-lg-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.abajo.bg-white(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img.p-5.d-flex(:style="{'background-image': `url(${require('@/assets/curso/temas/f3.png')})`}")
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2
                      h5.mb-0 Punzantes
                .tarjeta-slide__contenido.p-5.p-xl-5.bg-white
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2.mb-3
                      h5.mb-0 Punzantes
                  p.mb-0.text-center Profundas, causadas por objetos puntiagudos, pueden producir sangrado moderado y dañar tejidos profundos.
          .col-lg-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.abajo.bg-white(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img.p-5.d-flex(:style="{'background-image': `url(${require('@/assets/curso/temas/f4.png')})`}")
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2
                      h5.mb-0 Por raspones
                .tarjeta-slide__contenido.p-5.p-xl-5.bg-white.h-100
                  .d-flex.align-items-end.w-100.justify-content-center
                    .d-inline-block(style="background-color: #ffb27e").p-2.mb-3
                      h5.mb-0 Por raspones
                  p.mb-0.text-center Ocasionadas por fricción, provocan desgarros y desgaste en la piel.
    .titulo-tres: h3 Manejo de heridas leves
    p.mb-5(data-aos='fade-right') El manejo adecuado de las heridas leves es esencial para prevenir infecciones y promover una cicatrización rápida y efectiva. #[span.azul A continuación, se detallan los pasos básicos para tratar heridas leves:]   
    .fondo-slyder2.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/33.png', alt='') 
        .col-lg-8(data-aos="fade-left")
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/34.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 01
              p.text-center Lavar las manos antes de atender la herida.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/35.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 02
              p.text-center Detener la hemorragia con presión directa usando un apósito limpio.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/36.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 03
              p.text-center Detener la hemorragia con presión directa usando un apósito limpio.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/37.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 04
              p.text-center Levantar la extremidad para reducir el sangrado.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/38.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 05
              p.text-center No aplicar cremas ni polvos en la herida.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/39.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 06
              p.text-center Lavar la herida diariamente con agua, secar bien y cubrir si es necesario.
    .titulo-tres: h3 Manejo de heridas leves
    p.mb-5(data-aos='fade-right') El manejo de heridas graves requiere una atención inmediata y cuidadosa para evitar complicaciones y salvar la vida del paciente. #[span.azul Los siguientes pasos son esenciales para tratar heridas graves: ]
    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row(titulo="")
        .col-lg-9.mb-4.mb-lg-0
          h4 Paso 1
          p Evaluar el tipo de herida.
        .col-lg-2.col-4: img(src='@/assets/curso/temas/40.svg', alt='')
      .row(titulo="")
        .col-lg-2.col-4.mb-4.mb-lg-0: img(src='@/assets/curso/temas/41.svg', alt='')
        .col-lg-9
          h4 Paso 2
          p Detener la hemorragia con presión directa usando un apósito limpio.
      .row(titulo="")
        .col-lg-9.mb-4.mb-lg-0
          h4 Paso 3
          p Levantar la extremidad para reducir el sangrado.
        .col-lg-2.col-4: img(src='@/assets/curso/temas/42.svg', alt='')
      .row(titulo="")
        .col-lg-8.col-4.mb-4.mb-lg-0
          h4 Paso 4
          p Solicitar atención médica urgente.
        .col-lg-2.col-4: img(src='@/assets/curso/temas/43.svg', alt='')
      .row(titulo="")
        .col-lg-2.col-4.mb-4.mb-lg-0: img(src='@/assets/curso/temas/44.svg', alt='')
        .col-lg-9
          h4 Paso 5
          p Mantener la calma y pedir ayuda para el traslado.
      .row(titulo="")
        .col-lg-9.mb-4.mb-lg-0
          h4 Paso 6
          p Cubrir la herida y controlar la hemorragia durante el traslado.
        .col-lg-2.col-4: img(src='@/assets/curso/temas/45.svg', alt='')

</template>

<script>
export default {
  name: 'Tema5',
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
