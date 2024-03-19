<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">{{ $t('about.title') }}</h2>
    <p class="font-mono text-sm text-gray-500 text-pretty dark:text-gray-400">
      {{ $t('about.text') }}
    </p>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'About',
});
</script>
