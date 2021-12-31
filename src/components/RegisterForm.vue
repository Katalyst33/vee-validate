<template>

  <VeeForm @submit="submitForm">
    <section class="flex justify-center">
      <div class="w-full max-w-lg space-y-4">
        <div>
          <label class="form-label">Full name:</label>
          <div class="mt-1">
            <VeeField ref="root" type="text" name="name" v-model="form.name"
                   class="form-input"
                   placeholder="full name" autocomplete="off" rules="isRequired"/>
          </div>
          <VeeErrorMessage class="error-msg" name="name"/>

        </div>
        <div>
          <label class="form-label">Username:</label>
          <div class="mt-1">
            <VeeField type="text" name="username" v-model="form.username"
                   class="form-input"
                   placeholder="User name" autocomplete="off" rules="isRequired"/>
          </div>
          <VeeErrorMessage class="error-msg" name="username"/>

        </div>
        <div>
          <label class="text-left text-sm font-medium text-gray-700 flex">Email:</label>
          <div class="mt-1">
            <VeeField type="email" name="email" v-model="form.email"
                   class="form-input"
                   placeholder="you@example.com" rules="isRequired|isEmail"/>
          </div>
          <VeeErrorMessage class="error-msg" name="email"/>



        </div>
        <div>
          <label class="form-label">Password:</label>
          <div class="mt-1">
            <VeeField label="password" type="password" name="password"  v-model="form.password"
                   class="form-input"
                   placeholder="strong password"  ref="password" rules="isRequired|isMin:5"/>
          </div>
          <VeeErrorMessage class="error-msg" name="password"/>


        </div>
        <div>
          <label class="form-label">Confirm Password:</label>
          <div class="mt-1">
            <VeeField label="Confirm password" type="password" name="confirmPassword"  v-model="form.confirmPassword"
                   class="form-input"
                   placeholder="confirm_password" rules="isRequired|isConfirmed:@password"/>
          </div>
          <VeeErrorMessage class="error-msg" name="confirmPassword"/>


        </div>

      </div>

    </section>
  </VeeForm>


</template>
<script setup>



import {ref} from "vue";

const form = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}


function submitForm(values) {
  console.log(values, 'hey');


}

const root = ref(null)
function checkForm(){
  console.log(root.value);
}


</script>


<style scoped>
.error-msg {
  @apply text-red-500 text-sm font-medium;
}
.form-input{
  @apply shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md
}
.form-label{
  @apply text-left text-sm font-medium text-gray-700 flex
}
</style>
