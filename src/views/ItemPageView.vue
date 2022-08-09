<template>
     <main>
    <div class="banner" :class="getPageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <navbar-component></navbar-component>
                </div>
            </div>
            <title-component :text="card.name"></title-component>
        </div>
    </div>

    <section class="shop">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <img class="shop__girl" :src="card.url" :alt="card.url">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="title">About it</div>
                    <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                    <div class="shop__point">
                        <span>Country:</span>
                        {{ card.country }}
                    </div>
                    <div class="shop__point">
                        <span>Description:</span>
                        {{ card.description }}
                    </div>
                    <div class="shop__point">
                        <span>Price: </span>
                        <span class="shop__point-price">{{ card.price }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

export default ({
    components: {
        NavbarComponent,
        TitleComponent
    },
    computed: {
        getPageName() {
            return this.$route.name;
        },
        card() {
            return this.$store.getters["getCardById"](this.$route.params.id, this.getPageName);
        }
    }
})
</script>
