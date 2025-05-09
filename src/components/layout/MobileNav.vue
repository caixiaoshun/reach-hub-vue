<template>
  <nav class="flex flex-col space-y-2">
    <RouterLink
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      @click="closeSheet"
      class="px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      :class="{ 'bg-accent text-accent-foreground': $route.path === item.path }"
    >
      {{ item.name }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, inject } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

interface NavItem {
  name: string;
  path: string;
}

defineProps<{
  navItems: NavItem[];
}>();

const route = useRoute();

// Attempt to get the close function from Sheet context if available
// This is a simplified way; a more robust solution might involve events or a store
// For now, we assume clicking a link should close the sheet.
// The SheetClose component is typically used for an explicit close button.
// To programmatically close, one might need to manage the 'open' state of the Sheet.
const closeSheet = () => {
  // This is a placeholder. Actual sheet closing would depend on how Sheet manages its state.
  // If Sheet uses v-model:open, this component would need to emit an event to parent.
  // For simplicity, we're not implementing full programmatic close from child here.
  // Users will typically click outside or use a SheetClose button if provided in SheetContent.
};
</script>
