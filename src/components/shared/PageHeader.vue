<template>
  <div :class="$attrs.class">
    <h1 v-if="title" class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="text-lg text-muted-foreground sm:text-xl leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
}
defineProps<Props>();
// Allows $attrs.class to be passed to the root element
defineOptions({
  inheritAttrs: false
})
</script>