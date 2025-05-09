<template>
  <div
    :class="[
      'py-8 md:py-12',
      isPrimaryBackground ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground border-b'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 :class="['text-3xl md:text-4xl font-bold tracking-tight', titleClass]">
        {{ title }}
      </h1>
      <div v-if="$slots.actions" class="mt-6">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
  titleClass?: string;
  subtitleClass?: string;
  isPrimaryBackground?: boolean;
}>();
</script>
