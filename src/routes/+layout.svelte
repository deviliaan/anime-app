<script>
    import "../app.css"
    import Navbar from "../components/Navbar.svelte";
    import Paginator from "../components/Paginator.svelte";
</script>
<section>
    <div class="flex flex-col justify-center">
        <Navbar />
        <slot />
        <div class="flex w-full justify-center">
            <Paginator />
        </div>
    </div>
</section>
