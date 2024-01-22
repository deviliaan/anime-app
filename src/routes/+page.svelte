<script>
    // @ts-nocheck
    import axios from 'axios'
    import {onMount} from 'svelte'

    $: animes = ['Naruto','Apple pie']
    
    onMount(async ()=>{
        const res = await axios.get('https://anime-api.xyz/page-1');
        console.log(res.data);
    })
</script>

<div class="bg-orange-300">
    {#each animes as anime}
        <h2>{anime?.title}</h2>
    {/each}
</div>