<template>
  <div class="home">
    <!-- Logo -->
    <div class="logo-container">
      <!-- <img src="/assets/logo.png" alt="John Prado Logo" class="logo" /> -->
    </div>

    <section id="inicio" class="section"></section>

    <About />
    
    
    <section id="contato" class="section">
      <div class="content">
        <h2>Contato</h2>
        <p>Entre em contato através do e-mail: contato@johnprado.com</p>
      </div>
    </section>
  </div>
</template>

<script>
import About from './About.vue';

export default {
  name: "Home",
  components: {
    About,
  },
  data() {
    return {
      mostrarDiscografia: false,
    };
  },
};
</script>

<style>
/* Reset Básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gothic Ultra OT", serif;
}

/* Corpo */
.home {
  color: white;
  background: #0c0c0c;
  min-height: 100vh;
  text-align: center;
}

/* Logo */
.logo-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  text-align: center;
}

.logo {
  width: 300px;
  max-width: 80%;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
}

/* Seções */
.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;
}

#inicio {
  background-image: url('../assets/bg-inicio.jpg');
}
</style>
