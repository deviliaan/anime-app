<script>
    export let page;
</script>
<div class="join">
    <a href="{page != 1? `/?page=${page - 1}`: '#'}" class="join-item btn btn-lg">{page != 1? page -1 : 'No Page'}</a>
    <a href="#" class="join-item btn btn-lg btn-active">{page}</a>
    <a href="/?page={page + 1}" class="join-item btn btn-lg">{page + 1}</a>
</div>