<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ $t('workExperience.title') }}
    </h2>
    <WorkExperienceItem
      v-for="item in experiences"
      :key="item.company"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ExperienceItem } from '~/types/ExperienceItem.types';

defineOptions({
  name: 'WorkExperience',
});

const { t } = useI18n();

const experiences = computed((): ExperienceItem[] => {
  return [
    {
      company: 'Devsalsa',
      website: 'https://devsalsa.com/',
      location: t('common.label.remote'),
      position: 'Senior FrontEnd Lead Developer',
      time: '2022 - 2024',
      description: t('workExperience.works.devsalsa.description'),
    },
    {
      company: 'Apithy',
      website: 'https://www.apithy.com/',
      location: t('common.label.remote'),
      position: 'Senior FrontEnd Developer',
      time: '2020 - 2022',
      description: t('workExperience.works.apithy.description'),
    },
    {
      company: 'Vocces LAB',
      website: 'https://vocces.com/',
      location: t('common.label.remote'),
      position: 'FrontEnd Developer',
      time: '2020 - 2020',
      description: t('workExperience.works.vocces.description'),
    },
    {
      company: 'Freelance FullStack',
      location: t('common.label.mexico'),
      position: 'FullStack Developer',
      time: '2018 - 2020',
      description: t('workExperience.works.freelance.description'),
    },
    {
      company: 'Bicho Raro',
      location: t('common.label.mexico'),
      position: 'FrontEnd Developer',
      time: '2017 - 2018',
      description: t('workExperience.works.bicho.description'),
    },
  ];
});
</script>
