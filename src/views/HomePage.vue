<template>
  <div class="home">
    <!-- Cabeçalho -->
    <header class="header">
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li 
            class="menu-discografia"
            @mouseenter="mostrarDiscografia = true"
            @mouseleave="mostrarDiscografia = false"
          >
            <a href="#discografia">Discografia</a>
            <!-- Dropdown -->
            <div v-if="mostrarDiscografia" class="dropdown">
              <ul>
                <li><a href="#eps">🎵 EPs</a></li>
                <li><a href="#singles">🎶 Singles</a></li>
                <li><a href="#versoes">🎸 Versões</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>

    <!-- Seção Sobre -->
    <section id="sobre" class="section">
      <h1>Minha Carreira na Música</h1>
      <p>Sou João Luis, músico e compositor. Minha jornada na música começou...</p>
    </section>

    <!-- Seção Discografia -->
    <section id="discografia" class="section">
      <h2>Discografia</h2>
      <p>Aqui você encontrará meus álbuns e singles lançados.</p>
    </section>

    <!-- Seção Contato -->
    <section id="contato" class="section">
      <h2>Contato</h2>
      <p>Entre em contato comigo através do e-mail: contato@joaoluis.com</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
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
}

/* Corpo */
.home {
  font-family: Arial, sans-serif;
  color: white;
  background: #121212;
  min-height: 100vh;
  text-align: center;
  padding-top: 60px; /* Evita sobreposição do cabeçalho */
}

/* Cabeçalho */
.header {
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100%;
  padding: 15px 0;
  top: 0;
  z-index: 100;
}

.header nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
}

.header nav ul li {
  position: relative;
}

.header nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  display: block;
}

.header nav ul li a:hover {
  text-decoration: underline;
}

/* Estilização do Dropdown */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(30, 30, 30, 0.95); /* Fundo sólido para evitar sobreposição */
  border-radius: 5px;
  padding: 10px;
  width: 150px;
  text-align: left;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease, transform 0.2s ease;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown ul li {
  padding: 8px;
}

.dropdown ul li a {
  color: white;
  font-size: 16px;
  text-decoration: none;
}

.dropdown ul li a:hover {
  color: #ff512f;
}

/* Seções */
.section {
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>
