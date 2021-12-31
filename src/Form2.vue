<template>
  <div>
    <input class="form-field" name="emails" v-model="email" />
    <span>{{ emailError }}</span>
    <input class="form-field" name="password" v-model="password" type="password" />
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
      emails: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    // Create a form context with the validation schema
    useForm({
      validationSchema: schema,
    });
    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField('emails');
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
