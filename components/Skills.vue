<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ $t('skills.title') }}
    </h2>
    <div class="flex flex-wrap gap-1">
      <UBadge
        v-for="(skill, index) in skills"
        :key="index"
        color="gray"
        variant="solid"
        size="sm"
      >
        {{ skill }}
      </UBadge>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Skills',
});

const skills = [
  'HTML',
  'CSS/SASS',
  'TailwindCSS',
  'JavaScript',
  'TypeScript',
  'Vue/Nuxt',
  'Webpack/Vite',
  'Cypress',
  'Jest/Vitest',
  'NodeJs',
  'PHP/Laravel',
  'Git',
  'Vercel',
];
</script>
