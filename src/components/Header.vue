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
  name: "Header",
  data() {
    return {
      mostrarDiscografia: false,
    };
  },
};
</script>

<style>
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
  color: #f39c12;
}
</style>