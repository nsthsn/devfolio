<template>
  <div>
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680035062/nathanWalkerPortfolio/betterTogether_ftnrpx.jpg'
      title="OMG Tangram"
      text="
        A mobile tangram game.
      "
    ></StudyBanner>
    <TextBlock
      title="Tangram"
      subtitle="The first viral game"
      text="
        Tangram went viral by boat and baggage train in the 1800s. It seems to have originated in China and spread quickly from there.
        By <insert date>, Tangram was everywhere. Tangram books were published in every language in every country.
      "
    ></TextBlock>
    PICTURE OF TANGRAMS
    <TextBlock
      title="OMG Tangram"
      text="
        Tangram is my favorite game. It has an elegance that cannot be matched because it is the simplest thing possible. There is nothing to subtract - adding anything detracts. It is a dissection puzzle par none.
        <br><br>
        OMG Tangram is a love letter. Juvenile at times, but the reviews are clear - the message gets through. People that love tangram love OMG tangram.
        <br><br>
        OMG Tangram succeeded on many levels. The beta version achieved a top 16 finish in Microsofts Dream Build Play contest.
        A South Korean cable show featured it in a segment. It is consistently the highest rated Tangram app on the App store.
        As a demo, it converted 1099 leads to 1099 work consistently.
        <br><br>
        Despite the good news, there was a glaring problem. A single step in the first time user funnel had an unstable success rate.
        For some populations - 50% of users failed. The problem would come and go as the audience composition constantly shifted. One week would yield thousands of Phillipines downloads - Turkey the next.
      "
    ></TextBlock>
    <TextBlock
      title="Overview of FTUE (first-time-user-experience)"
      text="
        Introduce FTUE as a concept but let the following videos do most the talking.
      "
    ></TextBlock>
    <TextBlock
      title="The following is beta footage. Created in the XNA framework with a custom engine for DreamBuildPlay."
    ></TextBlock>
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
        The user has learned to manipulate puzzle pieces and put them in outlines. Now they put it altogether and solve an actual tangram.
      '
    ></ImageBox>

    <TextBlock
      title="Every tutorial step needed to be improved."
      text="
        Talk about A/B testing as an ideal. Talk about working intuitively as a rewarding reality.
      "
    ></TextBlock>
    <TextBlock
      title="Moving from Tell to Show"
      text="
        The design meta shifted from tell towards SHOW. 
      "
    ></TextBlock>
    <TextBlock
      title="The flippin' problem"
      text="
        The rest of the funnel was looking perfect. Better than perfect. Perfect was a 95% pass rate - 5% error is acceptable. 100% in a day was not uncommon for most funnel steps.
        <br><br>
        I still had a flipping problem. Double tap as a gesture was a disaster - the beta FTUE success rate was below 50%.
      "
    ></TextBlock>
  </div>
</template>


<script>

import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
// import PullQuote from '@/components/PullQuote.vue';
import ImageBox from '@/components/ImageBox.vue';
// import NoteCard from '@/components/NoteCard.vue';
// import ToolBox from '@/components/ToolBox.vue';
//import VideoPlayer from '@/components/VideoPlayer.vue';

export default {
  name: "Tangram",
  components : {
    StudyBanner,
    TextBlock,
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
