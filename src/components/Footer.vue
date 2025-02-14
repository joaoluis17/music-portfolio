<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Navegação (à esquerda) -->
      <nav class="footer-nav">
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/sobre">Sobre</router-link></li>
          <li><router-link to="/discografia">Discografia</router-link></li>
          <li><router-link to="/contato">Contato</router-link></li>
        </ul>
        <ul class="discografia-sub">
          <li><router-link to="/discografia/singles">Singles</router-link></li>
          <li><router-link to="/discografia/albuns">Álbuns</router-link></li>
          <li><router-link to="/discografia/versoes">Versões</router-link></li>
        </ul>
      </nav>

      <!-- Texto centralizado -->
      <p class="footer-text">&copy; {{ new Date().getFullYear() }} John Prado | Todos os direitos reservados.</p>

      <!-- Ícones sociais (à direita) -->
      <div class="social-links">
        <a href="https://www.instagram.com/o_john_prado/" target="_blank" aria-label="Instagram">
          <img src="../assets/instagram-icon.svg" alt="Instagram">
        </a>
        <a href="https://www.youtube.com/@johnprado17" target="_blank" aria-label="YouTube">
          <img src="../assets/youtube-icon.svg" alt="YouTube">
        </a>
        <a href="https://onerpm.link/818659291854" target="_blank" aria-label="Links">
          <img src="../assets/links-icon.svg" alt="Links">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
.footer {
  background-color: #222;
  color: #fff;
  padding: 1.5rem 0;
  width: 100%;
  position: relative;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Navegação */
.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-nav ul {
  list-style: none;
  
  display: flex;
  gap: 1.5rem;
}

.footer-nav a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.footer-nav a:hover {
  color: #f39c12;
}

/* Estilização da Discografia */
.discografia-sub {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

/* Texto centralizado */
.footer-text {
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
}

/* Ícones sociais (à direita) */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-links img {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease-in-out;
}

.social-links a:hover img {
  transform: scale(1.2);
}
</style>
