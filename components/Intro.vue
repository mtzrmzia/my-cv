<template>
  <div class="flex items-center justify-between">
    <div class="flex-1 space-y-1.5">
      <h1 class="text-2xl font-bold">Alfredo Martínez</h1>
      <p
        class="max-w-md font-mono text-sm text-gray-500 text-pretty dark:text-gray-400"
      >
        {{ $t('intro.summary') }}
      </p>
      <p
        class="max-w-md items-center font-mono text-xs text-gray-500 text-pretty dark:text-gray-400"
      >
        <ULink
          class="inline-flex items-center leading-none hover:underline"
          to="https://maps.apple.com/place?q=Le%C3%B3n&ll=21.1222267%2C-101.6632405&auid=5521045738737275844&lsp=7618&address=Le%C3%B3n%2C%20Gto.%2C%20M%C3%A9xico"
          target="_blank"
        >
          <UIcon
            class="h-4 w-4 mr-1.5 print:hidden flex"
            name="ph:map-pin-duotone"
          />
          León, Gto. México, UTC-6
        </ULink>
      </p>
      <div
        class="flex print:hidden gap-x-1 pt-1 font-mono text-sm text-gray-500 dark:text-gray-400"
      >
        <UButton
          v-for="link in socialLinks"
          :key="link.id"
          :to="link.to"
          target="_blank"
          color="white"
          variant="solid"
        >
          <template #leading>
            <UIcon
              class="h-5 w-5 text-gray-500 dark:text-gray-400"
              :name="link.icon"
            />
          </template>
        </UButton>
      </div>
      <div
        class="print:flex hidden flex-col gap-x-1 font-mono text-sm text-gray-500 dark:text-gray-400"
      >
        <span class="underline">hello@alfredom.dev</span>
        <span class="underline"> +524776462056 </span>
      </div>
    </div>
    <span
      class="relative print:hidden flex shrink-0 overflow-hidden rounded-xl size-28"
    >
      <NuxtImg src="/avatar/me.jpg" alt="Alfredo Martínez" />
    </span>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Intro',
});

const socialLinks = [
  {
    id: 'email',
    icon: 'ph-envelope-simple-duotone',
    to: 'mailto:hello@alfredom.dev',
  },
  {
    id: 'phone',
    icon: 'ph-phone-duotone',
    to: 'tel:+524776462056',
  },
  {
    id: 'website',
    icon: 'ph:globe-simple-duotone',
    to: 'https://alfredom.dev',
  },
  {
    id: 'github',
    icon: 'ph-github-logo-duotone',
    to: 'https://github.com/mtzrmzia',
  },
  {
    id: 'linkedin',
    icon: 'ph-linkedin-logo-duotone',
    to: 'https://www.linkedin.com/in/mtzrmzia/',
  },
  {
    id: 'twitter',
    icon: 'fa6-brands-x-twitter',
    to: 'https://x.com/mtzrmzia',
  },
];
</script>
