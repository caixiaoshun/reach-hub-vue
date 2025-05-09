<template>
  <PageSection title="Sample Data Preview" v-if="dataset.sampleDataPreview && dataset.sampleDataPreview.length">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card v-for="(sample, index) in dataset.sampleDataPreview" :key="index"
        class="overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white dark:bg-slate-900">
        <CardContent class="p-0">
          <div v-if="sample.type === 'image' && sample.maskUrlOrData" class="grid grid-cols-2">
            <div>
              <img :src="sample.urlOrData" alt="Input Image" class="w-full aspect-square object-cover" />
              <p class="text-center text-xs text-muted-foreground pt-2">Input Image</p>
            </div>
            <div>
              <img :src="sample.maskUrlOrData" alt="Segmentation Mask" class="w-full aspect-square object-cover" />
              <p class="text-center text-xs text-muted-foreground pt-2">Segmentation Mask</p>
            </div>
          </div>

          <div v-else-if="sample.type === 'image'" class="flex flex-col">
            <img :src="sample.urlOrData" alt="Sample Preview" class="w-full aspect-square object-cover rounded-2xl" />
            <p class="text-center text-xs text-muted-foreground pt-2">Image Preview</p>
          </div>

          <div v-else class="w-full aspect-square bg-muted flex items-center justify-center rounded-2xl">
            <p class="text-muted-foreground">Chart/Data Preview ({{ sample.type }})</p>
          </div>

          <div v-if="sample.caption" class="px-4 pb-4 text-sm text-center text-muted-foreground">
            {{ sample.caption }}
          </div>
        </CardContent>
      </Card>
    </div>

    <div v-if="dataset.legend && dataset.legend.length" class="mt-10">
      <h3 class="text-sm font-semibold mb-2 text-muted-foreground">Legend</h3>
      <div class="flex flex-wrap gap-4">
        <div v-for="(item, i) in dataset.legend" :key="i" class="flex items-center gap-2">
          <div class="w-4 h-4 rounded" :style="{ backgroundColor: item.color }"></div>
          <span class="text-sm text-muted-foreground">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">

import PageSection from '@/components/shared/PageSection.vue';
import type { SegDataset } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
defineProps<{
  dataset: SegDataset;
}>();
</script>