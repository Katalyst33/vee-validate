<template>
  <div>
    <input name="email" v-model="email" />
    <span>{{ emailError }}</span>
    <input name="password" v-model="password" type="password" />
    <span>{{ passwordError }}</span>
  </div>
</template>
<script>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    // Create a form context with the validation schema
    useForm({
      validationSchema: schema,
    });
    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField('password');
    return {
      email,
      emailError,
      password,
      passwordError,
    };
  },
};
</script>
