<template>
  <main
    class="md:p-16 mx-auto overflow-auto p-4 print:p-12 relative scroll-my-12"
  >
    <section class="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">Alfredo Martínez</h1>
          <p
            class="max-w-md dark:text-gray-400 text-gray-500 text-pretty font-mono text-sm"
          >
            FrontEnd Engineer focused on creating stunning digital products
          </p>
          <p
            class="max-w-md items-center text-pretty font-mono text-xs dark:text-gray-400 text-gray-500"
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
            class="flex gap-x-1 pt-1 font-mono text-sm text-gray-500 dark:text-gray-400 print:hidden"
          >
            <UButton
              to="mailto:ialfredo.mtz.rmz@gmail.com"
              color="white"
              variant="solid"
            >
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500 dark:text-gray-400"
                  name="i-ph-envelope-simple-duotone"
                />
              </template>
            </UButton>
            <UButton to="tel:+524776462056" color="white" variant="solid">
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                  class="h-5 w-5 text-gray-500 dark:text-gray-400"
                  name="i-ph-github-logo-duotone"
                />
              </template>
            </UButton>
            <UButton
              to="https://www.linkedin.com/in/alfredomtzrmz/"
              target="_blank"
              color="white"
              variant="solid"
            >
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500 dark:text-gray-400"
                  name="i-ph-linkedin-logo-duotone"
                />
              </template>
            </UButton>
            <UButton
              to="https://twitter.com/alfredo_mtzrmz"
              target="_blank"
              color="white"
              variant="solid"
            >
              <template #leading>
                <UIcon
                  class="h-5 w-5 text-gray-500 dark:text-gray-400"
                  name="i-fa6-brands-x-twitter"
                />
              </template>
            </UButton>
          </div>
          <div
            class="hidden flex-col gap-x-1 font-mono text-sm text-gray-500 dark:text-gray-400 print:flex"
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
      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">About</h2>
        <p
          class="text-pretty font-mono text-sm text-gray-500 dark:text-gray-400"
        >
          My journey as a FrontEnd Engineer has been marked by multiple
          successful transitions of products from the ground up. By leading
          teams effectively, I ensure a workspace where teams can flourish,
          adding to our collective ability to craft stunning products.
          Currently, I work mostly with TypeScript, TailwindCSS, Vue, Nuxt,
          Node.js, and Laravel. For over 7 years, I have been immersed in remote
          collaborations with companies around the globe.
        </p>
      </section>
      <section class="flex min-h-0 flex-col gap-y-3">
        <h2 class="text-xl font-bold">Work Experience</h2>
        <div class="rounded-lg bg-card">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3
                class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none"
              >
                <ULink to="https://devsalsa.com/">Devsalsa</ULink>
                <UBadge color="gray" variant="soft">Remote</UBadge>
              </h3>
              <div class="text-sm tabular-nums text-gray-500">2022 - 2024</div>
            </div>
            <h4 class="font-mono text-sm leading-none">
              Senior FrontEnd Lead Developer
            </h4>
          </div>
          <div
            class="text-pretty font-mono text-gray-500 dark:text-gray-400 mt-2 text-xs"
          >
            Led 4 developers team, migrate from webpack to vite, crafted custom
            core to ship the same code and components to all platforms,
            implemented new features. Technologies: Vue 3, TypeScript
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
<script setup lang="ts"></script>
