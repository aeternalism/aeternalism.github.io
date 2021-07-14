<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Aeternalism | Blockchain for the Metaverse',
})
</script>

<template>
  <MinimalLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div id="intro" class="hero marketing-hero is-left is-fullheight">
        <!-- Navbar partial -->
        <LandingNavigation />

        <!--Hexagon shapes-->
        <img
          class="hexagon hexagon-1 light-image-l"
          src="/images/icons/hexagons/accent.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-1 dark-image-l"
          src="/images/icons/hexagons/accent-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-2 light-image-l"
          src="/images/icons/hexagons/accent.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-2 dark-image-l"
          src="/images/icons/hexagons/accent-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-3 light-image-l"
          src="/images/icons/hexagons/green.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-3 dark-image-l"
          src="/images/icons/hexagons/green-heavy.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-4 light-image-l"
          src="/images/icons/hexagons/purple.svg"
          alt=""
        />
        <img
          class="hexagon hexagon-4 dark-image-l"
          src="/images/icons/hexagons/purple-heavy.svg"
          alt=""
        />

        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <h1 class="title is-1 is-bold">
                  Interchain needs <span>Aeternalism</span>
                </h1>
                <h6 class="subtitle is-6 pt-2 light-text">
                  Powered by Blockchain technology
                  <span class="tag is-primary is-rounded">Web 3.0</span>
                </h6>
                <div class="buttons">
                  <V-Button color="primary" bold rounded raised>
                    Get Started
                  </V-Button>
                </div>
              </div>
              <div class="column is-7">
                <img
                  class="light-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/smart-city.png"
                  alt=""
                />
                <img
                  class="dark-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/smart-city.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Feature boxes section-->
      <MarketingFeaturesIcons />

      <!--Mockup Section-->
      <MarketingMockup />

      <!--Side Features Section-->
      <MarketingSideFeatures />

      <!--Boxed CTA-->
      <MarketingCTA />

      <!-- Footer -->
      <LandingFooter />
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_variables.scss';
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_landing.scss';
@import '../scss/pages/generic/_marketing.scss';
</style>
