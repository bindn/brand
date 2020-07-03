<script>
  export let address = "";
  export let text = "";
</script>

<style>
  .page-link:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: all 600ms 100ms;
  }
  .page-link {
    transition: all 600ms ease-in-out;
  }
</style>

<div class="page-link">
  <a href={address}>
    <div class="has-text-weight-bold">{text}</div>
  </a>
</div>
