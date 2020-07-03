<script>
  export let address = "";
  export let icon = "fas fa-link";
</script>

{#if address !== ''}
  <span class="mx-1">
    <a href={address}>
      <i class="{icon} is-size-4" />
    </a>
  </span>
{/if}
