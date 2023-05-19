<template>
  <div class="id-auto">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680035062/nathanWalkerPortfolio/betterTogether_ftnrpx.jpg'
      title="Identity Automation"
      text="
        RapidIdentity, Identity Automation's core offering, was undergoing a total frontend rewrite and redesign. It had to.
        It was written in Flash and Flash was being deprecated by everyone.  Flash was no longer a viable technology.
        <br><br>
        The backend was planning on changing minimally.
        They planned to use the time to incorporate new features from a recent corporate acquisition.
        <br><br>
        The company was growing. Revenue was up dramatically. 
        A first round of venture capital funding was going towards scaling.
      "
    ></StudyBanner>
    <TextBlock
    title="My Role"
    text="
      I was hired as a Senior Software Engineer. My primary task was rewriting the companies primary web service.
      Simultaneously, I had to support bug and feature requests in the old product.
      <br><br>
      When I exited this role, I was maintaining a variety of responsibilities. My job title had shifted to UX Lead.
    "
    ></TextBlock>
    <ToolBox
      tools="['photoshop', 'figma', 'vscode', 'vuejs']"
    ></ToolBox>
    IdentityAutomation
  </div>
</template>

<script>
import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import ToolBox from '@/components/ToolBox.vue';

export default {
  name: "IdentityAutomation",
  data() {
    return {
    }
  },
  components : {
    StudyBanner,
    TextBlock,
    // PullQuote,
    // ImageBox,
    // NoteCard,
    ToolBox,
  },
}
</script>

<style scoped lang="scss">
  
</style>
