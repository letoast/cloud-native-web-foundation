<script>
    import { featureToggleStore } from '../feature-toggles/store'
    export let name
</script>

{#if $featureToggleStore[name]}
    <slot />
{/if}