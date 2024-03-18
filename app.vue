<template>
  <main
    class="md:p-16 mx-auto overflow-auto p-4 print:p-12 relative scroll-my-12"
  >
    <section
      class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6"
    >
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">Alfredo Martínez</h1>
          <p class="max-w-md text-gray-500 text-pretty font-mono text-sm">
            FrontEnd Engineer focused on creating stunning digital products
          </p>
          <p
            class="max-w-md items-center text-pretty font-mono text-xs text-gray-500"
          >
            <ULink
              class="inline-flex gap-x-1.5 leading-none hover:underline items-center"
              to="https://maps.app.goo.gl/N4AC13tG2Z6KThFN7"
              target="_blank"
            >
              <UIcon
                class="h-4 w-4"
                name="i-heroicons-globe-americas"
                dynamic
              />
              León, Gto. México, UTC-6
            </ULink>
          </p>
          <div
            class="flex gap-x-1 pt-1 font-mono text-sm text-gray-500 print:hidden"
          >
            <UButton
              to="mailto:ialfredo.mtz.rmz@gmail.com"
              color="white"
              variant="solid"
            >
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500"
                  name="i-ph-envelope-simple-duotone"
                />
              </template>
            </UButton>
            <UButton to="tel:+524776462056" color="white" variant="solid">
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500"
                  name="i-ph-phone-duotone"
                />
              </template>
            </UButton>
            <UButton
              to="https://github.com/alfredomtzrmz"
              target="_blank"
              color="white"
              variant="solid"
            >
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500"
                  name="i-ph-github-logo-duotone"
                />
              </template>
            </UButton>
            <UButton
              to="https://github.com/alfredomtzrmz"
              target="_blank"
              color="white"
              variant="solid"
            >
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500"
                  name="i-ph-linkedin-logo-duotone"
                />
              </template>
            </UButton>
            <UButton
              to="https://github.com/alfredomtzrmz"
              target="_blank"
              color="white"
              variant="solid"
            >
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500"
                  name="i-fa6-brands-x-twitter"
                />
              </template>
            </UButton>
          </div>
          <div
            class="hidden flex-col gap-x-1 font-mono text-sm text-gray-500 print:flex"
          >
            <a href="mailto:ialfredo.mtz.rmz@gmail.com">
              <span class="underline">ialfredo.mtz.rmz@gmail.com</span> </a
            ><a href="tel:+524776462056"
              ><span class="underline">+524776462056</span></a
            >
          </div>
        </div>
        <span class="relative flex shrink-0 overflow-hidden rounded-xl size-28">
          <NuxtImg
            src="/avatar/me.jpg"
            class="aspect-square h-full w-full"
            alt="Alfredo Martínez"
          />
        </span>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts"></script>
