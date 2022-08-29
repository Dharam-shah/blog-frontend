<template>
  <Form>
    <Field name="field" type="text" :rules="isRequired"/>
    <ErrorMessage name="field" />
    <Field name="select" as="select" :rules="isRequired">
        <option>Coffee</option>
        <option>Tea</option>
        <option>Coke</option>
    </Field>
    <ErrorMessage name="select" />
  </Form>
</template>
<script>
import { Field } from 'vee-validate';
import { Form } from 'vee-validate';
import { ErrorMessage } from 'vee-validate';
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return 'This is required';
    },
  },
};
</script>