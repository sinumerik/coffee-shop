<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <navbar-link-component
              className="footer__item"
              :link="links.header.link"
            >
              <img
                :src="require(`@/assets/logo/${links.header.img}`)"
                :alt="links.header.img"
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
          img: "Logo_black.svg",
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
