<template>
  <div class="home">
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/layouts/Header'
  import Footer from '../components/layouts/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

