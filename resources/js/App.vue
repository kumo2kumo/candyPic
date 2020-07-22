// ルートコンポーネント
// <div id="app"></div> にこのコンポーネントが描画される
<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components:{
    Navbar,
    Footer
  }
}
</script>