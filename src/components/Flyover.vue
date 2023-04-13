<template>
  <div class="flyover">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg'
      title="Flyover Counseling"
      text="The goal was an online counseling agency. In 2018, Flyover was just getting started. The company had zero clients and zero footprint.
            To get from here to there the company needed a digital presence - the materials required to pull customers in as well as the tools the counselors needed to do their work.
      "
    ></StudyBanner>
    <!-- ESTABLISH THE PROBLEM -->
    <TextBlock
      title="The Challenge"
      text="
        The state of Kansas had recently implemented parity laws for online counseling.
        This meant insurance had to reimburse online counseling at the same rate as in person counseling.
        This was great news. Suddenly, an online agency was viable. 
        Furthermore, there was no competition. Yet.
        <br><br>
        This also opened up the problem - an online agency needed customers and presence tuned to convert and service customers. 
        Who they were and what they needed - I had no idea. 
        But that was okay because knowing isn't always necessary.
      "
    ></TextBlock>

    <!-- ESTABLISH THE PROCESS -->
    <PullQuote
      text='"Do it, then do it again."'
    ></PullQuote>
    <!-- ESTABLISH SUCCESS METRICS -->
    <TextBlock
      title="Metrics That Matter"
      text='
        Knowing where the finish line is is as important as knowing what the problem is.
        Measurable goals protect against many common mistakes.
        It is a shield against perfectionism and a sword to cut away extraneous work. 
        It is both offense and defense. 
        At anytime we can ask - how can this work raise my metrics?
        Without a measurable goal, we risk being busy and accomplishing nothing.
        <br><br>
        With this in mind I established two measurable goals - one quantitative, one qualitative.
        The quantitative goal : we had a set amount of hours to sell, were they sold?
        The qualitative goal : the counselor had a preferred clientele, were these the customers finding them?
        <br><br>
        For each of these major goals I established a minor goal. 
        Before I sold forty hours a week of counseling, I needed to sell ONE hour of counseling.
        Before the counselor had a caseload of ideal clients, I needed to find ONE ideal client.
      '
    ></TextBlock>
    <NoteCard
      :cards="[
        {
          title: 'Qualifiable Goal',
          text: 'Attract ideal clientele.'
        },
        {
          title: 'Quantifiable Goal',
          text: 'Sell all available counseling hours.'
        }
      ]"
    ></NoteCard>
    <TextBlock
      title="My Process"
      text='
        Educate, Execute, Evaluate. Repeat. Do it, then do it again.
        <br><br>
        Educating myself for this project was a relatively simple task.
        I would investigate exactly as I imagined my users would - by using an online search engine. 
        This investigation would natural double as market research. 
        I was not making a new market, I was entering an existing one.
        <br><br>
        Execution followed from education. Whatever the competition had - I needed to make as well.
        <br><br>
        Measurement would take several forms. 
        While my ultimate goal was converting customers, there would be several metrics I would want to pay attention to on that path.
        Ad analytics, website analytics, counselor and customer feedback would provide these.
        <br><br>
        I knew what I had to accomplish. Other than that, I knew nothing.
        So I did what every one of our future customers would end up doing. I googled "mental health counseling near me".
        I expected were local brick and mortar private practices, but what I found - were unicorns.
        And where there are unicorns there is highly optimized assets sparkling from polish by VC financed geniuses.
        <br><br>
      '
    ></TextBlock>
    <!-- ESTABLISH THE PROCESS -->
    <PullQuote
      text='"What I found - were unicorns."'
    ></PullQuote>

    <!-- Display the unicorns -->
    <ImageBox
      :images=unicornImages
      caption=""
      columns="6"
    ></ImageBox>

    <!-- Identify the three pillars of work -->
    <TextBlock
      title="The Art of Prior Art"
      text='
        I segmented my work into three buckets. First, outbound marketing. 
        Second, the webpage the user would be directed to.
        Finally, the free consultation with the counselor.
        <br><br>
        For outbound marketing and the landing page, I had a clear high probability shot - I could simply copy the competition.
        The customers the competition was capturing were the very same customers I wanted to capture.
        Furthermore, I had high confidence the assets they created were doing a great job.
        The initial consultation, the final step of the conversion pipeline, was harder to copy. 
        I could put myself in the client seat for these scenarios but an in person sale demands personal style.
      '
    ></TextBlock>
    <!-- How to copy Marketing -->
  </div>
</template>

<script>
import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import PullQuote from '@/components/PullQuote.vue';
import ImageBox from '@/components/ImageBox.vue'
import NoteCard from '@/components/NoteCard.vue'

export default {
  name: "Flyover",
  components : {
    StudyBanner,
    TextBlock,
    PullQuote,
    ImageBox,
    NoteCard
  },
  data() {
    return {
      unicornImages: [
        'https://res.cloudinary.com/mooncalf/image/upload/v1680733925/nathanWalkerPortfolio/betterhelp-logo-square_yrx2te.png',
        'https://res.cloudinary.com/mooncalf/image/upload/v1680753950/nathanWalkerPortfolio/Teladoc_Health_Logo_tj4arr.png',
        'https://res.cloudinary.com/mooncalf/image/upload/v1680733925/nathanWalkerPortfolio/TALK_BIG-258a1eaf_k1t1kn.png',
        'https://res.cloudinary.com/mooncalf/image/upload/v1680733925/nathanWalkerPortfolio/download_niamfv.png',
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.flyover {
  background-color:white;
  
}
  
</style>
