<template>
  <AppLayout>
    <PageHeader v-if="dataset" :title="dataset.title"
      :breadcrumbs="[{ text: 'Datasets', to: '/datasets' }, { text: dataset.title }]" />
    <div v-else-if="!isLoading" class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <PageHeader title="Dataset Not Found"
        :breadcrumbs="[{ text: 'Datasets', to: '/datasets' }, { text: 'Not Found' }]" />
    </div>
    <div v-else class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <PageHeader title="Loading Dataset..."
        :breadcrumbs="[{ text: 'Datasets', to: '/datasets' }, { text: 'Loading...' }]" />
    </div>


    <div v-if="dataset" class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <!-- 1. Dataset Overview (Abstract/Short Description) -->
      <PageSection class="text-center mb-10 md:mb-14">
        <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {{ dataset.shortDescription || dataset.abstract }}
        </p>
      </PageSection>

      <div class="grid md:grid-cols-3 gap-x-8 lg:gap-x-12 items-start">
        <!-- Main content area (e.g., Sample Data Preview) -->
        <div class="md:col-span-2 space-y-10">
          <PageSection title="Full Description" v-if="dataset.longDescription">
            <div class="prose dark:prose-invert max-w-none text-foreground/90 leading-relaxed"
              v-html="dataset.longDescription"></div>
          </PageSection>

          <SegDatasetShow v-if="dataset.type == 'seg'" :dataset="dataset as SegDataset" />
          <PanSharpeningDatasetShow v-else-if="dataset.type == 'pan'" :dataset="dataset as PanSharpeningDataset" />
        </div>

        <!-- 2. Basic Information Panel (Sidebar on md+, stacked on sm) -->
        <div class="md:col-span-1 space-y-6 mt-10 md:mt-0">
          <Card class="bg-card text-card-foreground p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold mb-5 text-foreground border-b border-border/50 pb-3">Dataset Information
            </h3>
            <div class="space-y-4 text-sm">
              <div>
                <h4 class="font-medium text-foreground/80 mb-0.5">Source</h4>
                <a v-if="dataset.article_link" :href="dataset.article_link" target="_blank" rel="noopener noreferrer"
                  class="text-muted-foreground hover:underline">{{ dataset.article }}</a>
              </div>
              <div>
                <h4 class="font-medium text-foreground/80 mb-0.5">Year</h4>
                <p class="text-muted-foreground">{{ dataset.year }}</p>
              </div>
              <div>
                <h4 class="font-medium text-foreground/80 mb-0.5">Domain</h4>
                <p class="text-muted-foreground">{{ dataset.domain }}</p>
              </div>
              <div v-if="dataset.tags && dataset.tags.length > 0">
                <h4 class="font-medium text-foreground/80 mb-1.5">Tags</h4>
                <div class="flex flex-wrap gap-2">
                  <Badge v-for="tag in dataset.tags.slice(0, 5)" :key="tag" variant="secondary"
                    class="cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md hover:scale-105 hover:bg-primary/10 dark:hover:bg-primary/20 group border-border hover:border-primary/70"
                    :title="`View '${tag}' on Wikipedia (opens new tab)`">
                    <TagIcon
                      class="w-3.5 h-3.5 mr-1.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span @click="openWikiLink(tag)" class="group-hover:text-primary transition-colors">{{ tag }}</span>
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <!-- 3. Download Section -->
      <PageSection v-if="dataset.downloadLinks && dataset.downloadLinks.length > 0"
        class="mt-12 md:mt-16 pt-8 border-t border-border/50">
        <h3 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-foreground">Access Dataset</h3>
        <div :class="[
          'grid gap-4 md:gap-6 max-w-4xl mx-auto',
          dataset.downloadLinks.length === 1 ? 'grid-cols-1' :
            dataset.downloadLinks.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        ]">
          <Button v-for="link in dataset.downloadLinks" :key="link.url" as="a" :href="link.url" target="_blank"
            rel="noopener noreferrer" variant="default" size="lg"
            class="w-full flex items-center justify-center space-x-2.5 !py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-250 ease-in-out group focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :title="`${link.label} (opens new tab)`">
            <component :is="getIconForLink(link.icon)" class="w-5 h-5 group-hover:animate-bounce-sm shrink-0" />
            <span class="truncate">{{ link.label }}</span>
            <ExternalLinkIcon class="w-4 h-4 ml-auto opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
          </Button>
        </div>
        <p class="mt-6 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          All links open in a new tab. Please refer to the source for licensing information and usage terms.
        </p>
      </PageSection>

      <hr class="my-12 md:my-16 border-border/30 dark:border-border/15">

    </div>
    <div v-else-if="!isLoading && !dataset"
      class="text-center py-20 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center">
      <HelpCircle class="w-16 h-16 text-destructive mb-4" />
      <h2 class="text-2xl font-semibold mb-2">Dataset Not Found</h2>
      <p class="text-muted-foreground mb-6">We couldn't find the dataset you're looking for.</p>
      <RouterLink to="/datasets">
        <Button variant="outline">
          <ArrowLeft class="w-4 h-4 mr-2" />
          Back to Datasets
        </Button>
      </RouterLink>
    </div>
    <div v-else class="text-center py-20 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center">
      <!-- Basic loading text, consider a skeleton loader for better UX -->
      <svg aria-hidden="true"
        class="inline w-10 h-10 text-muted-foreground animate-spin dark:text-gray-600 fill-primary"
        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0492C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill" />
      </svg>
      <p class="text-lg text-muted-foreground mt-4">Loading dataset details...</p>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed , watch } from 'vue';
