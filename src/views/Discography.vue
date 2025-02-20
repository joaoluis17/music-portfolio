<template>
  <section id="discografia" class="section">
    <div class="content">
      <h2>Discografia</h2>
      <p>Aqui você encontrará meus álbuns e singles lançados.</p>

      <!-- Singles -->
      <div v-if="categorizedDiscography['Single']" id="singles" class="category-section">
        <h3>Singles</h3>
        <div class="discography-grid">
          <div
            v-for="(item, index) in categorizedDiscography['Single']"
            :key="index"
            class="disc-item"
            @click="openDetails(item)"
          >
            <img :src="item.cover" :alt="item.title" class="cover" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.type }}</p>
          </div>
        </div>
      </div>

      <!-- Álbum -->
      <div v-if="categorizedDiscography['Álbum']" id="albuns" class="category-section">
        <h3>Álbuns</h3>
        <div class="discography-grid">
          <div
            v-for="(item, index) in categorizedDiscography['Álbum']"
            :key="index"
            class="disc-item"
            @click="openDetails(item)"
          >
            <img :src="item.cover" :alt="item.title" class="cover" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.type }}</p>
          </div>
        </div>
      </div>

      <!-- Versões -->
      <div v-if="categorizedDiscography['Versão']" id="versoes" class="category-section">
        <h3>Versões</h3>
        <div class="discography-grid">
          <div
            v-for="(item, index) in categorizedDiscography['Versão']"
            :key="index"
            class="disc-item"
            @click="openDetails(item)"
          >
            <img :src="item.cover" :alt="item.title" class="cover" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.type }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedItem" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <button class="close" @click="closeModal">&times;</button>
        <img :src="selectedItem.cover" class="modal-cover" />
        <h2>{{ selectedItem.title }}</h2>
        <p>{{ selectedItem.description }}</p>
        <ul>
          <li v-for="(track, i) in selectedItem.tracks" :key="i">
            🎵 {{ track }}
          </li>
        </ul>
        <div v-if="selectedItem.video" class="video-container">
          <iframe
            :src="selectedItem.video"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Discography",
  data() {
    return {
      discography: [
        {
          title: "Deferred",
          type: "Álbum",
          cover: require("@/assets/capa-deferred.jpeg"),
          description: "Esse é meu último lançamento, um EP que contém 5 músicas sendo 4 inéditas e uma remasterização.",
          tracks: ["01 - I Don't Wanna More War", "02 - Life Machine", "03 - Refúgio", "04 - Deferred", "05 - O Evento"],
          video: "https://www.youtube.com/embed/MMZ1Q6rsgbE?list=OLAK5uy_mbjyNGVih0T_xpckHunl0SCarYoR45CsA"
        },
        {
          title: "Somebody Told Me",
          type: "Single",
          cover: require("@/assets/capa-somebody-told-me.jpeg"),
          description: "Single lançado em 2020.",
          tracks: ["Somebody Told Me"],
          video: "https://www.youtube.com/embed/6QxB6oeVzgk?list=PLdKtehzRUkBuTcW0oBm4nizaBhAWp79hf&index=4"
        },
        {
          title: "HER",
          type: "Álbum",
          cover: require("@/assets/capa-her.jpeg"),
          description: "Meu primeiro EP lançado, no começo de 2020 com 6 músicas inéditas.",
          tracks: ["01 - Fix You", "02 - HER", "03 - Mess On My Mind", "04 - Changes", "05 - Between Music and Photos", "06 - Gone"],
          video: "https://www.youtube.com/embed/RmiCMrWEFGw?list=PLdKtehzRUkBtavopYNzxOvp2tbDiOXo_I&index=2"
        },
        {
          title: "End Game",
          type: "Single",
          cover: require("@/assets/capa-end-game.jpeg"),
          description: "Single lançado no final de 2019. Esse foi o 3º Single lançado na minha carreira.",
          tracks: ["End Game"],
          video: "https://www.youtube.com/embed/vU5jB6MzGQU?list=PLdKtehzRUkBuTcW0oBm4nizaBhAWp79hf&index=3"
        },
        {
          title: "Insanity Love",
          type: "Single",
          cover: require("@/assets/capa-insanity-love.jpeg"),
          description: "Single lançado em 2019. Esse foi o 2º Single lançado na minha carreira.",
          tracks: ["Insanity Love"],
          video: "https://www.youtube.com/embed/ickIr__1BN0?list=PLdKtehzRUkBuTcW0oBm4nizaBhAWp79hf&index=2"
        },
        {
          title: "Acorrentado",
          type: "Single",
          cover: require("@/assets/capa-acorrentado.jpg"),
          description: "Primeiro Single lançado na minha carreira. Lançamento em agosto em 2019.",
          tracks: ["Acorrentado"],
          video: "https://www.youtube.com/embed/pWaJbm_nGpU?list=PLdKtehzRUkBuTcW0oBm4nizaBhAWp79hf&index=1"
        },
        {
          title: "Muito Pouco - Moska",
          type: "Versão",
          cover: require("@/assets/capa-muito-pouco.jpg"),
          description: "Versão da música 'Muito Pouco' do Paulinho Moska.",
          tracks: ["Muito Pouco - Moska"],
          video: "https://www.youtube.com/embed/4PaoNHjwZ7Y?list=PLdKtehzRUkBvHyuwIususiNZA6l9QchpW&index=3"
        },
        {
          title: "Wide Awake - Audioslave",
          type: "Versão",
          cover: require("@/assets/capa-wide-awake.jpg"),
          description: "Versão da música 'Wide Awake' do Audioslave.",
          tracks: ["Wide Awake - Audioslave"],
          video: "https://www.youtube.com/embed/Ep6OxmWQsqE"
        },
        {
          title: "O Tempo Não Pára - Cazuza",
          type: "Versão",
          cover: require("@/assets/capa-o-tempo-nao-para.jpg"),
          description: "Versão da música 'O Tempo Não Pára do Cazuza.",
          tracks: ["O Tempo Não Pára - Cazuza"],
          video: "https://www.youtube.com/embed/cB1cO29V2l4"
        }
      ],
      selectedItem: null,
    };
  },
  computed: {
    categorizedDiscography() {
      return this.discography.reduce((acc, item) => {
        if (!acc[item.type]) acc[item.type] = [];
        acc[item.type].push(item);
        return acc;
      }, {});
    }
  },
  methods: {
    openDetails(item) {
      this.selectedItem = item;
    },
    closeModal() {
      this.selectedItem = null;
    }
  }
};
</script>

<style>
.section {
  padding: 6rem 1rem;
  text-align: center;
}

.content {
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  color: #fff;
}

p {
  font-size: 1.2rem;
  color: #ddd;
}

.category-section {
  margin-top: 2rem;
}

.category-section h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
}

.discography-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.disc-item {
  background: #222;
  border-radius: 10px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.disc-item:hover {
  transform: scale(1.05);
}

.cover {
  width: 100%;
  border-radius: 8px;
}

h3 {
  color: #fff;
  margin-top: 0.5rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal-content {
  background: #333;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  color: white;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-cover {
  width: 100%;
  border-radius: 8px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  background: none;
  border: none;
}

.video-container {
  margin-top: 1rem;
}

.video-container iframe {
  width: 100%;
  height: 300px;
  border-radius: 8px;
}
</style>
