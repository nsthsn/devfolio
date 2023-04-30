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
    <TextBlock
      title="My Role"
      text="
        My role encompassed everything but the counseling itself. 
        This included market research, marketing, design, and programming. 
        Because my job was to do anything left undone, I also found myself in the role of sales coach, portrait photographer and retoucher, and most importantly - Chief Belief Officer.
      "
    />

    <!-- ESTABLISH THE PROCESS -->
    <PullQuote
      text='Do it. Then do it again.'
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
      '
    ></TextBlock>
    <NoteCard
      :cards="[
        {
          title: 'Qualifiable  Major Goal',
          text: 'Attract target demographic.'
        },
        {
          title: 'Quantifiable Major Goal',
          text: 'Sell all hours at target rate.'
        }
      ]"
    ></NoteCard>
    <PullQuote
      text='What I found - were unicorns.'
    ></PullQuote>
    <TextBlock
      title="My Process"
      text='
        Educate, Execute, Evaluate. Repeat. Do it, then do it again.
        <br><br>
        Educating myself for this project was a relatively simple task.
        I investigated exactly as most eventual customers users would - by using an online search engine. 
        This investigation naturally doubled as market research. 
        I was not making a new market, I was entering an existing one.
        <br><br>
        I knew what I had to accomplish. Other than that, I knew nothing.
        I googled "mental health counseling near me".
        I expected were local brick and mortar private practices, but what I found - were unicorns.
        And where there are unicorns there is highly optimized assets sparkling from polish by VC financed geniuses.
        <br><br>
        My research uncovered another important player in the space - directory services. The biggest of these was Psychology Today.
        My investigation revealed niche players as well. 
        Services such as the Secular Therapy project explicitly helped pair non-religious clients and counselors.
        <br><br>

      '
    ></TextBlock>
    <!-- ESTABLISH THE PROCESS -->


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
        Our competitiors took many forms.
        I found SaaS-style corporations, lifestyle businesses, and traditional agencies moving into the online space.
        This was great. Rather than exercise creativity, I identified and copied their successful assets.
        <br><br>
        What I copied fell into two categories : advertisements and web presence. Advertisements I copied from SaaS companies.
        I could trust their budgets and expertise to have found effective ad combinations. 
        This work would have to wait though - first I needed a web presence for the ads to direct to.
        <br><br>
        Web presence would require a dual-pronged approach. I would need to pick and choose from the entire competitive gamut to establish quality targets.
        I chose BetterHelp and TalkSpace as my copy targets from the SaaS domain because their marketing showed up everywhere.
        As venture capital-backed companies, I had faith in their UX and marketing teams.
        <br><br>
        Evaluating agency websites was more difficult. I could certainly be judgemental of their websites.
        But I wanted to back them up with something more substantial than my own opinion.
        I was able to make a quantifiable assessment by attempting to schedule - if a practice had immediate availability, something was wrong.
        <br><br>
        My evaluation yielded three commonalities.
        These became the basis for my requirements.
      '
    ></TextBlock>
    <NoteCard
      :cards="[
        {
          title: 'Landing Splash'
,          text: 'As a user, I encounter a splash screen.'
        },
        {
          title: 'Splash Overlay',
          text: 'As a user, I encounter overlay text on the splash screen.'
        },
        {
          title: 'Call To Action',
          text: 'As a user, I can schedule a session by pressing a button.'
        },
      ]"
    ></NoteCard>
    <NoteCard
        :cards="[
          {
            title: 'Requirements',
            text: 
            '1. Select and format splash image.<br>' +
            '2. Write and layout overlay text.<br>' +
            '3. Layout call-to-action button.<br>' +
            '4. Establish editor to live toolchain.<br>' +
            '5. Implement call-to-action. '
          }
        ]"
    ></NoteCard>
    <TextBlock
        title="24 hours to launch"
        text="
          With my requirements in place, I moved quickly to create the MVP.
          I spent very little time worrying about the content all of my time worrying about the form.
          As an iterative designer, I had little expectation of hitting a home run, I just needed a starting point.
          <br><br>
          I still had plenty of time to make mistakes. For example, for my image choice I focused on the keyword 'upward progress'.
          This was a misevaluation from my research. The correct keyword turned out to be 'human connection'.
          <br><br>
          A lot went right here also. The technology stack I chose is still in place and has provided no reason to replace it.
          I still use the vue framework - I like it's focus on single file pages.
          I publish from my main branch on github. 
          Netlify detects changes and automatically publishes them.
          My images are served from cloudinary in optimal formats.
          I love these services!
        "
    ></TextBlock>
    <ImageBox
      :images=mvpImage
      columns="12"
      caption="
        There is a lot wrong here
      "
    ></ImageBox>
    <TextBlock
      title="Artificial Interest"
      text="
        The website was built, it was time to find customers.
        This meant advertising.
        I leaned heavily and effectively on my competition for this.
        While specific phrases are protected under copyright, altered phrases are not.
        <br><br>
        Using the webtool SpyFu and FaceBooks Business Manager, I looked at all ads run by my competitors.
        These allowed me to see the frequency of each ad as well as the duration of it's run.
        I assumed a high volume and long duration indicated success on that companies internal metrics.
        <br><br>
        I identified performant ads and wrote down every line and copied every image.
        Copy that showed up in multple ads got stars. Copy that was present between competitors got underlined.
        Some copy was clearly irrelevant - the counselor had no interest in '24/7 availability' or 'Text your counselor day or night'.
        <br><br>
        I copied keywords liberally from my competitor's using SpyFu. These had no protection.
        My most performant keyword, however, was a response to 
        <br><br>
        Using these ads as reference I brainstormed new copy and combed stock photography for ads.
        I created a text-based campaign for google ads and a display campaign for Facebook.

      "
    ></TextBlock>
    <ImageBox
      :images=failedAdsImages
      :columns="4"
      caption="These ads failed for multiple reasons. 
        I did a cringe job with overlay text layout and font choice.
        Site metrics revealed the users pulled in were a bad match for our landing content.
        While curious, I never discovered the root cause - a different ad platform gave me more customers than we could handle.
      "
    ></ImageBox>
    <!-- Previous two sections are about copying -->
    <TextBlock
        title="Best Check Yourself"
        text="
          The stage was set. It was time to measure. I gathered metrics from several sources.
          Activity on the website itself was done with Google Analytics.
          Ad measurement was built into the Google Ads.
          Two critical pieces of information were obtained in the initial consultation.
          First, where did the customer come from. Web metrics for our business can never accurately report this.
          Second, the consultation to conversion rate. 
          <br><br>
          It was time to look for trouble.
          I didn't have to look for long - the bounce rate was 96%.
          Customer conversions were non-existent. Perfect.
          It stood to reason that improving my bounce rate would improve customer conversions.
          This was a hypothesis I could work with.
          <br><br>
          There was one way forward - better design, better content. It was Figma time.
        "
    ></TextBlock>
    <ImageBox
      :images=figmaSketchImage
      columns="12"
      caption="
        On solo projects, I use Figma to sketch. Then I finalize the design in code.
        Originally my plan was a multi-page site. No identified competitor had a single page site.
        Iterating goal-to-goal revealed more than one page was superfluous for this project.
      "
    ></ImageBox>
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
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680733925/nathanWalkerPortfolio/betterhelp-logo-square_yrx2te.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680753950/nathanWalkerPortfolio/Teladoc_Health_Logo_tj4arr.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680733925/nathanWalkerPortfolio/TALK_BIG-258a1eaf_k1t1kn.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680733925/nathanWalkerPortfolio/download_niamfv.png',
      ],
      splashImages: [

      ],
      failedAdsImages: [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682432372/nathanWalkerPortfolio/depression00_eik8bs.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682432372/nathanWalkerPortfolio/cycle00_qf87uw.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682432372/nathanWalkerPortfolio/SmilingRedhead_mwm43r.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682432920/nathanWalkerPortfolio/substance00_sljbyx.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682432372/nathanWalkerPortfolio/empowerment00_tmofrp.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682432372/nathanWalkerPortfolio/ClimbYourMountain00_ive1ry.png',
      ],
      mvpImage: [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682545156/nathanWalkerPortfolio/Untitled-2_fmpcuq.png'
      ],
      figmaSketchImage: [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682813981/nathanWalkerPortfolio/figmaSketch_tlsruz.png'
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
