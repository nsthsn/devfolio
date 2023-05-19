<template>
  <div>
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680035062/nathanWalkerPortfolio/betterTogether_ftnrpx.jpg'
      title="OMG Tangram"
      text="
        A mobile tangram game.
      "
    ></StudyBanner>
    <ImageBox
      :images=mainMenuVideo
      :columns="12"
      caption='
        Step one of the First Time User Experience. The must player must tap the main screen. 
        This metric was usually met. An early source of 1-star ratings was a bug on the Galaxy 6. 
        Bypassed by me and then fixed by them I had dozens on 1-stars. 
        The loading screen would never display due to a graphics error. Rating was temporarily trashed.
      '
    ></ImageBox>
    <ImageBox
      :images=squareTutorialVideo
      :columns="12"
      caption='
        Step one of the First Time User Experience. The must player must tap the main screen. 
        This metric was usually met. An early source of 1-star ratings was a bug on the Galaxy 6. 
        Bypassed by me and then fixed by them I had dozens on 1-stars. 
        The loading screen would never display due to a graphics error. Rating was temporarily trashed.
      '
    ></ImageBox>
  </div>
</template>


<script>

import StudyBanner from '@/components/StudyBanner.vue';
// import TextBlock from '@/components/TextBlock.vue';
// import PullQuote from '@/components/PullQuote.vue';
import ImageBox from '@/components/ImageBox.vue';
// import NoteCard from '@/components/NoteCard.vue';
// import ToolBox from '@/components/ToolBox.vue';
//import VideoPlayer from '@/components/VideoPlayer.vue';

export default {
  name: "Tangram",
  components : {
    StudyBanner,
    // TextBlock,
    // PullQuote,
    ImageBox,
    // NoteCard,
    // ToolBox,
    //VideoPlayer
  },
  data() {
    return {
      mainMenuVideo : [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1684423898/nathanWalkerPortfolio/tangramloading_yzh8tn.gif'
      ],
      squareTutorialVideo : [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1684424894/nathanWalkerPortfolio/squareTutorial_n9jptg.gif'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>
