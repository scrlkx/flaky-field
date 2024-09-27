// @ts-check
import { defineConfig } from 'astro/config';
import i18n from '@astrolicious/i18n';

// https://astro.build/config
export default defineConfig({
  integrations: [i18n({
    namespaces: ['common', 'content'],
    defaultLocale: 'en',
    locales: ['en', 'pt']
  })]
});
