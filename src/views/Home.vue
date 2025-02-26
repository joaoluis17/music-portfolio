<template>
  <div class="home">
    <!-- Logo -->
    <section id="inicio" class="section"></section>
    <About />
    <Discography />
    <Contact />
  </div>
</template>

<script>
import About from './About.vue';
import Contact from './Contact.vue';
import Discography from './Discography.vue';

export default {
  name: "Home",
  components: {
    About,
    Discography,
    Contact
  }
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
  position: absolute; /* Evita que a logo fique sobrepondo tudo */
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.logo {
  width: 200px;
  max-width: 50%;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
}

/* Seções */
.section {
  min-height: 100vh;
  padding: 4rem 1rem; /* Garante espaçamento interno */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

/* Fundo da primeira seção (inicio) */
#inicio {
  background-image: url('../assets/bg-inicio.jpg');
}

/* Responsividade */
@media (max-width: 1024px) {
  .section {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top center;
  }
}
@media (max-width: 768px) {
  .logo {
    width: 150px;
  }

  #inicio {
    background-attachment: scroll; /* Remove o efeito de paralaxe */
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center; /* Centraliza a imagem */
  }
  
  /* Ajustes nas seções em telas menores */
  .section {
    padding: 2rem 1rem; /* Menos padding nas seções para o mobile */
  }
}
</style>
