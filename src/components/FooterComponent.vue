<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
              <router-link to="/">
                <img
                  :src="require(`@/assets/logo/${links[0].img}`)"
                  :alt="links[0].img"
                />
              </router-link>
            </li>
            <navbar-link-component
              className="footer__item"
              :link="links[1].link"
              :text="links[1].text"
            ></navbar-link-component>
            <navbar-link-component
              className="footer__item"
              :link="links[2].link"
              :text="links[2].text"
            ></navbar-link-component>
            <navbar-link-component
              className="footer__item"
              :link="links[3].link"
              :text="links[3].text"
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
import NavbarLinkComponent from '@/components/NavbarLinkComponent.vue';

export default {
  components: {
    NavbarLinkComponent
  },
  data() {
    return {
      links: [
        {
          id: 0,
          link: "/",
          img: "Logo_black.svg",
        },
        {
          id: 1,
          link: "/our-coffee",
          text: "Our coffee",
        },
        {
          id: 2,
          link: "goods",
          text: "For your pleasure",
        },
        {
          id: 3,
          link: "/contacts",
          text: "Contact us",
        },
      ],
    };
  },
};
</script>
