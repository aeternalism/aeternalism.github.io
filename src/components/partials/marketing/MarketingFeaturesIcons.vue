<template>
  <div id="features" class="section has-bg-dots">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered py-6">
        <h2 class="title is-2">Awesome Features</h2>
      </div>

      <!--Content-->
      <div class="py-12">
        <div class="columns is-vcentered is-multiline card-icon-boxes">
          <!--Box-->
          <div class="column is-4">
            <div class="card card-icon-box">
              <div class="card-content">
                <V-IconBox size="medium" color="red">
                  <i aria-hidden="true" class="lnil lnil-battery"></i>
                </V-IconBox>

                <h4 class="title is-5">High performance</h4>
                <p class="subtitle is-6 light-text">
                  Up to thousands of transactions per second with block time on
                  the order of 1 second
                </p>
              </div>
            </div>
          </div>
          <!--Box-->
          <div class="column is-4">
            <div class="card card-icon-box">
              <div class="card-content">
                <V-IconBox size="medium" color="blue">
                  <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                </V-IconBox>

                <h4 class="title is-5">Instant finality</h4>
                <p class="subtitle is-6 light-text">
                  Transactions are finalized as soon as a block is created
                </p>
              </div>
            </div>
          </div>
          <!--Box-->
          <div class="column is-4">
            <div class="card card-icon-box">
              <div class="card-content">
                <V-IconBox size="medium" color="warning">
                  <i aria-hidden="true" class="lnil lnil-pie-chart-dollar"></i>
                </V-IconBox>

                <h4 class="title is-5">Cheap fee</h4>
                <p class="subtitle is-6 light-text">
                  Fee can be paid in multiple tokens in a fraction of a cent
                </p>
              </div>
            </div>
          </div>
          <!--Box-->
          <div class="column is-4">
            <div class="card card-icon-box">
              <div class="card-content">
                <V-IconBox size="medium" color="success">
                  <i aria-hidden="true" class="lnil lnil-cloud-network"></i>
                </V-IconBox>

                <h4 class="title is-5">Multichain</h4>
                <p class="subtitle is-6 light-text">
                  With IBC protocol, blockchains can easily transfer tokens to
                  each other
                </p>
              </div>
            </div>
          </div>
          <!--Box-->
          <div class="column is-4">
            <div class="card card-icon-box">
              <div class="card-content">
                <V-IconBox size="medium" color="purple">
                  <i aria-hidden="true" class="lnil lnil-lock-alt"></i>
                </V-IconBox>

                <h4 class="title is-5">Secure</h4>
                <p class="subtitle is-6 light-text">
                  Built on battle tested Cosmos SDK and Tendermint BFT consensus
                </p>
              </div>
            </div>
          </div>
          <!--Box-->
          <div class="column is-4">
            <div class="card card-icon-box">
              <div class="card-content">
                <V-IconBox size="medium" color="yellow">
                  <i aria-hidden="true" class="lnil lnil-bricks"></i>
                </V-IconBox>

                <h4 class="title is-5">Easy integration</h4>
                <p class="subtitle is-6 light-text">
                  Build dApp with your familiar technologies and tools
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--CTA-->
        <div class="cta-block no-border">
          <div class="head-text">
            <h3>Want to learn more?</h3>
            <p>Check out the Aeschain documentation</p>
          </div>
          <div class="head-action">
            <div class="buttons">
              <V-Button
                class="action-button"
                color="primary"
                rounded
                elevated
                href="https://github.com/aeternalism/aeschain/wiki/"
              >
                Read the Docs
              </V-Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
