<template>

  <VeeForm @submit="submitForm" @invalid-submit="onInvalidSubmit">
    <section class="flex justify-center">
      <div class="w-full max-w-lg space-y-4">

        <AppFormField v-model="form.name" name="name" placeholder="Full name" label="Name" type="text"
                      rules="isRequired"/>
        <AppFormField v-model="form.username" name="username" placeholder="User name" label="Username" type="text"
                      rules="isRequired"/>
        <AppFormField v-model="form.email" name="email" placeholder="you@example.comn" label="Email" type="email"
                      rules="isRequired|isEmail"/>
        <AppFormField v-model="form.password" name="password" placeholder="strong password" label="Password"
                      type="password" rules="isRequired|isMin:5"/>
        <AppFormField v-model="form.confirmPassword" name="confirmPassword" placeholder="confirm password"
                      label="confirm password" type="password" rules="isRequired|isConfirmed:@password"/>


        <button class="submit-btn">Submit</button>

      </div>

    </section>
  </VeeForm>


</template>
<script setup>


import {ref} from "vue";
import AppFormField from "../components/AppFormField.vue";

const form = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}


function submitForm(values) {
  console.log(values, 'hey');

  alert(JSON.stringify(values, null, 3));


}


function onInvalidSubmit() {
  console.log('form has errros ooooh');

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.classList.add("invalid");
  setTimeout(() => {
    submitBtn.classList.remove("invalid");
  }, 1000);
}


</script>


<style scoped>


.error-msg {
  @apply text-red-500 text-sm font-medium;
}

.form-input {
  @apply shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md
}

.form-label {
  @apply text-left text-sm font-medium text-gray-700 flex
}

.submit-btn {
  @apply bg-yellow-400 px-2 py-1 rounded-md text-sm w-full transition duration-200 ease-in-out
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
