<template>
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
              <li><a href="#singles">🎶 Singles</a></li>
              <li><a href="#álbuns">🎵 Álbuns</a></li>
              <li><a href="#versoes">🎸 Versões</a></li>
            </ul>
          </div>
        </li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>
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