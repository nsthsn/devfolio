<template>
  <div class="flyover">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680035062/nathanWalkerPortfolio/betterTogether_ftnrpx.jpg'
      title="Flyover Counseling"
      text="The goal was an online counseling agency. In 2018, Flyover was just getting started. The company had zero clients and zero footprint.
            To get from here to there the company needed a digital presence - the materials required to pull customers in as well as the tools the counselors needed to do their work.
      "
    ></StudyBanner>
    <TextBlock
      title="Context"
      text="
        The year was 2018 and we were starting an online counseling agency. For my wife and me, both of us having remote employment was a primary goal.
        <br><br>
        In 2018, before COVID, online counseling was a hard sell weighted against more conventional in-person therapy. Potential customers dismissed it out of hand.
        We were starting from zero - no customers, no presence.
        <br><br>
        But we had time, we had planned for this - we had a runway.
      "
    ></TextBlock>
    <!-- <TextBlock
      title="Origin Story"
      text="
        It was a 2016. I was code monkeying away in my pajamas - my wife was preparing for a 45 minute commute.
        She lamented her choice of profession - mental health counseling. She also wanted to work in pajamas.<br>
        <br>
        Well, why not? Can you do online counseling in pajamas?
        <br><br>
        No, you cannot. Pajama bottoms - yes. Pajama tops - no.
        <br><br>
        Half-pajamas was the best we could do. Half-pajamas was halfway - halfway was good enough.
      "
    ></TextBlock> -->
    <PullQuote
      text='Do it. Then do it again.'
    ></PullQuote>
    <TextBlock
      title="My Role"
      text="
        My product - everything but the counseling.
        Market research, marketing, design, programming, and sales coaching. And whatever else.
      "
    />
    <!-- <ImageBox
      caption="Tools Depended On"
      :tools=tools
    ></ImageBox> -->
    <ToolBox
      tools="['photoshop', 'figma', 'vscode', 'vuejs']"
    ></ToolBox>
    <!-- ESTABLISH THE PROCESS -->

    <!-- ESTABLISH SUCCESS METRICS -->
    <!-- <TextBlock
      title="Bootstrapping Success"
      text="
        The very first thing I did - was push for the counselor to go back to school. A local university had a robust community entrepreneurship program and we decided to utilize it.
        We used the program to obtain bi-weekly feedback as our business plan progressed. Working through the coursework forced us to develop common business language. We also gained access to community mentors.
        <br><br>
        All o
      "
      
    >
    </TextBlock> -->
    <TextBlock
      title="My process"
      text="
        Educate, Execute, Evaluate. Repeat. Do it, do it again. Stop as soon as possible.
        <br><br>
        Simply - iterate. Fancier names include Agile, Kanban and Double Diamond.
      "
    ></TextBlock>
    <TextBlock
      title="Metrics That Matter"
      text='
        To stop as soon as possible - you must know what it means to be done.
        I established two measurable goals - one quantitative, one qualitative.
        Achieving these was the finish line.
      '
    ></TextBlock>
    <NoteCard
      :cards="[
        {
          title: 'Qualifiable Major Goal',
          text: 'Attract target demographic. Are all clients a good fit?'
        },
        {
          title: 'Quantifiable Major Goal',
          text: 'Sell all hours at target rate. What is our minimum acceptable hourly rate? What is our actual hourly rate?'
        }
      ]"
    ></NoteCard>
    <PullQuote
      text='What I found - were unicorns.'
    ></PullQuote>
    <TextBlock
      title="Market Validation"
      text='
        I educated myself as most eventual customers users would - I googled "counselors near me". 
        This as a user investigation naturally doubled as market research. Anyone I saw was a competitor!
        <br><br>
        I expected local brick and mortar private practices, but what I found - were unicorns.
        And where there are unicorns there is highly optimized assets sparkling from polish by VC financed geniuses.
        <br><br>
        I also uncovered another major market player - directory services. The biggest of these was Psychology Today.
        Investigation revealed niche players as well.
        <br><br>
        The presence of unicorns was enough for me to consider the market validated. But was their room for me?
      '
    ></TextBlock>
    <!-- ESTABLISH THE PROCESS -->
    <!-- Display the unicorns -->
    <ImageBox
      :images=unicornImages
      caption=""
      columns="6"
    ></ImageBox>
    <TextBlock
      title="Competitive Analysis"
    ></TextBlock>
    <NoteCard
      :cards="[
        {
          title: 'Strengths'
,          text: 'As a user, I encounter a splash screen.'
        },
        {
          title: 'Weaknesses',
          text: 'As a user, I encounter overlay text on the splash screen.'
        },
      ]"
    ></NoteCard>
    <NoteCard
      :cards="[
        {
          title: 'Opportunities'
,          text: 'As a user, I encounter a splash screen.'
        },
        {
          title: 'Threats',
          text: 'As a user, I encounter overlay text on the splash screen.'
        },
      ]"
    ></NoteCard>
 
    <!-- Identify the three pillars of work -->
    <TextBlock
      title="The Art of Prior Art"
      text='
        THe competition took many forms.
        I found SaaS-style corporations, lifestyle businesses, and traditional agencies moving into the online space.
        This was great. The market was real and my competition was capturing clients. Rather than exercise creativity, I could identifty and copy their successful assets.
        <br><br>
        I could trust their web design. The elements they emphasized I should emphasize.
        I chose BetterHelp and TalkSpace as quality targets from the SaSS domain.
        As venture capital-backed companies, I had faith in their UX and marketing teams.
        <br><br>
        I would do what they did - but worse! I am not a venture capital funded team of geniuses. 
        <br><br>
        Evaluating agency websites was more difficult. Positive example was tough to identify - I had no access to lifestyle business data.
        Instead I found negative examples by monitoring online groups - people who were struggling are very vocal in calls for help.
        <br><br>
        My evaluation yielded three commonalities.
        These became my requirements.
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
          As an iterative creator, I had little expectation of hitting a home run, I just needed a starting point.
          <br><br>
          I still had plenty of time to make mistakes. For example, for my aesthetic choice I focused on the keyword 'forward progress'.
          This was a misevaluation from my research. Later I determined the correct keyword was 'human connection'.
        "
    ></TextBlock>
    <ImageBox
      :images=mvpImage
      columns="12"
      caption="
        So much wrong here from a content standpoint. The content was replaced in short order but the tech stack remains intact to this day. And the one used for this website.
        I still use the vue framework - I like it's focus on single file pages.
        I publish from my main branch on Github.
        Netlify detects changes and automatically publishes them.
        My images are served from Cloudinary in optimal formats.
        I love these services!
      "
    ></ImageBox>
    <TextBlock
      title="Artificial Interest"
      text="
        The website was built, it was time to find customers.
        This meant advertising.
        While specific phrases are protected under copyright, altered phrases are not.
        <br><br>
        Using the webtool SpyFu and FaceBooks Business Manager, I looked at all ads run by my competitors.
        These allowed me to see the frequency of each ad as well as the duration of it's run.
        I assumed a high volume and long duration indicated success on that companies internal metrics.
        <br><br>
        Using these ads as reference I brainstormed new copy and combed stock photography for ads.
        I created a text-based campaign for google ads and a display campaign for Facebook. I copied keywords directly using SpyFu.
        <br><br>
      "
    ></TextBlock>
    <ImageBox
      :images=failedAdsImages
      :columns="4"
      caption="
        These Facebook ads were total failures.
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
          <br><br>
          Towards this end, I gathered metrics from several sources and found problems manifesting in all of them.
          I evaluated ad performance, directory performance, website performance, and most difficultly - the consultation.
        "
    ></TextBlock>
    <NoteCard
      :cards="[
        {
          title: 'Directory Performance',
          text: 'Poor directory performance indicated problems in the copy - it was not connecting with the customer.'
        },
        {
          title: 'Bounce Rate',
          text: 'A high bounce rate indicated that even the customers that were arriving were not finding what they expected. A low conversion rate on ads seconded this diagnosis. The wrong customers were arriving with the wrong expectations. '
        },
        {
          title: 'Conversion Rate',
          text: 'A low conversion rate during our free consultation was a problem in salesmanship.'
        }
      ]"
    ></NoteCard>
    <TextBlock
      title="Converting Cash Clients. Perfecting the Consultation"
      text="
        Cash client consultation conversions were terrible. Cash clients are the best kind of clients.
        In many other industries I could investigate by recording and watching the consultations. Not in counseling. Asking for permission to record was the wrong start to a therapeutic relationship.
        <br><br>
        To solve this I initiated a post-mortem immediately following every consultation. Immediately after the session - we would talk about it.
        I identified a pattern where the counselor started the consultation by attempting to justify the pain points were okay for the consumer.
        For instance, attempting to prove the efficacy of online counseling versus in-person counseling or justifying the price.
        <br><br>
        We learned to not negotiate against ourselves, this meant saving hard conversations for last - or not at all.
        One counselor started converting at 100% but others were still floundering. 
        <br><br>
        A second intervention was required.
      "
    ></TextBlock>
    <TextBlock
      title="Spreading Expertise"
      text="
        I held a training session where I had the counselors conduct a mock consultation with me as the client.
        As the group watched we had an a-ha moment. The successful consultation was focused on relationship building, the unsuccessful ones were getting started on assessment.
        <br><br>
        We realized assessment shouldn't start until the first session.
        After this, all counselors began converting at nearly 100%.
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
        I copied the most common banner I saw on venture capital and lifestyle businesses alike - a portrait shot staring directly at the camera.
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
      title="A/B No Go"
      text="
          Early in this project I used Google tags with Google Optimize to optimize assets. Our volume was too low even early on.

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
      <TextBlock
        title="The End Result"
      ></TextBlock>
      <ImageBox
        :images=splashImage
        caption="
          The top-bar contains everything a returning or direct customer needs. The splash evokes human connection between the duo framed in the composition by nature and architecture.
          A slogan and an invitation to a new customer to schedule their free consult. Included again is the number and email address - all the resources the new client need.
          The same thing restated twice - even the buttons do exactly the same thing.
        "
      ></ImageBox>
      <ImageBox
        :images=foldImage
        caption="
          The fold drops all of our keywords. Some are marketing, some are industry lingo. Educated customers - and most are - know exactly who we are.
          <br><br>
          I gently indicate to them that the service is online only. An early time waster was customers that wanted in person only.
          Constantly repeating some version of 'online only' in this and later copy deterrs most of these customers.
        "
      ></ImageBox>
      <ImageBox
        :images=conditionsImage
        caption="
          The fold drops all of our keywords. Some are marketing, some are industry lingo. Educated customers - and most are - know exactly who we are.
          <br><br>
            Hello customer! Let us make absolutely sure you are in the right place. These are the types of issues you might talk about.
            A unicorn will have pages and pages of this stuff for SEO porpoises.
        "
      ></ImageBox>
    <!-- How to copy Marketing -->
  </div>
</template>

<script>
// import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import PullQuote from '@/components/PullQuote.vue';
import ImageBox from '@/components/ImageBox.vue';
import NoteCard from '@/components/NoteCard.vue';
import ToolBox from '@/components/ToolBox.vue';
import StudyBanner from '@/components/StudyBanner.vue';

export default {
  name: "Flyover",
  components : {
    // StudyBanner,
    TextBlock,
    PullQuote,
    ImageBox,
    NoteCard,
    ToolBox,
    StudyBanner
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
      ],
      ToolImages: [
        '',
        '',
      ],
      splashImage: [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1683694417/nathanWalkerPortfolio/splash-2_pskdwa.png'
      ],
      foldImage: ['https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1683694514/nathanWalkerPortfolio/Fold_rrmii2.png'],
      conditionsImage: ['https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1683694307/nathanWalkerPortfolio/conditions-treated_k9bnuw.png'],
      // tools: [
      //   'photoshop',
      //   'figma'
      // ],
    }
  }
}
</script>

<style scoped lang="scss">
.flyover {
  background-color:white;
}
  
</style>
