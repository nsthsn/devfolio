<template>
  <div class="tool-box contrast-lining">
    <v-row class="content caption" justify="start" align-content="bottom">
      <!-- <v-col cols="12 header-two text-left"> Tools</v-col> -->
      <v-col
        v-if="unity" 
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1698719899/nathanWalkerPortfolio/unity_logo_easmot.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Unity
          </v-col>
        </v-row>
      </v-col>
    
      <v-col
        v-if="photoshop" 
        cols="1"
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
        v-if="illustrator" 
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1698719869/nathanWalkerPortfolio/Adobe_Illustrator_CC_icon.svg_vvxwbs.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Illustrator
          </v-col>
        </v-row>
      </v-col>
    
      <v-col
        v-if="figma" 
        cols="1"
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
        cols="1"
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
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697648880/nathanWalkerPortfolio/Vue.js_Logo_2.svg_gewydx.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Vue.js
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-if="analytics" 
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697648937/nathanWalkerPortfolio/Google-Analytics-Logo_ufr6vq.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Google Analytics
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-if="tags"
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697646208/nathanWalkerPortfolio/google-tag-manager-logo-0A964D3D77-seeklogo.com_smvxej.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Tag Manager
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-if="ads"
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697649099/nathanWalkerPortfolio/google-ads-logo-B4A8680058-seeklogo.com_ubnnl3.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Google Ads
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-if="jira"
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1699467366/nathanWalkerPortfolio/Jira-Icon-Website_swr3ya.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Jira
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-if="github"
        cols="1"
      >
        <v-row>
          <!-- Tool -->
          <v-col cols="12">
            <v-img
              src="https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1700003904/nathanWalkerPortfolio/25231_jl6gfc.png"
            ></v-img>
          </v-col>
          <v-col cols="12">
            Github
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
      analytics: this.tools.includes("analytics"),
      ads: this.tools.includes("ads"),
      tags: this.tools.includes("tags"),
      unity : this.tools.includes("unity"),
      illustrator : this.tools.includes("illustrator"),
      jira : this.tools.includes("jira"),
      github : this.tools.includes("github"),
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
    // background-color:white;
  }
  .note-card {
    background-color:yellow;
    box-shadow: 10px 10px lightblue;
  }
  .tool-box {
    background-color: $blue01;
    color: $highEmphasisLight;
    padding-top: $m1;
    //margin: auto;
    //margin-bottom: $m3;
  }
  .content {
    width: 84.2%;
    margin:auto;
  }
</style>