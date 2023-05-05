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
        Full disclosure : this started as a lifestyle business. The counselor mentioned at the beginning of this story was and quite fortunately remains my wife.
        Starting a business with your spouse is not for the faint of heart. As the study progresses the counselor begins to refer to the group of counselors.
        And sometimes our office manager. I now have many masters!
        <br><br>
        Anyhow, this story begins on a morning like most others in the year 2016 - I was code monkeying away in my pajamas - my wife was preparing for a 45 minute commute.
        She quite mournfully remarked, 'I chose the wrong profession, I want to work in my pajamas.' My response, 'Well, why not?'
        <br><br>
        There were some why nots but as luck would have it they were no longer relevant. The state of Kansas had recently implemented parity laws for online counseling.
        This meant insurance had to reimburse online counseling at the same rate as in person counseling.
        <br><br>
        Can you do online counseling in pajamas? You sure can! Or at least pajama bottoms. As it turns out, full pajamas is quite unprofessional. Or dress shirts are quite unpajama - either reality is definitely true.
        <br><br>
        This was great news. Suddenly, an online half-pajamas agency was viable. 
        Furthermore, there was no competition. Yet. The law had just gone into effect.
        <br><br>
        This also opened up the problem - an online agency needed customers and presence tuned to convert and service customers. 
        Who they were and what they needed - I had no idea.
        But that was okay because knowing wasn't necessary.
      "
    ></TextBlock>
    <TextBlock
      title="My Role"
      text="
        I was in charge of the digital Customer Experience - everything but the counseling itself. 
        Initially I thought this was just market research, marketing, design, and programming. 
        But I also found myself in the role of sales coach, portrait photographer and retoucher, and most importantly - Chief Belief Officer in Chief.
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
          This was a misevaluation from my research. Later I determined the correct keyword was 'human connection'.
          <br><br>
          While the content all got replaced in short order - the technology stack had staying power. It remains in place to this day.
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
        My most performant keyword, however, was a response to the research phase. While religious counseling was widespread, 'secular' as a keyword is almost non-existent.
        <br><br>
        Using these ads as reference I brainstormed new copy and combed stock photography for ads.
        I created a text-based campaign for google ads and a display campaign for Facebook.
        <br><br>
      "
    ></TextBlock>
    <ImageBox
      :images=failedAdsImages
      :columns="4"
      caption="These Facebook ads were total failures.
        Was it the outbound nature of Facebook ads? 
        Or was it the cringe font choice and overlay design.
        I will never know. Other marketing channels performed so well it simply made sense to drop the lowest performer.
      "
    ></ImageBox>
    <!-- Previous two sections are about copying -->
    <TextBlock
        title="Best Check Yourself"
        text="
          The stage was set. It was time to look for trouble.
          I didn't have to look for long - the bounce rate was 96%.
          Customer conversions were non-existent. Perfect! This was a hole I could dig myself out of.
          <br><br>
          Towards this end, I gathered metrics from several sources.
          I evaluated ad performance, directory performance, website performance, and most difficultly - the consultation.
          <br><br>
          Ad and directory performance had metrics built into the tool itself.
          Directories must prove their efficacy. They know this. Point this out and get 6 months to a year of free membership.
          My written ads were responsive. I could assume that heavily shown phrases performed well and seldom shown phrases poorly.
          Keyword performance feedback was also front and center. A daily task was seeing what phrases brought customers to the site and tuning keywords appropriately.
          <br><br>
          To fine tune the website and the consultation, however, I would need to build my own measurements.
          <br><br>
          Default website metrics helped to evaluate ads and directories as well. 
          I could segment behaviour by channel and see how users from that channel performed.
          The consultation also provided a key piece of evaluation.
          I had the counselors ask the customer, 'How did you find us?'.
          <br><br>
          These information sources let me fine tune the marketing portion of my product equation.
          However, it was quite impossible to ever see the complete puzzle.
          Customers often respond to market presence after being exposed several times.
          Some customers engaged in non-trackable behaviour - for example, they hand dialed the number directly from the google search result.
          The only metric this would engage is the ad display count metric. 
          Other customers would contact us through a directory listing that they directly googled after being served and ad and perusing the website.
          <br><br>
          The initial message was clear though. I needed more page content, better design and a analytics strategy that would allow me to iterate effectively.
        "
    ></TextBlock>
    <TextBlock
      title="Perfecting the Consultation"
      text="
        
      "
    ></TextBlock>
    <ImageBox
      :images=figmaSketchImage
      columns="12"
      caption="
        On solo projects, I use Figma to sketch.
        This was my stopping point before I hopped into coding.
      "
    ></ImageBox>
    <TextBlock
      title="Moving away from minimum"
      subtitle="Graphic Design"
      text="
        I was dissapointed my MVP's success was so lacklustre. I had made a mistake.
        The mistake was carrying an assumption into the project and never challenging it.
        I assumed the art direction should imply progress. No. I had missed the competitor's overwhelming pattern.
        That pattern was - human connection. This mirrors the core of effective therapy - unconditional positive regard.
        <br><br>
        So I built a small studio in my garage. I learned about portrait lighting and posing and took a million selfies.
        Then I invited the counselors into my studio.
        <br><br>
        I love photography. Portraiture was new to me - but I love learning!
        <br><br>
        
      "
    ></TextBlock>
    <TextBlock
      title="Iteration"
      text="
        While building from my Figma sketch I deployed constantly. Every feature I felt was an improvement went live immediately.
        <br><br>
        The bounce rate quickly fell very close to zero. I needed another metric. I needed metrics I could A/B test with.
        Conversion events such as email clicked, phone clicked, and schedule clicked were obvious candidates but fell short of complete measurement.
        Many clients would simply dial the number, type or copy pasta the email. I needed to know more.
        <br><br>
        I implement a coarse grained event to measure page scroll at 25, 50, 75, and 100 percent.
        Consumption of the page scroll would also serve as a conversion type event.
        <br><br>
        I added 
      "
    ></TextBlock>
    <TextBlock
      title="Sticking the landing"
      text="In this section talk about A/B testing using Google Optimize."
    ></TextBlock>
    <ImageBox
      :images=splashProgressImages
      columns="4"
      caption="
        Iterations on Splash pages as it moved from a solo-practice to a multi-counselor practice.
        The theme of 'human connection' is maintained through all.
        Each iteration performed better than the last.
      "
      ></ImageBox>
    <!-- How to copy Marketing -->
  </div>
</template>

<script>
import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import PullQuote from '@/components/PullQuote.vue';
import ImageBox from '@/components/ImageBox.vue';
import NoteCard from '@/components/NoteCard.vue';

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
      ],
      splashProgressImages: [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682909918/nathanWalkerPortfolio/cassieSplash_lx1ze8.jpg',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682909918/nathanWalkerPortfolio/cassieSplashDark_noAlpha_k4rwxy.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1682909918/nathanWalkerPortfolio/betterTogether_dxg7ie_khzaac.jpg'
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
