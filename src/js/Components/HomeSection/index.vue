<template>
  <section @click="toggleBody()">
    <h1 class="title">{{title}}</h1>
    <p class="body"
      v-show="bodyShown">{{body}}</p>
  </section>
</template>
<script src="./index.js"></script>
<style
  lang="scss" 
  scoped 
  src="./index.scss"></style>