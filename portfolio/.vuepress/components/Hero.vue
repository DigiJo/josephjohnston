<template>
  <h1 v-if="text" class="title" v-html="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .title {
    text-align: left;
    font-size: calc(21px + (36 - 20) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 300;
    line-height: 1.3;
    letter-spacing: 0.1rem;
    width: 800px;
    max-width: 100%;
    margin: 35vw auto 17vw auto;
  }

  @media screen and (min-width: 600px) {
    .title {
      margin: 12vw auto 7vw auto;
    }
  }

</style>
