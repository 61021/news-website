<script setup lang="ts">
const { t } = useI18n()

const currentYear = new Date().getFullYear()

const contact = [
  {
    icon: 'i-ph-envelope-simple-duotone',
    link: 'mailto:hi@theideaiq.com',
    text: 'hi@theideaiq.com',
  },
  {
    icon: 'i-ph-phone-duotone',
    link: 'tel:+9647711705111',
    text: '+964 783 857 7553 | +964 771 170 5111',
  },
  {
    icon: 'i-ph-map-pin-duotone',
    link: 'https://maps.google.com',
    text: t('footer.address'),
  },
]

const socials = [
  {
    icon: 'i-ph-instagram-logo-duotone',
    link: 'https://www.instagram.com/theideaiq',
  },
  {
    icon: 'i-ph-facebook-logo-duotone',
    link: 'https://www.facebook.com/theideaiq',
  },
  {
    icon: 'i-ph-linkedin-logo-duotone',
    link: 'https://www.linkedin.com/company/theideaiq',
  },
]

const links = [
  {
    link: '/',
    text: t('header.routes.home'),
  },
  {
    link: '/contact',
    text: t('header.routes.contact'),
  },
  {
    link: '/about',
    text: t('header.routes.about'),
  },
  {
    link: '/faq',
    text: t('header.routes.faq'),
  },
  {
    link: '/privacy',
    text: t('header.routes.privacyPolicy'),
  },
  {
    link: '/terms',
    text: t('header.routes.termsAndConditions'),
  },
  {
    link: '/returns',
    text: t('header.routes.returnsPolicy'),
  },
]
</script>

<template>
  <VFlexCol
    as="footer"
    pt="2xl:16"
    :gap="16"
    px="3xl:40 2xl:20"
    bg="banana"
    mt="xl:24 12"
  >
    <div
      grid="~ cols-3"
    >
      <VFlexCol :gap="8">
        <Logo
          class="max-w-20"
          color="strawberry"
        />
        <span
          text="xl "
          class="font700"
          v-text="$t('footer.slogan')"
        />
      </VFlexCol>

      <VFlexCol
        :gap="6"
        class="ps15%"
      >
        <VHover>
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
                text=" group-hover:p"
                v-text="link.text"
              />

            </a>
          </div>
        </VHover>
      </VFlexCol>
      <VFlexCol
        :gap="6"
        class="justify-self-end"
      >
        <VHover>
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
                text=" xl group-hover:p"
                class="transition-all duration-300 ease-in-out"
              />
              <span
                dir="ltr"
                v-text="item.text"
              />

            </a>
            <VHover>
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
                    text=" xl group-hover:p"
                    class="transition-all duration-300 ease-in-out"
                  />
                </a>
              </VFlexRow>
            </VHover>
          </VFlexCol>
        </VHover>
      </VFlexCol>
    </div>

    <VFlexRow
      items="center"
      justify="between"
      gap="2"
      class="mt-auto wfull"
      h="16"
    >
      <VFlexRow
        gap="1"
        items="center"
      >
        <i
          i-ph-copyright-duotone
          class="-translate-y-1px"
        />

        <span
          text="sm"
          v-text="$t('footer.copyright', { item: currentYear })"
        />
      </VFlexRow>

      <span
        text=" sm"
        font-500
      >
        {{ $t('footer.credits.heading') }} <VHover class="inline">
          <a
            href="/ "
            target="_blank"
            class="text-strayberry duration-500 hover:underline"
          >
            {{ $t('footer.credits.sub') }}
          </a>
        </VHover>
      </span>
    </VFlexRow>
  </VFlexCol>
</template>
