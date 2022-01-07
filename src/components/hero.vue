<template>
  <adminNavbar />
  <div class="hero">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-9 content"> 
                <h2>Lorem Ipsum</h2>
                <p>Smurf AoE third-person kill screen real time stats headshot animation cancel SnD easter eggs. Mass Effect aggro Pokemon Nintendo Switch respawn BioShock speedrun Grand Theft Auto: Vice City invisible wall screen cheat AI Guitar Hero resolution. Advergame adventure game Call of Duty: Modern Warfare 2 controller animatic Survival Horror co-op lagging. A spawn GameCube NPC sprite God Mode Donkey Kong quicksave Rayman grinding.</p>
            </div>
            <div class="col-md-6 col-sm-3 img">
                <img alt="Vue logo" src="../assets/images/red-chair.png">
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'products'
}
</script>

<style lang="scss">
@import '../assets/styles/variables.scss';
@import '../assets/styles/mixins.scss';
@import '../assets/styles/fonts.scss';

.hero {
  align-items: center;
  background: url('../assets/images/hero-background.jpg');
  background-size: cover;
  color: #2c3e50;
  display: flex;
  height: 70vh;
  padding: 60px 0px;

  .content {
    align-items: center;
    align-content: center;
    color: #2c3e50;
    display: flex;
    flex-wrap: wrap;
    text-align: left;

    h2, p {
      width: 100%;
    }

  }

  .img {
    position: relative;

    img{
      height: 60vh;
      width: auto;
      text-align: center;
    }
  }

  @include media-breakpoint-down(sm) {
    .content {
      text-align: center;

      h2 { 
        text-align: center ;
      }
    }

    .img {
      display: none;
    }
    
  }

  @include breakpoint(md) {
    
  }

  @include breakpoint(lg) {
    
  }
  @include breakpoint(xl) {
    
  }
  
}

</style>
