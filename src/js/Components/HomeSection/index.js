export default {
  data () {
    return {
      bodyShown: true
    }
  },
  methods: {
    toggleBody () {
      this.bodyShown = !this.bodyShown
    }
  },
  props: ['body', 'title']
}
