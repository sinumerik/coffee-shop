<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <navbar-link-component className="header__item" :link="links.header.link">
        <img
          :src="require(`@/assets/logo/${links.header.img}`)"
          :alt="links.header.img"
        />
      </navbar-link-component>

      <navbar-link-component
        v-for="link in links.other"
        :key="link.id"
        className="header__item"
        :link="link.link"
        :text="link.text"
      ></navbar-link-component>
    </ul>
  </header>
</template>

<script>
import NavbarLinkComponent from "@/components/NavbarLinkComponent.vue";

export default {
  components: {
    NavbarLinkComponent,
  },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    }
  }
};
</script>
