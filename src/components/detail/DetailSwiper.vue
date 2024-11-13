<template>
    <div class="swiper" :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>

</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    boxInclude: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: ''
    }

  },
  data () {
    return {

    }
  },
  mounted () {
    new Swiper(`.${this.name}`, {
      slidesPerView: this.boxInclude,
      spaceBetween: 20,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
