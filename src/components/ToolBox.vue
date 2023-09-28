<template>
  <div class="tool-box ">
  <v-row class="content">
    
    <v-col
      v-if="photoshop" 
      cols="2"
    >
      <v-row>
        <!-- Tool -->
        <v-col cols="12">
          <v-img
            src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1693427402/nathanWalkerPortfolio/Adobe_Photoshop_CC_icon.svg_n2denq.png"
          ></v-img>
        </v-col>
        <v-col cols="12">
          Photoshop
        </v-col>
      </v-row>
    </v-col>
  
    <v-col
      v-if="figma" 
      cols="2"
    >
      <v-row>
        <!-- Tool -->
        <v-col cols="12">
          <v-img
            src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1683834730/nathanWalkerPortfolio/Icon_vefvqs.png"
          ></v-img>
        </v-col>
        <v-col cols="12">
          Figma
        </v-col>
      </v-row>
    </v-col>

    <v-col
      v-if="vscode" 
      cols="2"
    >
      <v-row>
        <!-- Tool -->
        <v-col cols="12">
          <v-img
            src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1683834476/nathanWalkerPortfolio/Visual_Studio_Code_1.35_icon.svg_g9n66r.png"
          ></v-img>
        </v-col>
        <v-col cols="12">
          VS Code
        </v-col>
      </v-row>
    </v-col>

    <v-col
      v-if="vuejs" 
      cols="2"
    >
      <v-row>
        <!-- Tool -->
        <v-col cols="12">
          <v-img
            src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1683843475/nathanWalkerPortfolio/Vue.js_Logo_2.svg_yr4gny.png"
          ></v-img>
        </v-col>
        <v-col cols="12">
          Vue.js
        </v-col>
      </v-row>
    </v-col>
  
  </v-row>
</div>
</template>

<script>
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name:'mooncalf'});

export default {
  data () {  
    return {
      photoshop: this.tools.includes("photoshop"),
      vscode: this.tools.includes("vscode"),
      figma: this.tools.includes("figma"),
      vuejs: this.tools.includes("vuejs"),
      // googleanalytics: this.tools.includes("googleanalytics"),
      // simplepractice: this.tools.includes("simplepractice"),
      // cloudinary: this.tools.includes("simplepractice"),
      logo : cloudinaryCore.url('https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680548615/nathanWalkerPortfolio/NN_bglix1.png'),
      toolList : {
        // construct tool list from tools - passed in names
      },
    }
  },
  name: 'ToolBox',
  props: ["tools", "services"],
}
</script>

<style scoped lang="scss">
@import "../assets/styles/mooncalf.scss";
  .note-card-container {
    background-color:white;
  }
  .note-card {
    background-color:yellow;
    box-shadow: 10px 10px lightblue;
  }
  .tool-box {
    background-color:white;
  }
  .content {
    padding-left:13%;
    padding-right:13%;
    background-color:white;
  }
</style>