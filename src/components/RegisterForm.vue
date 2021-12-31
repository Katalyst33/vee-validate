<template>

  <VeeForm @submit="submitForm">
    <section class="flex justify-center">
      <div class="w-full max-w-lg space-y-4">
        <div>
          <label class="form-label">Full name:</label>
          <div class="mt-1">
            <VeeField type="text" name="name" v-model="form.name"
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
        <!--

              <div>
                <label class="flex block text-sm font-medium text-gray-700">Password:</label>
                <div class="mt-1">
                  <input type="password"  v-model="password"
                         class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                         placeholder="strong password"/>
                </div>
                <span>{{ passwordError }}</span>

              </div>
              <div>
                <label class="flex block text-sm font-medium text-gray-700">Confirm Password:</label>
                <div class="mt-1">
                  <input type="password" name="email" v-model="confirmPassword"
                         class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                         placeholder="confirm_password"/>
                </div>
                <span>{{ confirmPasswordError}}</span>

              </div>-->
        <button class="m-4 bg-yellow-400 px-2 py-1 rounded-md text-sm">Submit</button>

      </div>

    </section>
  </VeeForm>

</template>
<script setup>



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
