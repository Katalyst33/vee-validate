<template>

<form @submit.prevent="submitForm">
  <section class="flex justify-center">
    <div class="w-full max-w-lg space-y-4">
      <div>
        <label class="text-left text-sm font-medium text-gray-700 flex">Full name:</label>
        <div class="mt-1">
          <input type="text" name="email" v-model="fullname"
                 class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                 placeholder="full name" autocomplete="off"/>
        </div>
        <span>{{ fullnameError }}</span>

      </div>
      <div>
        <label class="text-left text-sm font-medium text-gray-700 flex">Email:</label>
        <div class="mt-1">
          <input type="email" name="email" v-model="email"
                 class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                 placeholder="you@example.com"/>
        </div>
        <span>{{ emailError }}</span>

      </div>
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

      </div>
      <button class="m-4 bg-yellow-400 px-2 py-1 rounded-md text-sm">Submit</button>

    </div>

  </section>
</form>

</template>
<script setup>

import {useField,useForm} from 'vee-validate'
import * as yup from 'yup'
import * as Yup from "yup";

const schema = yup.object().shape({
  fullname: yup.string().required().min(8),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], "Passwords do not match"),

});

useForm({
  validationSchema: schema,
});

const { value: fullname, errorMessage: fullnameError } = useField('fullname');
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('password');


function submitForm(values){
console.log(values);


}

</script>
