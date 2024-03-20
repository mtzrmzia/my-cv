<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ $t('strengths.title') }}
    </h2>
    <div v-for="strength in strengths" :key="strength.id" class="flex flex-col">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="font-semibold leading-none">{{ strength.title }}</h3>
        </div>
      </div>
      <div
        class="mt-2 font-mono text-sm text-pretty text-gray-500 dark:text-gray-400"
      >
        {{ strength.description }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Strengths',
});

const { t } = useI18n();

const strengths = computed(() => {
  return [
    {
      id: 1,
      title: t('strengths.technicalSkills.title'),
      description: t('strengths.technicalSkills.description'),
    },
    {
      id: 2,
      title: t('strengths.communicationSkills.title'),
      description: t('strengths.communicationSkills.description'),
    },
    {
      id: 3,
      title: t('strengths.entrepreneurialSpirit.title'),
      description: t('strengths.entrepreneurialSpirit.description'),
    },
    {
      id: 4,
      title: t('strengths.teamWork.title'),
      description: t('strengths.teamWork.description'),
    },
  ];
});
</script>
