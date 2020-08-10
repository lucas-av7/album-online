export default {
  methods: {
    removeDoubleSpaces(string) {
      return string.replace(/  +/g, ' ')
    },
    removeSpecialCharactersKeywords(string) {
      return string.replace(/[!@#$%^&*()_+\-=[\]{};'`:"\\|,.<>/?~ ]/i, '')
    }
  }
}