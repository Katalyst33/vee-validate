<template>
  <div>
    <label :for="name" class="form-label">{{ label }}:</label>
    <div class="mt-1">
      <VeeField
        :name="name"
        :label="label"
        :modelValue="modelValue"
        @input="$emit('modelUpdate', $event)"
        class="form-input"
        :placeholder="placeholder"
        autocomplete="off"
        :id="name"
        v-bind="$attrs"
        :type="type"
      />
    </div>
    <VeeErrorMessage class="error-msg flex" :name="name" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.error-msg {
  @apply text-red-500 text-sm font-medium;
}
.form-input {
  @apply shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md;
}
.form-label {
  @apply text-left text-sm font-medium text-gray-700 flex;
}
</style>
