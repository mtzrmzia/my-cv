<template>
  <div>
    <div
      class="fixed right-0 bottom-0 left-0 hidden print:hidden border-t border-t-gray-200 bg-gray-50 p-1 text-center dark:border-t-gray-700 dark:bg-gray-800 lg:block"
    >
      <Translation
        class="text-sm text-gray-500 dark:text-gray-400"
        keypath="keyboardManager.text"
        tag="p"
        scope="global"
      >
        <UKbd>{{ metaSymbol }}K</UKbd>
      </Translation>
    </div>
    <UModal v-model="isOpen" :ui="modalUi">
      <UCommandPalette
        ref="commandPaletteRef"
        :groups="groups"
        :autoselect="false"
        :placeholder="$t('keyboardManager.commandPalette.placeholder')"
        :autofocus="false"
        @update:model-value="onSelect"
      />
    </UModal>
    <UButton
      color="white"
      variant="solid"
      size="lg"
      class="fixed right-4 bottom-4 flex lg:hidden rounded-full print:hidden"
      @click="onOpenCommandPalette"
    >
      <template #leading>
        <UIcon
          class="h-5 w-5 text-gray-500 dark:text-gray-400"
          name="i-ph-command-duotone"
        />
      </template>
    </UButton>
  </div>
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';
import { Translation } from 'vue-i18n';

defineOptions({
  name: 'KeyboardManager',
});

const { metaSymbol } = useShortcuts();
const { locales, setLocale, t } = useI18n();

const commandPaletteRef = ref();
const isOpen = ref(false);

const modalUi = {
  container: 'flex min-h-full items-center justify-center text-center',
};

const languages = locales.value.map((locale: LocaleObject) => ({
  id: locale.code,
  label: locale.name,
  icon: 'i-heroicons-language-20-solid',
  click: () => setLanguage(locale),
}));

const groups = computed(() => {
  return [
    {
      key: 'actions',
      label: t('keyboardManager.commandPalette.groups.actions.title'),
      commands: [
        {
          id: 'print',
          label: t('keyboardManager.commandPalette.groups.actions.print'),
          icon: 'i-heroicons-printer',
          click: () => printPage(),
        },
      ],
    },
    {
      key: 'languages',
      label: t('keyboardManager.commandPalette.groups.language.title'),
      commands: languages,
    },
  ];
});

function onSelect(option: any) {
  option.click();
}

function printPage() {
  isOpen.value = false;
  setTimeout(() => {
    window.print();
  }, 300);
}

function setLanguage(locale: LocaleObject) {
  setLocale(locale.code);
  isOpen.value = false;
}

function onOpenCommandPalette() {
  isOpen.value = true;
}

defineShortcuts({
  meta_k: {
    handler: () => {
      isOpen.value = true;
    },
  },
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => {
      isOpen.value = false;
    },
  },
});
</script>
