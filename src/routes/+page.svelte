<script>
    // @ts-nocheck
    import axios from 'axios'
    import {onMount} from 'svelte'
    export let data;
    const {animes} = data;
</script>

<div class="bg-orange-300">
    {#each animes as anime}
        <h2>{anime?.title}</h2>
    {/each}
</div>