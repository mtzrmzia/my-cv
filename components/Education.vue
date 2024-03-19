<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">Education</h2>
    <div class="rounded-lg bg-card text-card-foreground">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="font-semibold leading-none">EPCA University</h3>
          <span class="text-sm tabular-nums text-gray-500">2015 -2019</span>
        </div>
      </div>
      <div
        class="mt-2 font-mono text-sm text-pretty text-gray-500 dark:text-gray-400"
      >
        Degree in Computer Systems Engineering
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Education',
});
</script>
