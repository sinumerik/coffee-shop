<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <navbar-link-component
              className="footer__item"
              :link="links.footer.link"
            >
              <img
                :src="require(`@/assets/logo/${links.footer.img}`)"
                :alt="links.footer.img"
              />
            </navbar-link-component>

            <navbar-link-component
              v-for="link in links.other"
              :key="link.id"
              className="footer__item"
              :link="link.link"
              :text="link.text"
            ></navbar-link-component>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import NavbarLinkComponent from "@/components/NavbarLinkComponent.vue";

export default {
  components: {
    NavbarLinkComponent,
  },
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>
