<template>
  <div class="journal-list">
    <div v-for="post in journal" :key="post.title" class="post">
      <router-link tag="h1" :to="post.path" class="title">{{ post.frontmatter.title }}</router-link>
      <p>{{ post.frontmatter.excerpt }}</p>
      <h4>{{ post.frontmatter.year }} | {{ post.frontmatter.categories }}</h4>
      <img :src="post.frontmatter.thumbnail">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      journal() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/journal/') && !x.frontmatter.journal_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>

  .journal_list {
    
  }
  .title {
    cursor: pointer;
  }
  .post {
    border: 1px solid #eee;
    padding: 1rem 1rem 1rem 1rem;
    background-color: randomColor;
  }
  .post:last-of-type {
    border: 1px solid #eee;
  }
  .post h1 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
  }
  .post h1:hover {
    opacity: 0.6;
  }
  .post p {
    margin: 0 0 1rem 0;
    color: #333;
  }
    .post {
    position: relative;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5vw;
    cursor: pointer;
  }

  .img {
    height: 25vh;
  }
</style>
