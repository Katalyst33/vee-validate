<script setup lang="ts">
import Form1 from "./Form1.vue";
import Form2 from "./Form2.vue";
import MainForm from "./MainForm.vue";
import RegisterForm from "./Views/RegisterForm.vue";
import CustomRegisterForm from "./Views/CustomRegisterForm.vue";</script>

<template>
  <section class="mx-40">
    <div class="container mx-auto ">
      <h1 class=" my-10">Form components</h1>


      <div class="flex flex-col justify-center">

     <CustomRegisterForm/>


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
