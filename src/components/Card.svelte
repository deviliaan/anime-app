<script>
    export let anime;
</script>
<div class="relative card w-full h-full bg-base-100 shadow-xl pb-2">
  <figure class="h-[90%] w-full">
    <img src="{anime?.thumbnail}" alt="Shoes" class="rounded-xl h-full object-fit" />
  </figure>
  <div class="card-body w-full p-0">
    <h2 class="w-full px-2 text-sm pt-1 card-title truncate">{anime?.title}</h2>
    <span class="text-sm px-2">Episodes: {anime?.episode}</span>
  </div>
</div>