<template>
  <div class="searchBox">
    <SendButton
      width="110" height="55"
      type="down" bg="secondary"
      @clicked="$emit('close')" />
    <Forms>
      <input type="text"
        placeholder="Search by tag..."
        v-model="searchTag"
        @keypress.enter="search()"
        ref="searchInput" class="inputTag"
        maxlength="15">
    </Forms>
    <SendButton
      width="110" height="55"
      type="search"
      @clicked="search" />
  </div>
</template>

<script>
import Forms from '../components/UI/Forms'
import SendButton from '../components/UI/SendButton'
import regexMixin from '../mixin/regexMixin'

export default {
  name: 'SearchBox',
  components: { Forms, SendButton },
  data() {
    return {
      searchTag: ''
    }
  },
  mixins: [regexMixin],
  methods: {
    search() {
      if(this.searchTag == '' || this.$router.currentRoute.path == `/search/${this.searchTag}`) return
      this.$router.push(`/search/${this.searchTag}`)
      this.searchContainer = false
      this.searchTag = ''
      this.$emit('close')
    },
  },
  watch: {
    searchTag() {
      this.searchTag = this.removeSpecialCharactersKeywords(this.searchTag).toLowerCase()
    }
  },
  mounted() {
    this.$refs.searchInput.focus()
  }
}
</script>

<style>
  .searchBox {
    width: 100%;
    height: 55px;
    margin: 0 auto;
    border-top: 2px solid var(--border-color);
    box-shadow: 0 -1px 6px #0007;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .searchBox .inputTag {
    margin-bottom: 0;
    height: 55px;
  }
</style>