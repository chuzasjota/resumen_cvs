<template>
  <div>
    <h1>Hi Cool template</h1>
    <p>{{ formData.basics.name }}</p>
    <p>{{ formData.basics.email }}</p>
  </div>
</template>

<script>
export default {
  name: "Cool",
  props: {
    formData: {}
  }
};
</script>
