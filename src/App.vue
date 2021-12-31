<script setup lang="ts">
import CustomForm from "./Views/CustomForm.vue";
import RegisterFormComponentStyle from "./Views/RegisterFormComponentStyle.vue";
</script>

<template>
  <section class="mx-40">
    <div class="container mx-auto">
      <h1 class="my-10">Form components</h1>

      <div class="flex flex-col justify-center">
        <RegisterFormComponentStyle />

        <CustomForm />
      </div>
    </div>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
