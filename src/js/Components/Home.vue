<style scoped lang="scss">
  ul {
    list-style: none;
  }
</style>
<template>
  <main>
    <ul>
      <li v-for="(section, i) of sections"
          :key="i">
        <HomeSection 
          :body="section.body"
          :title="section.title"
        />
      </li>
    </ul>
  </main>
</template>
<script>
import HomeSection from './HomeSection/index.vue';

export default {
  components: { HomeSection },
  data(){
    return {
      sections: [
        {
          body: 'Testing testing',
          title: 'A title'
        },
        {
          body: 'Another test',
          title: 'Section 2'
        }
      ]
    }
  }
}
</script>
