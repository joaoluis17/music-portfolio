<template>
    <section id="contato" class="section">
      <div class="content">
        <h2 class="titulo">Quer entrar em contato comigo?</h2>
        <p class="paragrafo">Me envie uma mensagem no meu Instagram (<a href="https://www.instagram.com/o_john_prado/" class="instagram">@o_john_prado</a>), ou através do e-mail: <a href="mailto:john_prado17@hotmail.com" class="email">john_prado17@hotmail.com</a>.</p>
      </div>
    </section>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
.section {
  background-image: url('../assets/background-contact.svg');
}
.titulo {
  margin-bottom: 1rem;
}
.instagram {
  font-weight: semi-bold;
  text-decoration: none;
  color: inherit;
}
.instagram:hover {
  font-weight: 900;
  text-decoration: underline;
  color: inherit;
}
.email {
  font-weight: semi-bold;
  text-decoration: none;
  color: inherit;
}
.email:hover {
  font-weight: 900;
  text-decoration: underline;
  color: inherit;
}
</style>