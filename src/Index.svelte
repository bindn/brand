<script>
  import HeaderLink from "./HeaderLink.svelte";
  import FooterLink from "./FooterLink.svelte";
</script>

<style global type="text/scss">
  @import "./styles/app.scss";

  .line-height-120 {
    @include desktop {
      line-height: 120px;
    }
  }
  main {
    flex: 1 0 auto;
  }
  footer {
    flex-shrink: 0;
  }

</style>

<header class="is-unselectable mx-4">
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item is-size-4 is-size-6-mobile">
        <span class="mr-2">
          <i class="fad fa-brackets-curly" />
        </span>
        <span class="has-text-weight-bold">Bindn</span>
      </div>
    </div>
    <div class="level-right mr-4">
      <div class="level-item">
        <HeaderLink address="/color" text="Color" />
      </div>
    </div>
  </div>
</header>
<main class="section is-medium pb-5">
  <div>
    <div
      class="is-size-2-desktop is-size-1-widescreen is-size-2-tablet is-size-3-mobile
      has-text-weight-bold line-height-120 mb-5 is-family-secondary">
      Simple JavaScript
      <br />
      Packages
    </div>
    <div class="has-text-brand-secondary is-size-3 is-size-5-mobile">
      Built with a focus on two-way binding
    </div>
  </div>
</main>
<footer class="pb-3">
  <div class="level is-mobile level-right mx-4">
    <div class="is-size-6 mx-2 is-unselectable">Find On</div>
    <div class="sources">
      <FooterLink
        address="http://npmjs.org/bindn/color"
        icon="fab fa-npm fa-1x" />
      <FooterLink
        address="http://github.com/bindn/color"
        icon="fab fa-github fa-1x" />
    </div>
  </div>
</footer>
