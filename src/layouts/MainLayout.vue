<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <!-- {{user}}

          {{ flag }} -->
        </q-item-label>

        <!-- <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        /> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      // user: "pravesh" , 
      // flag:false,
    };
  },

  methods: {
    // assignName(newName){
    //   this.user = newName;
    // }
  },
  mounted() {
    // this.assignName("Pravesh Naik")
  },
  watch: {
    // user(newVal){
    //   console.log("hiii", newVal)
    //   this.flag=true;
    //   alert("hii");
    // }
  }

}

</script>
