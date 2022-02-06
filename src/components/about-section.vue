<template>
  <div class="row about-us justify-content-center align-items-center">
      <div class="col-md-6">
        <img class="cd-logo" alt="cooldown gaming" src="../assets/images/logo-cooldown-gaming.svg">
      </div>
      <div class="col-md-6">
        <h1>Learn More About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
        <a class="btn custom-btn btn-outline-primary mr-4" href="/about">Learn more</a>
      </div>
    </div>
</template>

<script>

export default {
  name: 'about',
  components: {}
}
</script>

<style lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/mixins.scss';
@import '/src/assets/styles/fonts.scss';

.about-us {
  padding: 4rem 0 6rem;
}

</style>
