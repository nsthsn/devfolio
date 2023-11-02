<template>
  <div>
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697826221/nathanWalkerPortfolio/gameIcon_4by5_vpfoj6.png'
      title="OMG Tangram"
      text="
        I love tangram. It is perfect. It's elegance cannot be matched - there is nothing to add, nothing to subtract. OMG Tangram is my love letter to it.
        <br><br>
        OMG Tangram was a finalist in Microsoft's App Star 2013. It was featured on the Korean Cable TV show HungryApp.<br><br> It is consistently the highest rated tangram during it's tenure on any app store.
      "
    >
      <a class='get-it' href='https://play.google.com/store/apps/details?id=com.mooncalf.omgTangram&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class='get-it' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
    </StudyBanner>
    <ToolBox
      tools="['photoshop', 'unity', 'vscode', 'illustrator', 'ads', 'analytics']"
    ></ToolBox>
    <ContentColumn>
      <TextBlock
        title="Context"
        text="
          I was beginning work on my MBA. I decided to supplement my education by starting a business. A blend of book and hands on learning cannot be matched for efficacy.
          <br><br>
          I was inclined towards independent game development - like many of my programming peers an interest in video games was what pulled me into learning to programming.
        "
      >
      </TextBlock>
      <TextBlock
        title="My Role"
        contrast=true
        text="
          I did everything for this project. My role was learning followed by execution.
          <br><br>
          I cut my teeth on user testing, digital art, analytics, agile development, marketing, and refreshed myself on a wee bit calculus sprinkled with linear algebra. 
        "
      ></TextBlock>
      <TextBlock
        title="Passing Go"
        subtitle="Market Research"
        text="
          I was not short on game ideas. Never have been! I'd been participating in game developer communities for many years and had seen firsthand that a great game idea, even great execution, was seldom successful.
          In fact, the one success story I had seen firsthand had done neither of those things. What they had done - was find an underserved market. 
          <br><br>
          I decided to do the same.
        "
      ></TextBlock>
      <NoteCard
        title="Seeing red"
        subtitle=""
        :cards="[
          {
            title: 'High Downloads',
            text: 'I was not creating a market. I was going to enter one and fight for any new customers.'
          },
          {
            title: 'Low Quality',
            text: 'I was a solo developer. I needed competition I could confidently crush technically and artistically. <br><br> My hypothesis : quality could carry me up App Store rankings.'
          },
          {
            title: 'Actual Revenue',
            text: 'I had an interest in revenue. My end goal was not just one app - but a string of them.'
          },
        ]"
      ></NoteCard>
      <TextBlock
        title="The search for inspirado"
        subtitle="Market research"
        text="
          I scoured the Android and Apple app stores looking for inspiration. I played a gazillion mobile games. But I came up empty. Inspirado wouldn't find me until a sometimes freelance client reached out about a new project - could I make a Tangram game for Kinect in two weeks?
          <br><br>
          So I researched. The project did not go forward but I had found a project that fit my criteria.
          <br><br>
          The top versions on the respective marketplaces had over 1 million downloads. I found a blog post from the Apple version where the developer said he had quit his job and was overwhelmed by his apps success.
          <br><br> 
          Even better - they were not the same app! This indicated a low technical capacity. I knew I could surpass their usability and art direction. I knew I could have a bigger audience. I dived deep on Tangram - and I came to understand - Tangram is forever.
        "
      ></TextBlock>

      <TextBlock
        title="a viral first"
        subtitle="Product Research"
        text="
          Tangram went global by boat and baggage train in the 1800s. It seems to have originated in China and spread quickly from there.
          By <insert date>, Tangram was a global phenomenon. Tangram books were published in every language in every country.
          <br><br>
          The great 19th century French artist, was so enamored he created his own book! His beautifully rendered book became my muse.
          <br><br>
          Maybe you recognize the pieces. Perhaps with a smile. It is hard to not feel wonder when these 7 simple shapes form nearly any object.
        "
      ></TextBlock>
      <ImageBox
        :images=gameLoopImages
        :columns="4"
        caption="
          Tangrams are forever. The player unlocks art by completing the puzzle.
        "
      ></ImageBox>
      <TextBlock
        title="Core Game Loop"
        subtitle="something from hooked"
        text="
          My game design was simple - each completed puzzle unlocks a new object in an unfolding scene. This provided an immediate reward towards a long term one.
          New levels unlocked at intervals different than level completion. Later, I would add new puzzle pieces as yet another staggered unlockable.
        "
      >
      </TextBlock>
      <TextBlock
        title="The friends I made"
        subtitle="Establishing Accountability"
        text="
          Independent development is prone to tunnel vision. I established stakeholders (wrong word) in my MBA program by making every school project about my entrepreneurial project. As faculty and students became aware, they became interested. 
          Ten years later, random encounters still generate interest in how the project went.
          <br><br>
          I joined game development meetups, entrepreneurial meetups, and user experience meetups. This provided me with another cohort of people who cared and with expertises different than mine.
        "
      ></TextBlock>
      <ImageBox
        :images=completePuzzleImages
        :columns="6"
        caption="
          Each unlocked reward becomes part of a scene.
        "
      ></ImageBox>
      <NoteCard
        title="Who even plays tangram anyways?"
        subtitle="Market Research"
        :cards="[
          {
            title: 'Store Reviews',
            text: 'I learned users were often parents but just as often adults. Men and women were well represented.<br><br>Tangram was popular in the US but seemed more popular internationally.'
          },
          {
            title: 'Primary Research',
            text: 'I asked people about Tangram. Americans rarely recognized the name but usually recognized the puzzle pieces. Non-Americans frequently knew the name.'
          },
          {
            title: 'Industry Statistics',
            text: 'Like a good MBA student, I consulted industry statistics. Statistics seconded my in-person investigations - women and children were my primary audience but men were not insignificant.'
          },
        ]"
      ></NoteCard>
      <TextBlock
        title="Early Mistakes"
        subtitle="20/20 Hindsight"
        text="
          I had built User Personas but I never built Buyer Personas. This locked my mindset into an ad-driven revenue. In retrospect, this is was my greatest failure on the project.
          <br><br>
          I relied on qualitative results for my Primary Research. Quantitative tracking would have prevented problems down the road. 
          Looking back, my design reflects the problems I would have with my first time user funnel but in the moment - I thought everything was peachy.
        "
      ></TextBlock>
      <TextBlock
        title="Begin as you intend to continue"
        subtitle="Cross Platform development"
        text="
          My first MVP ran on desktop using the mouse. I quickly moved to validate on device. I obtained the worst Windows Phone possible. For development I have a worst device policy. Using the best device obscures performance issues.
          <br><br>
          On device invalidated two aspects of my desktop development. 
          <br><br>
          The UI suffered because it did not compensate for vision being blocked by the finger.
          <br><br>
          The algorithm I used to determine puzzle completion used pixel counting. This was non-performant on device. I had to develop a method of determining overlap of triangles using integrals.
        "
      ></TextBlock>
      <TextBlock
        title="Alpha Testing"
        subtitle="Pre-Release"
        text="
          I alpha tested my game with over a hundred in-person users. I was working on my MBA, volunteering at a home school co-op, and frequenting coffee shops.
          This gave me access to users of all ages, backgrounds, and technology familiarity.
          <br><br>
          I documented a near 100% completion rate for pre-K and retirees.
        "
      ></TextBlock>
      <TextBlock
        title="Mistakes were made"
        subtitle="Leading the User"
        text="
          As in person tester, one must practice their poker fast. I learned this later.
          <br><br>
          During my alpha testing, I was creating outside interaction loops with body language while the user tested for me. These outside interaction loops made me blind to issues I would face later.
        "
      ></TextBlock>

      <TextBlock
        title="Artificial Constraints"
        subtitle="MVP"
        text="
          I like to enter contests. They provide an educated, objective viewpoint that is difficult to surface in face-to-face interactions. I decided to enter Microsoft's Next App Star contest.
          <br><br>
          To make it to the deadline I had to choose a subset of features to implement. I created a tutorial and two levels : one fish themed, the other Egypt themed. 
          <br><br>
          As a top 16 finalist, my entry netted me award money and other prizes. It was also a huge marketing boost. That I was completely unprepared for.
        "
      >
      </TextBlock>

      <TextBlock
        title=""
        subtitle="Analytics"
      ></TextBlock>

      <TextBlock
        title="The One Metric That Mattered"
        subtitle="Analytics"
        text="
          First time user funnel completion was the one metric I cared about. Losing players early is a lose-lose. They don't even know if they like the game yet!
          <br><br>
          I wanted players to experience the game before they decided to quit.
        "
      ></TextBlock>
      <NoteCard
        :cards="[
          {
            title: 'Start Screen',
            text: 'Tap to begin.'
          },
          {
            title: 'Move a tangram',
            text: 'Drag a puzzle piece.'
          },
          {
            title: 'Turn a tangram',
            text: 'Rotate and drag a puzzle piece.'
          },
          {
            title: 'Flip a tangram',
            text: 'Invert, rotate, and drag a puzzle piece.'
          },
          {
            title: 'Solve a Puzzle',
            text: 'Manipulate seven puzzle pieces.'
          },
        ]"
      ></NoteCard>
      <TextBlock
        title="Iterative Improvement"
        text="
          I found problems, theorized solutions and slowly improved the FTUE funnel. The initial steps that didn't work focused on telling. The new high completion steps focus on tell.
          <br><br>
          Show - don't tell. Show and tell if you must but as the following story demonstrates - don't count on it to help.
        "
      ></TextBlock>
      <VideoBox
        image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692815636/nathanWalkerPortfolio/tangram_beta_0_cxzxhe.mp4'
        image-two='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692817390/nathanWalkerPortfolio/demo_1_jjl2ng.mp4'
        columns="6"
        caption-one="
          I liked a lot about this screen. Playtests revealed the tree elements could be distracting. Users would attempt to interact with the trees then want to go back.
          Analytics reported a higher failure rate than I thought possible.
        "
        caption-two="
          This simpler screen never fails. It holds to a new design paradigm - all tangrams for all art. I'd love to remove all text if I did it again.
        "
      ></VideoBox>
      <VideoBox
        image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692816525/nathanWalkerPortfolio/tangram_beta_1_pmufbd.mp4'
        image-two='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692991073/nathanWalkerPortfolio/drag_mzkuek.mp4'
        columns="6"
        caption-one="
          Told.
        "
        caption-two="
          Shown.
        "
      ></VideoBox>
      <VideoBox
        image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692991945/nathanWalkerPortfolio/rotate_beta_rh4g97.mp4'
        image-two='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692991411/nathanWalkerPortfolio/rotate_yd8zeq.mp4'
        columns="6"
        caption-one="
          Complex telling! Complexity is the enemy.
        "
        caption-two="
          Simplified showing. Teach one new thing.
        "
      ></VideoBox>
      <VideoBox
        image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692992458/nathanWalkerPortfolio/flip_beta_qjs05s.mp4'
        image-two='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1692991501/nathanWalkerPortfolio/flip_bauaow.mp4'
        columns="6"
        caption-one="
          Flipping had trouble in person playtesting. This abomination seemed to help. My presence inspired them to try harder to avoid the social shame of failure. 
          <br><br>
          Analytics revealed a huge problem.
        "
        caption-two="
          Better performance. But it reeks. That is a design smell. Why did this step, and this step only, STILL need text?
          <br><br>
          The slower animation certainly helped and putting more polish into it would have been low cost.
        "
      ></VideoBox>
      <TextBlock
        title="There was a flippin' problem"
        text="
          The first time user funnel was looking pnearly erfect. Better than perfect. Perfect was a 95% pass rate - 5% error is acceptable. 100% in a day was not uncommon for most funnel steps.
          <br><br>
          But I still had a flipping problem. A literal flippin' problem. Double tap as a gesture was a disaster - the beta FTUE success rate had been below 50%. The most recent version could dip down to the 70s.
          <br><br>
          Iteration had not fixed it - it had slowed the leak but the leak was still there. Losing 30% of users was a hemmorhage.
        "
      ></TextBlock>
      <TextBlock
        title="Show mockups of flips that didn't work"
        text="
          Show what competition used.
          <br><br>
          Show translation problem.
          <br><br>
          Show slower animation. (didn't try)
          <br><br>
          Add extra piece. Reduces elegance.
        "
      ></TextBlock>
    </ContentColumn>
  </div>
</template>


<script>

import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import ToolBox from '@/components/ToolBox.vue';
import ImageBox from '@/components/ImageBox.vue';
import VideoBox from '@/components/VideoBox.vue';
import NoteCard from '@/components/NoteCard.vue';
import ContentColumn from '@/components/ContentColumn.vue';
//import VideoPlayer from '@/components/VideoPlayer.vue';

export default {
  name: "Tangram",
  components : {
    StudyBanner,
    TextBlock,
    // PullQuote,
    ImageBox,
    VideoBox,
    NoteCard,
    ContentColumn,
    ToolBox,
    //VideoPlayer
  },
  data() {
    return {
      mainMenuVideos : [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1684423898/nathanWalkerPortfolio/tangramloading_yzh8tn.gif'
      ],
      gameLoopImages: [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1693324396/nathanWalkerPortfolio/ss_1_q5iuhz.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1693324396/nathanWalkerPortfolio/ss_2_p7fheq.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1693324396/nathanWalkerPortfolio/ss_3_bdkkfr.png'
      ],
      mainMenuCaptions : [
      'Step one of the First Time User Experience. The must player must tap the main screen. This metric was usually met. An early source of 1-star ratings was a bug on the Galaxy 6. Bypassed by me and then fixed by them I had dozens on 1-stars. The loading screen would never display due to a graphics error. Rating was temporarily trashed.'
      ],
      completePuzzleImages: [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1693325594/nathanWalkerPortfolio/SomethingLost_wzp9er.png',
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1693325531/nathanWalkerPortfolio/egypt_izudko.png',
      ],
      squareTutorialVideo : [
        'https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1684424894/nathanWalkerPortfolio/squareTutorial_n9jptg.gif'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/styles/mooncalf.scss";

  .get-it {
    height: 25px;
  }

</style>
