<template>
  <div>
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697826221/nathanWalkerPortfolio/gameIcon_4by5_vpfoj6.png'
      title="OMG Tangram"
      text="
       I love tangram. It is perfect. It's elegance cannot be matched - there is nothing to add, nothing to subtract. OMG Tangram is my love letter to it.
       <br><br>
       The reviews are clear - my message gets through. People that love tangram love OMG Tangram. It is consistently the highest rated tangram during it's tenure on any app store.
      "
    >
      <a class='get-it' href='https://play.google.com/store/apps/details?id=com.mooncalf.omgTangram&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class='get-it' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
    </StudyBanner>
    <ContentColumn>
      <TextBlock
        title="a viral first"
        text="
          Tangram went global by boat and baggage train in the 1800s. It seems to have originated in China and spread quickly from there.
          By <insert date>, Tangram was everywhere. Tangram books were published in every language in every country.
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
        text="My game design was simple - each completed puzzle unlocks a new object in an unfolding scene. Simple but heavy on asset creation and creativity."
      >
      </TextBlock>
      <ImageBox
        :images=completePuzzleImages
        :columns="6"
        caption="
          Each unlocked reward becomes part of a scene.
        "
      ></ImageBox>
      <TextBlock
        text="Generating puzzles and art on theme was a large project. No examples could be found in the competition."
      >
      </TextBlock>
      <TextBlock
        title="Who plays tangram anyways?"
        subtitle="I am the User"
        text="
          My mom gave me tangrams as a child.  I remember exploring it very distinctly.
          <br><br>
          It turns out moms and dads are still giving their children tangrams. A surprise - it happened to me (again!) - is mom and dad start playing tangram too.
          <br><br>
          It is a very elegant dissection puzzle game. Worthy of it's capacity to win over modern gamers. It will never be replaced. I will argue this - but not here.
          <br><br>
          Market and anecdotal research revealed I could expect a lot of pre-reading users. I could expect users of all ages and nationalities but a majority would be women.
        "
      ></TextBlock>
      <TextBlock
        title="Alpha Testing"
        text="
          I was able to alpha test my game with over a hundred in-person users. At the time I was working on my MBA, volunteering at a home school co-op, and frequenting coffee shops.
          I user tested in all age ranges. 
        "
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
// import PullQuote from '@/components/PullQuote.vue';
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
    ContentColumn
    // ToolBox,
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
