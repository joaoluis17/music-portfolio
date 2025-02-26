<template>
  <section id="sobre" class="section">
    <div class="content">
      <h1>A minha trajetória</h1>

      <div class="text-image">
        <img src="../assets/perfil.png" alt="John Prado" class="image" />
        <div class="text">
          <p>Com influências que vão do Rock a outros segmentos semelhantes, busco criar um estilo único e autêntico, compartilhando minha verdade e emoções genuínas, para que meu público se identifique e se conecte com minhas músicas.</p>
        </div>
      </div>

      <div class="text-image">
        <img src="../assets/releases.png" alt="Início da carreira" class="image" />
        <div class="text">
          <p>Minha jornada musical começou na infância, quando decidi que a música seria minha profissão. Em 2019, dei início à minha carreira solo com o lançamento dos singles "Acorrentado", "Insanity Love" e "End Game", todos produzidos de forma independente. No ano seguinte, em 2020, lancei meu primeiro EP, "HER", seguido pelo single "Somebody Told Me". Durante esse período, também compartilhei no YouTube alguns singles exclusivos e versões de músicas de outros artistas.</p>
        </div>
      </div>

      <div class="text-image">
        <img src="../assets/capa-hardblend.jpg" alt="Banda Hard Blend" class="image" />
        <div class="text">
          <p>Em 2023, entrei para a banda Hard Blend (<a href="https://www.instagram.com/oficial_hard_blend/" class="instagram">@oficial_hard_blend</a>) como guitarrista e backing vocal, onde permaneci até o início de 2024. Esse foi um período importante na minha carreira, com destaque para minha contribuição na composição da música "Quarentena", que fez parte do álbum "Maçarico Assassino", lançado em setembro de 2024.</p>
        </div>
      </div>

      <div class="text-image">
        <img src="../assets/capa-deferred.jpeg" alt="EP Deferred" class="image" />
        <div class="text">
          <p>Em 2024, lancei meu segundo EP, "Deferred", que além de regravar e remasterizar o single "I Don’t Wanna More War" (lançado exclusivamente no YouTube), trouxe outras 4 canções inéditas. Com esse trabalho, reafirmei meu compromisso com a inovação e originalidade no meu processo criativo.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style>
.section {
  padding: 6rem 1rem; 
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
}

.text-image {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  max-width: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 4rem;
}

.text {
  max-width: 600px;
}

.text p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ddd;
  text-align: left;
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

/* Responsividade */
@media (max-width: 768px) {
  .text-image {
    flex-direction: column;
    text-align: center;
  }

  .image {
    max-width: 80%;
    margin-bottom: 1rem;
  }

  .text {
    max-width: 90%;
    text-align: center;
  }
}
</style>
