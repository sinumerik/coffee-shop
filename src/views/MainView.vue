<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <navbar-component></navbar-component>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <title-component
              text="Everything You Love About Coffee"
            ></title-component>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a
              @click.prevent="scrollToBestsellers"
              href="./coffeepage.html"
              class="preview__btn"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best" ref="bestsellers">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <card-component
                v-for="card in bestsellers"
                :key="card.id"
                className="best__item"
                :card="card"
              ></card-component>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

import { scrollIntoView } from "seamless-scroll-polyfill";

export default {
  components: {
    NavbarComponent,
    CardComponent,
    TitleComponent,
  },
  data() {
    return {
      name: "bestsellers",
    };
  },
  computed: {
    bestsellers() {
      return this.$store.getters["getProducts"](this.name);
    },
  },
  methods: {
    scrollToBestsellers() {
      scrollIntoView(this.$refs.bestsellers, {
        behavior: "smooth",
        block: "start",
      });
    },
  },
  beforeMount() {
    fetch(`http://localhost:3000/${this.name}`)
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch('setBestsellers', data)
      });
  },
};
</script>
