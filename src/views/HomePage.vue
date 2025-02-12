<template>
  <div class="home">
    <!-- Logo -->
    <div class="logo-container">
      <!-- <img src="/assets/logo.png" alt="John Prado Logo" class="logo" /> -->
    </div>

    <!-- Cabeçalho -->
    <header class="header">
      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
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

    <!-- Seções -->
    <section id="inicio" class="section"></section>
    <section id="sobre" class="section">
      <div class="content">
          <h1>Sobre</h1>
          <p>Com influências que vão do Rock a outros segmentos semelhantes, busco criar um estilo único e autêntico, compartilhando minha verdade e emoções genuínas, para que meu público se identifique e se conecte com minhas músicas.</p>
          
          <p>Minha jornada musical começou na infância, quando decidi que a música seria minha profissão. Em 2019, dei início à minha carreira solo com o lançamento dos singles "Acorrentado", "Insanity Love" e "End Game", todos produzidos de forma independente. No ano seguinte, em 2020, lancei meu primeiro EP, "HER", seguido pelo single "Somebody Told Me". Durante esse período, também compartilhei no YouTube alguns singles exclusivos e versões de músicas de outros artistas.</p>
          
          <p>Em 2023, entrei para a banda Hard Blend como guitarrista e backing vocal, onde permaneci até o início de 2024. Esse foi um período importante na minha carreira, com destaque para minha contribuição na composição da música "Quarentena", que fez parte do álbum "Maçarico Assassino", lançado em setembro de 2024.</p>
          
          <p>Em 2024, lancei meu segundo EP, "Deferred", que além de regravar e remasterizar o single "I Don’t Wanna More War" (lançado exclusivamente no YouTube), trouxe outras 4 canções inéditas. Com esse trabalho, reafirmei meu compromisso com a inovação e originalidade no meu processo criativo.</p>
      </div>

    </section>
    <section id="discografia" class="section">
      <div class="content">
        <h2>Discografia</h2>
        <p>Aqui você encontrará meus álbuns e singles lançados.</p>
      </div>
    </section>
    <section id="contato" class="section">
      <div class="content">
        <h2>Contato</h2>
        <p>Entre em contato através do e-mail: contato@johnprado.com</p>
      </div>
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

/* Cabeçalho */
.header {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  padding: 15px 0;
  top: 0;
  z-index: 500;
  transition: background 0.3s ease-in-out;
}

.header nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
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
