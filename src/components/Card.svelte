<script>
    export let anime;
</script>
<div class="relative card w-full h-full bg-base-100 shadow-xl pb-2">
  <figure class="">
    <img src="{anime?.thumbnail}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body w-full p-0 items-center text-center">
    <h2 class="w-full px-2 text-sm card-title truncate">{anime?.title}</h2>
    <span>Episodes: {anime?.episode}</span>
    <div class="flex flex-wrap px-2 gap-2">
      {#each anime.genres.split(',') as genre}
        <span class="badge badge-primary">{genre}</span>
      {/each}
    </div>
    <div class="absolute top-0 left-0 z-50">
      <span class="bg-orange-300 rounded-3xl px-2 truncate">{anime.type}</span>
    </div>
  </div>
</div>