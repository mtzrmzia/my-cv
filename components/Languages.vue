<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ $t('languages.title') }}
    </h2>
    <span class="inline-flex items-center gap-x-1 font-semibold leading-none">
      Inglés
      <UBadge color="gray" variant="soft"> B1</UBadge>
    </span>
    <span class="inline-flex items-center gap-x-1 font-semibold leading-none">
      Español
      <UBadge color="gray" variant="soft"> Nativo</UBadge>
    </span>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Languages',
});
</script>
