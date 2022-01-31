<template>
  <router-view />
  <span v-if="isLoggedIn"> 
        <router-link to="/admin"> Admin </router-link> |
  </span>
</template>