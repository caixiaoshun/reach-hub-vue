<template>
    <PageSection title="Sample Data Preview" v-if="dataset.sampleDataPreview?.length">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card
          v-for="(sample, index) in dataset.sampleDataPreview"
          :key="index"
          class="overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-white dark:bg-slate-900"
        >
          <CardContent class="p-0">
            <div class="grid grid-cols-3">
              <div>
                <img
                  :src="sample.panUrlOrData"
                  alt="PAN Image"
                  class="w-full aspect-square object-cover"
                />
                <p class="text-center text-xs text-muted-foreground pt-2">PAN (High-res Grayscale)</p>
              </div>
              <div>
                <img
                  :src="sample.nirOrData"
                  alt="NIR Image"
                  class="w-full aspect-square object-cover"
                />
                <p class="text-center text-xs text-muted-foreground pt-2">NIR (Low-res Color)</p>
              </div>
              <div>
                <img
                  :src="sample.rgbUrlOrData"
                  alt="Sharpened RGB"
                  class="w-full aspect-square object-cover"
                />
                <p class="text-center text-xs text-muted-foreground pt-2">Sharpened RGB Output</p>
              </div>
            </div>
            <div class="px-4 pb-4 text-sm text-center text-muted-foreground">
              <span v-if="sample.caption">{{ sample.caption }}</span>
              <span v-if="sample.satellite" class="block mt-1">Satellite: <strong>{{ sample.satellite }}</strong></span>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageSection>
  </template>
  
  <script setup lang="ts">
  import PageSection from '@/components/shared/PageSection.vue';
  import type { PanSharpeningDataset } from '@/types';
  import { Card, CardContent } from '@/components/ui/card';
  
  defineProps<{
    dataset: PanSharpeningDataset;
  }>();
  </script>
  