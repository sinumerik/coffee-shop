<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component></navbar-component>
          </div>
        </div>
        <title-component text="For your pleasure"></title-component>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-component
                className="shop__item"
                :img="goods[0].img"
                :name="goods[0].name"
                :price="goods[0].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="goods[1].img"
                :name="goods[1].name"
                :price="goods[1].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="goods[2].img"
                :name="goods[2].name"
                :price="goods[2].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="goods[3].img"
                :name="goods[3].name"
                :price="goods[3].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="goods[4].img"
                :name="goods[4].name"
                :price="goods[4].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="goods[5].img"
                :name="goods[5].name"
                :price="goods[5].price"
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
import CardComponent from '@/components/CardComponent.vue';
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  components: {
    NavbarComponent,
    CardComponent,
    TitleComponent
  },
  data() {
    return {
      goods: [
        {
          id: 0,
          img: 'coffee-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73
        },
        {
          id: 1,
          img: 'coffee-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73
        },
        {
          id: 2,
          img: 'coffee-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73
        },
        {
          id: 3,
          img: 'coffee-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73
        },
        {
          id: 4,
          img: 'coffee-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73
        },
        {
          id: 5,
          img: 'coffee-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73
        },
      ]
    }
  }
};
</script>

