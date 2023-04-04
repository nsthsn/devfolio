<template>
  <div class="flyover">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg'
      title="Flyover Counseling"
      text="The goal was an online counseling agency. In 2018, Flyover was just getting started. The company had zero clients and zero footprint.
            To get from here to there the company needed a digital presence - the materials required to pull customers in as well as the tools the counselors needed to do their work.
      "
    ></StudyBanner>
    <TextBlock
      title="The Challenge"
      text="The state of Kansas had recently implemented parity laws.
        This meant insurance had to reimburse online counseling at the same rate as in person counseling.
        This was great news. Suddenly, an online agency was viable. Furthermore, there was no competition.
        <br><br>
        This also opened up the problem - an online agency needed customers and presence tuned to convert and service customers. Who they were and what they needed - I had no idea. But that was okay because knowing wasn't necessary."
    ></TextBlock>
    <PullQuote
      text='"What I found - was unicorns."'
    ></PullQuote>
    <ImageBox
      :images=splashImages
      caption="It was the day before taco tuesday and nowhere, I mean nowhere, was a tortilla to be found."
    ></ImageBox>
  </div>
</template>

<script>
import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import PullQuote from '@/components/PullQuote.vue';
import ImageBox from '@/components/ImageBox.vue'

export default {
  name: "Flyover",
  components : {
    StudyBanner,
    TextBlock,
    PullQuote,
    ImageBox
  },
  data() {
    return {
      splashImages: [
        'https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg',
        'https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg',
        'https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg',
        'https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg',
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.flyover {

}
  
</style>
