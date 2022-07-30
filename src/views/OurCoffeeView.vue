<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component></navbar-component>
          </div>
        </div>
        <title-component text="Our Coffee"></title-component>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl" />
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-component
                className="shop__item"
                :img="coffee[0].img"
                :name="coffee[0].name"
                :price="coffee[0].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="coffee[1].img"
                :name="coffee[1].name"
                :price="coffee[1].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="coffee[2].img"
                :name="coffee[2].name"
                :price="coffee[2].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="coffee[3].img"
                :name="coffee[3].name"
                :price="coffee[3].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="coffee[4].img"
                :name="coffee[4].name"
                :price="coffee[4].price"
              ></card-component>
              <card-component
                className="shop__item"
                :img="coffee[5].img"
                :name="coffee[5].name"
                :price="coffee[5].price"
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
      coffee: [
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
