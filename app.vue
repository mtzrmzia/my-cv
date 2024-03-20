<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ $t('seo.title') }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <main
        class="md:p-16 mx-auto overflow-auto p-4 print:p-12 relative scroll-my-12"
      >
        <section class="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
          <Intro />
          <About />
          <WorkExperience />
          <Education />
          <Skills />
          <KeyboardManager />
        </section>
      </main>
    </Body>
  </Html>
</template>
<script setup lang="ts">
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

useSeoMeta({
  title: t('seo.title'),
  ogTitle: t('seo.title'),
  description: t('seo.description'),
  ogDescription: t('seo.description'),
});

defineOgImageComponent('CustomTemplate', {
  title: t('seo.title'),
  description: t('seo.description'),
});
</script>
