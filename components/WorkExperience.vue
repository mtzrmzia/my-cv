<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">Work Experience</h2>
    <WorkExperienceItem
      v-for="item in experiences"
      :key="item.company"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '~/types/ExperienceItem.types';

defineOptions({
  name: 'WorkExperience',
});

const experiences = [
  {
    company: 'Devsalsa',
    website: 'https://devsalsa.com/',
    location: 'Remote',
    position: 'Senior FrontEnd Lead Developer',
    time: '2022 - 2024',
    description:
      'Led 4 developers team, migrate from webpack to vite, crafted custom core to ship the same code and components to all platforms, implemented new features. Technologies: Vue 3, TypeScript, Pinia, Cypress, Vitest',
  },
  {
    company: 'Apithy',
    website: 'https://www.apithy.com/',
    location: 'Remote',
    position: 'Senior FrontEnd Developer',
    time: '2020 - 2022',
    description:
      'Created a multilingual E-Learning platform with payment processing, worked on improving the main website so that it works in all browsers. Technologies: Vue, Nuxt, Vuex, TailwindCSS',
  },
  {
    company: 'Vocces LAB',
    website: 'https://vocces.com/',
    location: 'Remote',
    position: 'FrontEnd Developer',
    time: '2020 - 2020',
    description:
      'Created a multilingual SaaS (articketing). Started with the boilerplate, implemented new features with mobile first approach. Technologies: Vue, JavaScript, SASS, Laravel',
  },
  {
    company: 'Freelance FullStack',
    location: 'Mexico',
    position: 'FullStack Developer',
    time: '2018 - 2020',
    description:
      "In my role as a freelancer, I facilitated small businesses' digital transition by implementing SEO-optimized websites, e-commerce, and SaaS, thereby augmenting their online market presence. Technologies: Vue, Nuxt, TailwindCSS, Laravel, PHP",
  },
  {
    company: 'Bicho Raro',
    location: 'Mexico',
    position: 'FrontEnd Developer',
    time: '2017 - 2018',
    description:
      'I have dedicated myself to the analysis and application of design principles to materialize the proposals of the UX/UI team. I have developed user interactions and managed data communication with the back-end server, to ensure an optimal user experience on the web platform. Technologies: WordPress, CSS, Laravel, PHP',
  },
  {
    company: 'Calzado Andrea',
    website: 'https://mx.andrea.com/',
    location: 'Mexico',
    position: 'QA Tester',
    time: '2016 - 2017',
    description:
      'Engaging in the role of a QA Developer, I applied proactive strategies, executing comprehensive testing during all project stages. My defined goal was to prevent bugs and solidify the quality of the software. Technologies: Software created by the company',
  },
] as ExperienceItem[];
</script>
