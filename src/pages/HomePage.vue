<template>
  <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullsize="true"
  >
    <template #leftCol>
      <div class="mt-5 text-center">
        <div class="display-1 my-5">Der Shop</div>
        <div class="display-5 my-5">
          Erhalten Sie Zugriff auf exklusive Artikel
        </div>
        <div class="my-5 offset-4 col-4">
          <img src="@/assets/shopping.svg" alt="shopping" class="img-fluid" />
        </div>
      </div>
    </template>
    <template #rightCol>
      <Transition
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutRight"
        mode="out-in"
      >
        <component
          :is="componentName"
          @change-component="changeComponent"
        ></component>
      </Transition>
    </template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "@/layouts/TheTwoColumnsLayout";
import RegisterComponent from "@/components/auth/Register";
import LoginComponent from "@/components/auth/Login";

export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    RegisterComponent,
    LoginComponent,
  },

  // metaInfo: {
  //   title: 'Meine App',
  //   description: 'Dies ist meine Vue.js App',
  // },
  

  data() {
    return {
      componentName: "RegisterComponent",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<style scoped></style>
