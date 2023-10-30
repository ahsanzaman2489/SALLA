<template>
  <shipping-component :submitCallback="()=>$router.push(`/submit`)"
                      :backCallback="()=>$router.push(`/`)"></shipping-component>
</template>
<script setup>
</script>