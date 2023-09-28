<template>
  <div class="id-auto">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680035062/nathanWalkerPortfolio/betterTogether_ftnrpx.jpg'
      title="Identity Automation"
      text="
        At Identity Automation, my team rebuilt the front-end from the ground up against a drop-dead deadline. At the same time, we maintained and expanded our legacy code before retiring support.
      "
    ></StudyBanner>
    <TextBlock
    title="Context"
    text="
      RapidIdentity, Identity Automation's core offering, was undergoing a total frontend rewrite and redesign. It had to.
      It was written in Flash and Flash was being deprecated by everyone.  Flash was no longer a viable technology.
      <br><br>
      The company was growing. Revenue was up dramatically. A company had recently been acquired whose technology would dramatically enhance our market reach.
      Things needed done and more contributors were required. An infusion from VC made this all possible.
      <br><br>
      They had resources but they also had an imperative : if their product did not work in a web browser the day Flash was disabled - they had no customers and were in breach of innumerable contracts.
    "
    ></TextBlock>
    <TextBlock
    title="Product"
    text="
      What the product does
    "
    ></TextBlock>
    <TextBlock
    title="My Role"
    text="
      I was hired as a Senior Software Engineer. My primary task was rewriting the companies primary web service.
      Simultaneously, I supported bug and feature requests in the old product. A single scrum team was tasked with the entire front-end rewrite.
      <br><br>
      My responsibilities rapidly grew. I took ownership of the UI but remained in code reviews as a design system approval.
    "
    ></TextBlock>
    <ToolBox
      tools="['photoshop', 'figma', 'vscode', 'vuejs']"
    ></ToolBox>
    image of code estimation poker game
    <TextBlock
    title="Ounces of prevention."
    text="
      As part of our agile process, we created stories and estimated them. We tracked our velocity and knew what a reasonable pace per iteration was.
      Every two weeks, we were able to show new, functional software.
      <br><br>
      We had reliable metrics. We made and estimated stories for the rest of the Rapid Identity plus new technology. We knew for certain we had a problem.
    "
    ></TextBlock>
    <TextBlock
    title="The problem"
    text="
      We had over twice as much work as we could possibly finish.
      <br><br>

    "
    ></TextBlock>
    <TextBlock
    title="Segment by user"
    text="
      Who the users are. What we owe them.
    "
    ></TextBlock>
    <TextBlock
    title="Segment product"
    text="
      What the product does
    "
    ></TextBlock>
    <TextBlock
      title="Segment by stakeholder"
    >
    </TextBlock>

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
