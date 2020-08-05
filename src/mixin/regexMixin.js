export default {
  methods: {
    removeSpecialCharacters(string) {
      return string.replace(/[!@#$%^&*()_+\-=[\]{};'`:"\\|,.<>/?~]/i, '').replace(/  +/g, ' ')
      }
  }
}