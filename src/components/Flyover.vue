<template>
  <div class="flyover">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1698436259/nathanWalkerPortfolio/betterTogether_ftnrpx_nwhtwu.jpg'
      title="Flyover Counseling"
      text="
        Founded in 2018, Flyover Counseling is an full remote counseling agency.
        <br><br>
        I started Flyover with my wife to provide her with a remote employment option. Flyover has since grown to employ two counselors and one support staff.
      "
    ></StudyBanner>
    <ToolBox
      tools="['photoshop', 'figma', 'vscode', 'vuejs', 'ads', 'analytics', 'tags', 'optimize', 'github']"
    ></ToolBox>
    <ContentColumn>
      <!-- <div style="padding-top:127px"></div> -->
    <TextBlock
      title="Context"
      subtitle="April 2018"
      text="
        Remote employment was a squad goal. For my squad, this meant starting an online counseling agency - my wife was a mental health therapist. Even now, acceptable online counselor jobs remain in short supply.
        <br><br>
        Insurance reciprocity laws had just reached Kansas. This meant insurance companies had to reimburse telehealth at the same rate as in person treatment.
        <br><br>
        Before COVID, teletherapy could be a hard sale. Potential customers dismissed it out of hand.
        We were starting from zero - no customers, no presence.
        <br><br>
        The new laws made success a very realistic goal. We had the skillsets covered. What we did not have was a plan.
      "
    ></TextBlock>
    <!-- <PullQuote
      text='Do it. Then do it again.'
    ></PullQuote> -->

    <TextBlock
      title="My Role"
      contrast="true"
      text="
        I launched and led the venture. Defined the product. I wrote the business plan, designed and implemented our web presence. I built, measured, and optimized the customer acquistion funnel.
        <br><br>
        I remove all blockers for delivery of mental health counseling to users and delivery of users to mental health counselors.
      "
    />
    <TextBlock
      title="The change we wanted"
      subtitle="Flyover Objective"
      text="
        We needed Flyover to provide work from home, self-empowering employment.
        <br><br>
        Flyover would become a secular evidence based counseling resource but first it needed a steady stream of clients.
      "
    />
    <TextBlock
      title="Metrics That Mattered"
      subtitle="Mission Key Results"
      text="
        Quantitatively, I was done when all desired hours were sold to clients within our target demographic.
        <br><br>
        Qualitatively, I was done when the counselors say, 'Best job ever!'
        They knew who their clients are - I needed to find them.
      "
    />
    <TextBlock
      title="Validate the Market"
      subtitle="Objective"
      text="
        First thing was first, I had to make sure we weren't wasting time.
        <br><br>
        I had to prove the market existed. Flyover needed a customer.
      "
    />
    <TextBlock
      subtitle="Key Result"
      text="
        My objective would be measurably complete when Flyover had billed the sale of one hour of counseling.
      "
    />
    <!-- <ImageBox
      caption="Tools Depended On"
      :tools=tools
    ></ImageBox> -->

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
    <!-- <TextBlock
      title="My process"
      subtitle="Some call it double diamond"
      text="
        Educate, Execute, Evaluate. Repeat. Do it, do it again. Then stop as soon as possible.
        <br><br>
        Put simply - iterate. Fancier names include Agile, Kanban and Double Diamond. The essence is Agile.
      "
    ></TextBlock> -->
    <!-- <TextBlock
      title="Metrics That Matter"
      subtitle="Key Results"
      text='
        The objective was a full, scalable practice. To stop as soon as possible I needed to establish what it meant to be done.
        I established two measurable goals - one quantitative, one qualitative. I also established a quantitative and qualitative minor goal. 
        Major goals are the finish line, minor goals are the next step.
      '
    ></TextBlock>
    <NoteCard
      :cards="[
        {
          title: 'Qualifiable Major Goal',
          text: 'Attract target demographic. Are all clients the counselors target demographic?'
        },
        {
          title: 'Quantifiable Major Goal',
          text: 'Sell all hours at target rate. What is our minimum acceptable hourly rate? What is our actual hourly rate?'
        },
        ,
        {
          title: 'Quantifiable Next Goal',
          text: 'Sell an hour of counseling.'
        },
        ,
        {
          title: 'Qualifiable Next Goal',
          text: 'Obtain one customer from target demographic.'
        },
      ]"
    ></NoteCard> -->
    <PullQuote
      text='What I found - was unicorns.'
    ></PullQuote>
    <TextBlock
      title="Googley Eyes"
      subtitle="Market Research"
      text='
        I educated myself as most eventual customers users would - I googled "counselors near me". 
        I expected local brick and mortar private practices, but what I found - was unicorns.
        <br><br>
        The market was chock full of venture funded startups. Mental health counseling was getting the SaaS treatment.
        <br><br>
        I discovered another major market player - directory services. The market was inundated with established directories and many up and comers. These ranged from behemoths, like Psychology Today, to niche players, like Secular Therapy Project.
        <br><br>
        The presence of unicorns was enough for me to consider the market validated. But was their room for me?
      '
    ></TextBlock>
    <ImageBox
      :images=unicornImages
      caption=""
      columns="3"
    ></ImageBox>
    <TextBlock
      title="Competitive Analysis"
      subtitle="SWOT"
      text="
        What else can I say? I went to business school and at business school they teach you to do SWOT analysis.
        <br><br>
        This one reveals an unforeseen opportunity that we then make use of.
      "
    ></TextBlock>
    <NoteCard
      title="SaaS Competition"
      cardColumns="6"
      :cards="[
        {
          title: 'Strengths'
,          text: '<ul><li>Venture Capital<li>Multi-Discipline Teams<li>Celebrity Advertisement<li>Advertising Budget<li>Low Barrier to Entry for Counselors<li>Easy Side Gig</ul>'
        },
        {
          title: 'Weaknesses',
          text: '<ul><li>Model undermines counseling relationship leading to poor outcomes<li>Exploited Workers offer poor service.<li>Attract bad clients<li>Cash only (temporary)</ul>'
        },        
        {
          title: 'Opportunities'
,          text: '<ul><li>Undercut traditional counseling<li>Develop new technology<li>24/7 availability<li>International Reach<li>Offer diverse counselors</ul>'
        },
        {
          title: 'Threats',
          text: '<ul><li>Ethical inability to control relationship.<li>Exploited, poachable work force</ul>'
        },
      ]"
    ></NoteCard>
    <NoteCard
      title="Traditional Agency"
      cardColumns="6"
      contrast="true"
      :cards="[
        {
          title: 'Strengths'
,          text: '<ul><li>Established, expected model<li>Physical location.</ul>'
        },
        {
          title: 'Weaknesses',
          text: '<ul><li>Overhead<li>Geographically bound</ul>'
        },        
        {
          title: 'Opportunities'
,          text: '<ul><li>Offer remote as addon</ul>'
        },
        {
          title: 'Threats',
          text: '<ul><li>Remote offers no commute for clients<li>Remote offers time flexibility for clients<li>Poachable Staff</ul>'
        },
      ]"
    ></NoteCard>
    <NoteCard
      title="Our heroes - Flyover Counseling"
      cardColumns="6"
      :cards="[
        {
          title: 'Strengths'
,          text: '<ul><li>No weak links<li>Peanuts for overhead</ul>'
        },
        {
          title: 'Weaknesses',
          text: '<ul><li>Small team == no redundancy<li>Bootstrap funding</ul>'
        },        
        {
          title: 'Opportunities'
,          text: '<ul><li>Copy Strategy<li>Paid Learning Available<li>International Clients</ul>'
        },
        {
          title: 'Threats',
          text: '<ul><li>Insurance Dependence<li>Established agencies going remote<li>Venture Capital Marketing Reach</ul>'
        },
      ]"
    ></NoteCard>
    <TextBlock
      title=""
      subtitle="Experimentation"
      text="
        As an experiment, we began offering services through BetterHelp and started accepting clients. 
        This allowed the counselor to validate two potentially venture ending doubts. 
        <br><br>
        The counselor wanted to validate online modalities for themself. If they felt online therapy was not an effective modality - we would abort the business plan.
        If they had determined online just wasn't for them - we would stop.
        <br><br>
        As a result of this experiment - we had found a customer. We sold one hour of online therapy.
      "
    ></TextBlock>
    <PullQuote
      text='Getting fat running Lean!'
    ></PullQuote>
    <TextBlock
      title="One Down Infinity to Go"
      subtitle="First Objective Complete"
      success="true"
      text="
        By selling one hour as a 1099 worker through our competitor's platform - Flyover had achieved it's first quantifiable goal. We had sold one hour of online mental health counseling.
        <br><br>
        Furthermore - we had reached it by developing nothing. Even better - we got paid. This was a huge success of my favorite type.
        <br><br>
        We were getting fat running Lean!
      "
    ></TextBlock>
    <TextBlock
      title="How to catch a fish"
      subtitle="Beta Objective"
      text="
        Our first objective was complete. Selling hours through a third party, however, was not ideal. That was contract work - not workplace freedom.
        <br><br>
        I needed to acquire a customer through Flyover. There is no reason to perpetually give money to a middleman in the therapy transaction.
      "
    />
    <TextBlock
      subtitle="Beta Key Result"
      text="
        Acquire a new customer that finds the brand through an ad, schedules a 20 minute free consult, and converts to paying customer.
        <br><br>
        Measure during consultation with, 'How did you find us?'
      "></TextBlock>
    <!-- Identify the three pillars of work -->
    <TextBlock
      title="The Art of Prior Art"
      subtitle="Asset generation"
      text='
        SaaS-style corporations, lifestyle businesses, and traditional agencies were all moving into the online space.
        The market was real and my competition was capturing clients. 
        <br><br>
        I chose BetterHelp and TalkSpace as quality targets from the SaSS domain.
        I would do what they did - but worse! I am not a venture capital funded team of design geniuses. 
        <br><br>
        Evaluating agency websites was more difficult. Positive examples were tough to identify - I had no access to lifestyle business data.
        Instead I found negative examples by monitoring online groups - people who were struggling are very vocal in calls for help.
        <br><br>
        My evaluation yielded commonalities.
        I broke these down into stories and then broke the stories into requirements.
        When I finished my quantitative requirements, my qualitative stories should reflect the user experience.
      '
    ></TextBlock>
    <NoteCard
      cardColumns="6"
      :cards="[
        {
          title: 'Landing Story',
          text: 'As a user, I encounter a splash screen. It has interface elements of the sort they are used to.'
        },
        {
          title: 'Splash Story',
          text: 'As a user, I encounter overlay text on the splash screen. The text calls attention a benefit of counseling.'
        },
        {
          title: 'Action Story ',
          text: 'As a user, I can schedule a session by pressing a button. The button is highlighted by the composition to pull the eye.'
        },
        {
          title: 'Story Requirements',
          text: 
          '<ol><li> Select and format splash image.' +
          '<li> Write and layout overlay text.' +
          '<li> Layout call-to-action button.' +
          '<li> Establish editor to live toolchain.' +
          '<li> Implement call-to-action.' +
          '<li> Select font. </ol>'
        }

      ]"
    ></NoteCard>
    <TextBlock
      title="24 hours to launch"
      subtitle="Lean MVP"
      text="
        With my requirements in place, I moved quickly to create the MVP.
        I spent very little time worrying about the content all of my time worrying about the form.
        As an iterative creator, I had little expectation of hitting a home run, I just needed a starting point.
        <br><br>
        After launch, I was able to validate usability by asking existing customers to book their next appointment through the interface.
      "
    ></TextBlock>
    <ImageBox
      :images=mvpImage
      columns="12"
      caption="
        The content was replaced in short order but the tech stack remains intact to this day.
        I still use the vue framework - I like it's focus on single file pages.
        I publish from my main branch on Github.
        Netlify detects changes and automatically publishes them.
        My images are served from Cloudinary in optimal formats.
        I love these services!
      "
    ></ImageBox>
    <TextBlock
      title="Artificial Interest"
      subtitle="Marketing"
      text="
        The website was built, it was time to find customers.
        This meant advertising.
        <br><br>
        Using the webtools SpyFu and FaceBooks Business Manager, I looked at all ads run by my competitors.
        These allowed me to see the frequency of each ad as well as the duration of it's run.
        I assumed a high volume and long duration indicated success on that companies internal metrics.
        <br><br>
        Using these ads as reference I brainstormed paraphrased copy and combed stock photography for ads.
        I created a text-based campaign for google ads and a display campaign for Facebook.
      "
    ></TextBlock>
    <ImageBox
      title="Ads That Failed"
      :images=failedAdsImages
      :columns="4"
      mistake="true"
      caption="
        These Facebook ads were total failures.
        Was it the outbound nature of Facebook ads? 
        Or was it the cringe font choice and overlay design.
        I will never know. Other marketing channels performed so well it simply made sense to drop the lowest performer.
      "
    ></ImageBox>
    <PullQuote
      text="Quite fortunately, everything was terrible."
    ></PullQuote>
    <TextBlock
        title="Best Check Yourself"
        subtitle="Analytic Iteration"
        text="
          I established metrics for ad performance, directory performance, website performance, and most difficultly - the consultation.
          An ongoing challenge is correlating digital measurement to actual experience. 
          <br><br>
          Whether a measured event translated to an actual event is a very difficult thing to track. An email or call can be initiated by the click of a button - and canceled with one as well.
          <br><br>
          For ad and directory performance I relied on built in tools from the providers. For website performance I built custom metrics on an as needed basis. For the consultation, I had the counselors ask how the client found us and record it in a spreadsheet.
          <br><br>
          Quite fortunately, everything was terrible. I'd found some metrics to improve!
        "
    ></TextBlock>
    <TextBlock
        title="Moving away from minimum"
        subtitle="Design"
        text="
          I had a web presence that sucked - it was time to improve it. I moved into designing using Figma.
          <br><br>
          I established BetterHelp and my favorite private practice site as quality targets. I made a sketch in Figma before moving directly into coding.
          <br><br>
          My design copied my competition by having multiple pages - however, my end result is a single page site. I keep it simple and solved my problems as they presented themselves - multiple pages was never the opportunity hypothesis that made sense. So I never made them!
        "
      ></TextBlock>
      <ImageBox
        :images=figmaSketchImage
        columns="12"
        caption="
          I used Figma to sketch, then I moved into designing with code. The limitations and errors in the coding process are a wellspring of inspiration. Constraints are fuel for creativity.
        "
    ></ImageBox>

    <TextBlock
        title=""
        subtitle="Beta Objective Complete"
    />

    <TextBlock
      title=""
      subtitle="Visualization"
      text="I established my user's journey from beginning to end as my conversion funnel. By creating a discrete funnel, I could focus on measuring and optimizing each step."
    ></TextBlock>
    <NoteCard
      title="Conversion Funnel"
      :cards="[
        {
          title: 'Discovery',
          text: 'A potential client discovers us through a search advertisement, a directory search, an organic search, or personal recommendation.'
        },
        {
          title: 'Encounter',
          text: 'The user encounters our web presence - a directory listing or the website.'
        },
        {
          title: 'Contact',
          text: 'The user initiates contact. A phone call, an email, or a consult scheduled via the website.'
        },
        {
          title: 'Reply',
          text: 'The counselor responds via medium of contact - a phone call, an email, or accepting the requested consult.'
        },
        {
          title: 'Consultation',
          text: 'The user and counselor meet in a 20 minute video call and decide whether to proceed.'
        },
        {
          title: 'Paperwork',
          text: 'The user completes mandatory paperwork before the first session.'
        },
        {
          title: 'First Session',
          text: 'The user, now client, shows up to the first session. Conversion complete!'
        },
      ]"
    ></NoteCard>
    <br><br>
    ESTABLISH OF USER FUNNEL
    RE-ESTABLISH CONTEXT
    <br><br>

    <NoteCard
      title="Funnel Leaks"
      :cards="[
        {
          title: 'Discovery Problems',
          text: 'Our directory listings had two issues. Views to contacts was low. And contacts were often bad fits.'
        },
        {
          title: 'Encounter, Contact Problems',
          text: 'Potential clients were looking at our website - but the bounce rate was nearly 100%! <br><br> Spoiler : I was ignorant. Bounce rate was not an informative metric (yet).'
        },
        {
          title: 'Reply, Consultation Problems',
          text: 'Converting leads to clients was not performant. Cash Client consultations were not converting at all. Insurance clients were more successful but anything.<br><br> One counselor was failing during the free consultation - the other was failing to even schedule the consultation.'
        }
      ]"
    ></NoteCard>
    <TextBlock
      title="Love Letters"
      subtitle="Hypothesis"
      text="
        I hypothesized improving our copy would lead to improvements in all 3 problematic measurements. In particular, copy that referenced the counselor. Directory listings were exclusively counselor specific messaging and on the website it was prominent.
        <br><br>
        I predicted this would help directory performance by appealing to more customers. I predicted this would improve bounce rate by better engaging customers. I predicted this would improve lead conversion because our leads would more often be good fits.
      "
    ></TextBlock>
    <TextBlock
      subtitle="Action"
      childBlock="true"
      text="
        I had the counselors write a love letter to their favorite clients. I asked for raw stream-of-consciousness thoughts praising the client directly and the pride they felt in the work they had done with them.
        <br><br> 
        I used these love letters as source material to write new text about them and their practice.
      "
    ></TextBlock>
    <TextBlock
      subtitle="Result"
      childBlock="true"
      text="
        Directory leads neared perfection. Our target demographic identified us as a good match and non-targeted demographics self-eliminated before contacting us.
        <br><br>
        Insurance lead conversion improved. Cash client converstions remained stagnant.
        <br><br>
        Bounce rate did not improve.
      "
    ></TextBlock>

    <TextBlock
      title="Falling Flat"
      subtitle="Hypothesis"
      text="
        I hypothesized our bounce
      "
    ></TextBlock>
    <TextBlock
      subtitle="Action"
      childBlock="true"
      text="
      "
    ></TextBlock>
    <TextBlock
      subtitle="Result"
      childBlock="true"
      text="
        This did not work. I discovered my ignorance about what bounce rate even was.
      "
    ></TextBlock>

    <TextBlock
      title="Task or Relationship"
      subtitle="Hypothesis"
      text="
        I hypothesized our conversions could be improved by optimizing the consultation. I could not record these sessions. Asking for permission to record was not the way to start a therapeutic relationship.
      "
    ></TextBlock>
    <TextBlock
      subtitle="Action"
      childBlock="true"
      text="
        We discussed contact chains from failed consultation schedulings.
        <br><br>
        I held post-mortems with the counselors immediately after failed consultations.
        <br><br>
        I found similarities between the emails and the consultations. When we opened discussion of payment or - the sale went downhill.
        <br><br>
        I proposed experimenting with never initiating these conversations. Credit Card or insurance information was already gathered during initial client paperwork. If this was a concern - the client would initiate. Otherwise, that information was on the website.
      "
    ></TextBlock>
    <TextBlock
      subtitle="Result"
      childBlock="true"
      text="
        One counselor moved towards a perfect cash consultation conversion.
        <br><br>
        For the other counselors this solved the problem of a lead not turning into a free consultation. They still struggled with the actual conversion.
      "
    ></TextBlock>
      <TextBlock
        title="Fixing bounce rate"
        text="
          I had the counselors conduct a mock consultation with me as the client while the other counselors watched.
          As I feigned a litany of weaknesses, I had an a-ha moment. The successful consultant was focused on relationship building, the others were getting started on assessment.
          <br><br>
          We realized assessment shouldn't start until the first session.
          After this, all counselors began converting at nearly 100%.
        "
      ></TextBlock>


      <TextBlock
        title="One feature to rule them all"
        text="
          I observed very few customers triggering the 25% event. They were staying long enough to not count as a bounce but not long enough to know what we were about.
          <br><br>
          I needed customers to go past the fold. I turned to design to solve this problem. I put an arrow at the bottom of the page that broke my margins and I animated it. 
          This sufficed. Suddenly, most users triggered up to 50% - and over 25% ingested the entire page.
          <br><br>
          Later in development curiousity led me to an even simpler design solution - I made the fold show very less than my margins width on the bottom. 
          This design tension was enough to achieve the same outcome.
        "
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
        title="A/B No Go"
        text="
          Early in this project I used Google tags with Google Optimize to optimize assets. I created diagnosis specific ads and A/B tested them with diagnosis specific copy. My volume was too low to obtain conclusive results. 
          Furthermore, my objective of filling counselor hours was being achieved. It is hard to imagine that a more personal approach would not be more efficient - but it was uncalled for. The objective had been achieved.
        "
      ></TextBlock>
      <TextBlock
        title="The End Result"
        subtitle="Resisting perfection"
        text="
          There are many places to improve but the asset does it's job and it does it well. Without a new objective, I have no reason to update anything.
        "
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
          The fold drops all of our keywords. Some are marketing, some are industry lingo. Educated customers - and most are - should now know exactly who we are.
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
    </ContentColumn>
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
import ContentColumn from '@/components/ContentColumn.vue';

export default {
  name: "Flyover",
  components : {
    // StudyBanner,
    TextBlock,
    PullQuote,
    ImageBox,
    NoteCard,
    ToolBox,
    StudyBanner,
    ContentColumn
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
  @import "@/assets/styles/mooncalf.scss";
  .flyover {
    padding-left:12px;
    padding-right:12px;
  }

</style>
