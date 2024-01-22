<script>
    import "../app.css"
    import Navbar from "../components/Navbar.svelte";
</script>
<section>
    <div>
        <Navbar />
        <slot />
    </div>
</section>
