<template>
  <div>
    <div class="flex flex-col space-y-1.5">
      <div class="flex items-center justify-between gap-x-2 text-base">
        <h3
          class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none"
        >
          <ULink v-if="item.website" :to="item.website">
            {{ item.company }}
          </ULink>
          <span v-else>
            {{ item.company }}
          </span>
          <UBadge color="gray" variant="soft">
            {{ item.location }}
          </UBadge>
        </h3>
        <div class="text-sm tabular-nums text-gray-500">{{ item.time }}</div>
      </div>
      <h4 class="font-mono text-sm leading-none">
        {{ item.position }}
      </h4>
    </div>
    <div
      class="mt-2 font-mono text-xs text-gray-500 text-pretty dark:text-gray-400"
    >
      {{ item.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ExperienceItem } from '~/types/ExperienceItem.types';

defineOptions({
  name: 'WorkExperienceItem',
});

defineProps({
  item: {
    type: Object as PropType<ExperienceItem>,
    required: true,
  },
});
</script>
