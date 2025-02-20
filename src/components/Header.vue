<template>
  <!-- Cabeçalho -->
  <header class="header">
    <nav>
      <ul class="menu">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>

        <!-- Discografia com Dropdown -->
        <li 
          class="menu-discografia"
          @mouseenter="mostrarDiscografia = true"
          @mouseleave="mostrarDiscografia = false"
        >
          <a href="#discografia">Discografia</a>
          <div v-if="mostrarDiscografia" class="dropdown">
            <ul role="menu">
              <li>
                <img :src="require('@/assets/single-icon.svg')" alt="Ícone Singles">
                <a href="#singles">Singles</a>
              </li>
              <li>
                <img :src="require('@/assets/album-icon.svg')" alt="Ícone Álbuns">
                <a href="#albuns">Álbuns</a>
              </li>
              <li>
                <img :src="require('@/assets/version-icon.svg')" alt="Ícone Versões">
                <a href="#versoes">Versões</a>
              </li>
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

<style scoped>
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

/* Menu principal */
.menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
}

.menu li {
  position: relative;
}

/* Links do menu */
.menu a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  display: block;
}

.menu a:hover {
  text-decoration: underline;
  color: #f39c12;
}

/* Dropdown */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(95, 92, 92, 0.9);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
}

.dropdown li img {
  width: 24px;
  height: 24px;
}

.dropdown li a {
  color: white;
  font-size: 16px;
}

/* Responsividade */
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .menu li {
    width: 100%;
  }

  .dropdown {
    position: relative;
    width: auto;
    text-align: left;
  }
}
</style>
