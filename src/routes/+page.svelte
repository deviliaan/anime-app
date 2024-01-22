<script>
    // @ts-nocheck
    import axios from 'axios'
    import {onMount} from 'svelte'
	import Card from '../components/Card.svelte';
    export let data;
    const {animes} = data;
</script>

<div class="">
    <div class="grid grid-cols-2 p-2 gap-2">
        {#each animes as anime}
            <Card anime={anime}/>
        {/each}
    </div>
</div>