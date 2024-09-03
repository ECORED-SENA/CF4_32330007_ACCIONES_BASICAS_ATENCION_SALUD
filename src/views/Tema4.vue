<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/19.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 Gasa sobre heridas 
              p.text-center #[br] Colocar una gasa limpia antes del vendaje para evitar infecciones y proteger la herida o quemadura.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/20.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 Vendaje de abajo hacia arriba
              p.text-center #[br] Aplicar el vendaje desde abajo hacia arriba siguiendo la dirección de las manecillas del reloj para favorecer la circulación.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/21.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 Ajuste sin limitar circulación
              p.text-center #[br] Asegurarse de ajustar el vendaje sin limitar la circulación; retirar si hay hormigueo o la extremidad se torna fría.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/22.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 Dedos destapados
              p.text-center #[br] Dejar los dedos descubiertos para verificar que la circulación sanguínea no se vea afectada.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/23.svg' alt='AvatarTop')
              .d-flex.justify-content-center
                .d-inline-block.p-2(style="background-color: #ffb27e")
                  h5.mb-0 Retirar objetos
              p.text-center #[br] Quitar anillos, relojes y otros accesorios para evitar complicaciones durante el vendaje y posible hinchazón.
    p.mb-5(data-aos='fade-right')
      span.azul Los tipos de vendaje son: 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #EEFAD1")
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2: img(src='@/assets/curso/temas/24.png', alt='')
            .col-lg-8
              h4 Venda de gasa
              p.mb-0 Rollo de algodón suave que se adapta a cualquier parte del cuerpo; usado para sujetar apósitos y controlar hemorragias.
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #EEFAD1")
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2: img(src='@/assets/curso/temas/25.png', alt='')
            .col-lg-8
              h4 Venda elástica

              p.mb-0 Material de algodón con elástico; usado para sujetar otros vendajes, cuidando de no apretar demasiado.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.p-5(style="background-color: #D7E8FC") 
          h5 Inmovilización 
          p.mb-0 Cuando se sospecha de un trauma cervical, se debe utilizar un collar cervical o improvisar la inmovilización del cuello. Mover al paciente con este tipo de lesión puede provocar daños mayores y secuelas permanentes. No intente colocar el cuello del paciente en una posición neutra si este ofrece resistencia; debe dejarlo en su posición original hasta que llegue la ayuda adecuada.
      .col-lg-6.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/26.png', alt='')
    h4 En la extremidad superior 
    p.mb-5(data-aos='fade-right') Para inmovilizar una extremidad superior, se puede utilizar un cabestrillo. Este se puede hacer con pañuelos triangulares o incluso con ropa improvisada. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-3.mb-3(style="background-color: #FFEFE4")
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2: img(src='@/assets/curso/temas/28.svg', alt='')
            .col-lg-10
              h5.mb-3 Preparar el material 
              p.mb-0 Use un pañuelo triangular o ropa
        .tarjeta.p-3.mb-3(style="background-color: #FFEFE4")
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2: img(src='@/assets/curso/temas/28.svg', alt='')
            .col-lg-10
              h5.mb-3 Colocar el cabestrillo
              p.mb-0 Coloque el pañuelo bajo el brazo lesionado y ate detrás del cuello.
        .tarjeta.p-3.mb-3(style="background-color: #FFEFE4")
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2: img(src='@/assets/curso/temas/28.svg', alt='')
            .col-lg-10
              h5.mb-3 Ajustar
              p.mb-0 Verifique que no esté apretado y el brazo esté cómodo.
        .tarjeta.p-3.mb-3(style="background-color: #FFEFE4")
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2: img(src='@/assets/curso/temas/28.svg', alt='')
            .col-lg-10
              h5.mb-3 Monitorear
              p.mb-0 Deje los dedos expuestos y ajuste si hay entumecimiento.
        .tarjeta.p-3.mb-3(style="background-color: #FFEFE4")
          .row.justify-content-center.align-items-center
            .col-2.col-lg-2: img(src='@/assets/curso/temas/28.svg', alt='')
            .col-lg-10
              h5.mb-3 Evitar movimientos
              p.mb-0 No mueva la extremidad hasta recibir atención médica.
                br
                |Verifique que no esté apretado y el brazo esté cómodo.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #EEFAD1 ")
          h4 En extremidades inferiores
          p.mb-4 Alinee la extremidad suavemente. Retire el calzado desabrochándolo o cortándolo, sin intentar hallar al inmovilizar. Si sobran espacios, rellene el hueco entre ambas piernas y fíjelas con vendas que las abracen.
          .row.justify-content-end
            .col-2: img(src='@/assets/curso/temas/29.svg', alt='')
      .col-lg-6.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/30.png', alt='')





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
