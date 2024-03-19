<template>
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
    <UModal v-model="isOpen">
      <UCommandPalette
        ref="commandPaletteRef"
        :groups="groups"
        :autoselect="false"
        :placeholder="$t('keyboardManager.commandPalette.placeholder')"
        @update:model-value="onSelect"
      />
    </UModal>
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

const actions = [
  {
    id: 'print',
    label: t('keyboardManager.commandPalette.groups.actions.print'),
    icon: 'i-heroicons-printer',
    click: () => printPage(),
  },
];

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
      commands: actions,
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

function setLanguage(locale: LocaleObject) {
  setLocale(locale.code);
  isOpen.value = false;
}

function printPage() {
  isOpen.value = false;
  setTimeout(() => {
    window.print();
  }, 300);
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