import { useRoute } from 'vue-router';
import type { SegDataset, PanSharpeningDataset, LucideIconName } from '@/types';
import { mockDatasets } from '@/data/datasets';
import { WIKIPEDIA_BASE_URL, tagToWikiMap } from '@/utils/tagMappings';

import AppLayout from '@/components/layout/AppLayout.vue';
import PageHeader from '@/components/layout/PageHeader.vue';
import PageSection from '@/components/shared/PageSection.vue';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card'; // Card might be used for info panel
import SegDatasetShow from '@/components/datasets/SegDatasetShow.vue';
import PanSharpeningDatasetShow from '@/components/datasets/PanSharpeningDatasetShow.vue';

import {
  Tag as TagIcon,
  Github,
  FileArchive,
  Link as LinkIcon,
  FileText as FileTextIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  DownloadCloud,
  ExternalLink as ExternalLinkIcon,
  Users2, CalendarDays, ArrowLeft, HelpCircle
} from 'lucide-vue-next';

const route = useRoute();
const datasetId = computed(() => route.params.id as string);
const dataset = ref<SegDataset | PanSharpeningDataset | null>(null);

const isLoading = ref(true);

const iconMap: Record<LucideIconName | 'Default', any> = {
  Github,
  FileArchive, // for zip
  Link: LinkIcon, // for external, doi
  FileText: FileTextIcon, // for paper
  Database: DatabaseIcon,
  Globe: GlobeIcon,
  ExternalLink: ExternalLinkIcon,
  // Default or fallback icon for general downloads or unspecified types
  Default: DownloadCloud,
  // Explicitly map other LucideIconName if they are used by dataset.icon
  Brain: Users2, // Example, adjust as needed for your LucideIconName type
  Satellite: DatabaseIcon,
  Leaf: GlobeIcon,
  BarChart2: DatabaseIcon,
  Atom: DatabaseIcon,
  ShieldCheck: DatabaseIcon,
  Users: Users2,
  Mail: LinkIcon,
  MapPin: GlobeIcon,
  Phone: LinkIcon,
  Linkedin: LinkIcon,
  Twitter: LinkIcon,
  Lightbulb: LinkIcon,
  Scale: LinkIcon,
  Briefcase: LinkIcon,
  Target: LinkIcon,
  HeartHandshake: LinkIcon,
  BookOpenCheck: FileTextIcon,
  Search: LinkIcon,
  FlaskConical: LinkIcon,
  HelpCircle: HelpCircle, // Added
  DownloadCloud: DownloadCloud, // Added
  Copy: LinkIcon, // Added
  ChevronRight: LinkIcon, // Added
  ArrowLeft: ArrowLeft, // Added
  Users2: Users2, // Added
  CalendarDays: CalendarDays, // Added
  UploadCloud: DownloadCloud, // Added
  Trash2: LinkIcon, // Added
  Image: LinkIcon, // Added
  Filter: LinkIcon, // Added
  Download: LinkIcon,
};

function loadDataset(id: string) {
  isLoading.value = true;
  dataset.value = mockDatasets.find(p => p.id === id) || null;
  isLoading.value = false;
}


const getIconForLink = (iconName?: LucideIconName) => {
  if (iconName && iconMap[iconName]) {
    return iconMap[iconName];
  }
  return iconMap.Default;
};


const openWikiLink = (tag: string) => {
  const wikiSlug = tagToWikiMap[tag] || tag;
  const url = `${WIKIPEDIA_BASE_URL}${encodeURIComponent(wikiSlug)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

// In script setup
onMounted(() => {
  // Simulate API call
  loadDataset(datasetId.value);
});

watch(() => route.params.id, (newId) => {
  loadDataset(datasetId.value);
});

</script>

<style scoped>
.prose :where(p):not(:where([class~="not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}

.prose :where(h3):not(:where([class~="not-prose"] *)) {
  font-size: 1.25em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

/* Custom animation for download button icon */
@keyframes bounce-sm {

  0%,
  100% {
    transform: translateY(-15%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.group-hover\:animate-bounce-sm:hover {
  animation: bounce-sm 1s infinite;
}
</style>
