<script>
    import "../app.css"
    import Navbar from "../components/Navbar.svelte";
</script>

<section>
    <div class="flex flex-col justify-center">
        <Navbar />
        <slot />
    </div>
</section>
