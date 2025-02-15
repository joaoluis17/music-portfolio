<template>
  <section id="discografia" class="section">
    <div class="content">
      <h2>Discografia</h2>
      <p>Aqui você encontrará meus álbuns e singles lançados.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Discography"
}
</script>

<style>
.section {
  padding: 6rem 1rem;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #ddd;
}

/* Responsividade */
@media (max-width: 768px) {
  .content {
    max-width: 90%;
  }
}
</style>
