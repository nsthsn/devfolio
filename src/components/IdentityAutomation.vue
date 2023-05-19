<template>
  <div class="id-auto">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680035062/nathanWalkerPortfolio/betterTogether_ftnrpx.jpg'
      title="Identity Automation"
      text="The goal was an online counseling agency. In 2018, Flyover was just getting started. The company had zero clients and zero footprint.
            To get from here to there the company needed a digital presence - the materials required to pull customers in as well as the tools the counselors needed to do their work.
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
