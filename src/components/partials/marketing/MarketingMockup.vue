<template>
  <div id="architecture" class="section has-bg-dots">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered">
        <h2 class="title is-2">Architecture</h2>
      </div>

      <div class="centered-mockup-wrapper">
        <div class="mockup-container mb-6">
          <!--Hexagon shapes-->
          <img
            class="hexagon hexagon-1 light-image-l"
            src="/images/icons/hexagons/green.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-1 dark-image-l"
            src="/images/icons/hexagons/green-heavy.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-2 light-image-l"
            src="/images/icons/hexagons/orange.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-2 dark-image-l"
            src="/images/icons/hexagons/orange-heavy.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-3 light-image-l"
            src="/images/icons/hexagons/accent.svg"
            alt=""
          />
          <img
            class="hexagon hexagon-3 dark-image-l"
            src="/images/icons/hexagons/accent-heavy.svg"
            alt=""
          />

          <!--Mockup-->
          <img
            class="globe light-image-l centered-mockup"
            src="/@src/assets/illustrations/landing/technology.png"
            alt=""
          />
          <img
            class="globe dark-image-l centered-mockup"
            src="/@src/assets/illustrations/landing/technology.png"
            alt=""
          />
        </div>
        <div class="columns">
          <div class="column is-4">
            <h3 class="title is-4">BFT consensus</h3>
            <p class="subtitle is-6 light-text">
              A modern Byzantine fault tolerance algorithm that employs a
              peer-to-peer gossip protocol between nodes.
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">Smart contracts</h3>
            <p class="subtitle is-6 light-text">
              With CosmWasm, create your own smart contracts without concern for
              security.
            </p>
          </div>
          <div class="column is-4">
            <h3 class="title is-4">Modern tech stack</h3>
            <p class="subtitle is-6 light-text">
              The modern tech stack can help your product succeed by making it
              easier to build and evolve.
            </p>
          </div>
        </div>
      </div>

      <!--Stacks-->
      <div class="stacks">
        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/cryptocurrencies/atom.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Cosmos',
                subtitle: 'PoS blockchain',
                logo: '/images/icons/cryptocurrencies/atom.svg',
                description: 'The Internet of Blockchains',
                homepage: 'https://cosmos.network/',
                github: 'https://github.com/cosmos',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/cryptocurrencies/cosmwasm.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'CosmWasm',
                subtitle: 'Smart contracts',
                logo: '/images/icons/cryptocurrencies/cosmwasm.svg',
                description: 'Multi-chain smart contracts',
                homepage: 'https://cosmwasm.com/',
                github: 'https://github.com/CosmWasm/cosmwasm',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/rust-lang-icon.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Rust',
                subtitle: 'Smart contracts language',
                logo: '/images/icons/stacks/rust-lang-icon.svg',
                description: 'Mordern programing language for developers',
                homepage: 'https://www.rust-lang.org/',
                github: 'https://github.com/rust-lang',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/vuejs.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Vue 3',
                subtitle: 'Composition API',
                logo: '/images/icons/stacks/vuejs.svg',
                description: 'The Web Framework for building user interfaces.',
                homepage: 'https://v3.vuejs.org/',
                github: 'https://github.com/vuejs/vue-next',
              }"
            />
          </template>
        </tippy>

        <tippy class="has-help-cursor" interactive placement="top">
          <div class="stack">
            <img src="/images/icons/stacks/typescript.svg" alt="" />
          </div>
          <template #content>
            <StackPopoverContent
              :stack="{
                name: 'Typescript',
                subtitle: 'Javascript enhanced',
                logo: '/images/icons/stacks/typescript.svg',
                description: 'Javascript but with type safe',
                homepage: 'https://www.typescriptlang.org/',
                github: 'https://github.com/microsoft/TypeScript',
              }"
            />
          </template>
        </tippy>
      </div>
    </div>
  </div>
</template>
