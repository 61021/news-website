<script setup lang="ts">
import { appDescription } from '~/composables/rasd'

const { t } = useI18n()

const currentYear = new Date().getFullYear()

const contact = [
  {
    icon: 'i-ph-envelope-simple-duotone',
    link: 'mailto:info@rasdiq.com',
    text: 'info@rasdiq.com',
  },
]

const socials = [
  // {
  //   icon: 'i-ph-facebook-logo-duotone',
  //   link: 'https://www.facebook.com/theideaiq',
  // },
]

const links = [
  // {
  //   link: '/',
  //   text: t('header.routes.home'),
  // },
  // {
  //   link: '/contact',
  //   text: t('header.routes.contact'),
  // },
  // {
  //   link: '/about',
  //   text: t('header.routes.about'),
  // },
  // {
  //   link: '/faq',
  //   text: t('header.routes.faq'),
  // },
  // {
  //   link: '/privacy',
  //   text: t('header.routes.privacyPolicy'),
  // },
  // {
  //   link: '/terms',
  //   text: t('header.routes.termsAndConditions'),
  // },
  // {
  //   link: '/returns',
  //   text: t('header.routes.returnsPolicy'),
  // },
]
</script>

<template>
  <VFlexCol
    as="footer"
    pt="2xl:16 10"
    gap="xl:16 8"
    px="2xl:20 6"
    :class="bgColors[appColor][800]"
    mt="xl:24 12"
  >
    <div
      grid="~ xl:cols-3 gap8"
    >
      <VFlexCol :gap="8">
        <Logo
          class="w-40"
          fill-color="white"
        />

        <span
          text="white"
          v-text="appDescription"
        />
      </VFlexCol>

      <VFlexCol
        :gap="6"
        class="ps15%"
      >
        <div
          grid="~ cols-2"
          gap="y4"
          class="pe30%"
        >
          <a
            v-for="link in links"
            :key="link.link"
            :href="link.link"
            target="_blank"
            flex="~ items-center gap2"
            class="group"
          >

            <span
              class="font-500 uppercase transition-all duration-300 ease-in-out group-hover:underline"
              text="white"
              v-text="link.text"
            />

          </a>
        </div>
      </VFlexCol>
      <VFlexCol
        :gap="6"
        class="xl:justify-self-end"
      >
        <h4
          text="white 2xl"
          font-bold
          v-text="$t('footer.contact')"
        />
        <VFlexCol :gap="4">
          <a
            v-for="item in contact"
            :key="item.link"
            :href="item.link"
            target="_blank"
            flex="~ items-center gap2"
            class="group"
          >
            <i
              :class="item.icon"
              text="2xl white"
              class="transition-all duration-300 ease-in-out"
            />
            <span
              dir="ltr"
              text="white lg"
              v-text="item.text"
            />

          </a>
          <VFlexRow :gap="2">
            <a
              v-for="social in socials"
              :key="social.link"
              :href="social.link"
              target="_blank"
              class="group"
              flex
            >
              <i
                :class="social.icon"
                text="2xl white"
                class="transition-all duration-300 ease-in-out"
              />
            </a>
          </VFlexRow>
        </VFlexCol>
      </VFlexCol>
    </div>

    <VFlexRow
      items="center"
      justify="between"
      gap="2"
      class="mt-auto wfull"
      py="4"
    >
      <VFlexRow
        gap="1"
        items="center"
      >
        <i
          i-ph-copyright-duotone
          text="white"
        />

        <span
          text="sm white"
          v-text="`${$t('footer.copyright', { item: currentYear })} ل${appName}`"
        />
      </VFlexRow>
    </VFlexRow>
  </VFlexCol>
</template>
