<script>
    // @ts-nocheck
    import axios from 'axios'
    import {onMount} from 'svelte'
	import Card from '../components/Card.svelte';
    import Paginator from '../components/Paginator.svelte';
    export let data;
    const {animes,currentPage} = data;
</script>

<div class="pb-4">
    <div class="grid grid-cols-2 p-2 gap-2">
        {#each animes as anime}
            <Card anime={anime}/>
        {/each}
    </div>
    <div class=" flex w-full justify-center">
        <Paginator page={currentPage}/>
    </div>
</div>