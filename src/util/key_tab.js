const TabMixin = {
  created () {
    this.$store.commit('TabHidden')
  },
  destroyed () {
    this.$store.commit('TabShow')
  }
}
export default TabMixin
