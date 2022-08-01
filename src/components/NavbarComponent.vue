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

import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    NavbarLinkComponent,
  },
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          link: "/",
          img: "Logo.svg",
        },
        other: [
          {
            id: uuidv4(),
            link: "/our-coffee",
            text: "Our coffee",
          },
          {
            id: uuidv4(),
            link: "goods",
            text: "For your pleasure",
          },
          {
            id: uuidv4(),
            link: "/contacts",
            text: "Contact us",
          },
        ],
      },
    };
  },
};
</script>
