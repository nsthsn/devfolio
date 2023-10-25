<template>
  <div class="ludum-dare">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697826373/nathanWalkerPortfolio/communityIcon_4by5_xkos2t.png'
      title="Ludum Dare"
      text="
        I built a team to compete in Ludum Dare - the largest game hack-a-thon. I recruited artists, composers, and programmers to jam with me. I completed 9 Ludum Dare events. My best are shared below.
        <br><br>
        Game Jams allow you to experience the entire product pipeline - from concept to delivery on a tight deadline. On completion, games are juried by your peers to provide feedback.
      "
    ></StudyBanner>

    <ContentColumn>
      <!-- <v-col cols="12"> -->
        <TextBlock
          title="Day One : Analog"
          text="
            The first day is short with only one goal - brainstorm a game design.
            <br><br>
            For this session we are analog only. Whiteboards, sketchbooks, yellow pads, and post-it notes.
            Electronics are a distraction during this meeting. Leave them at home.
            <br><br>
            We know we are done when we all agree. Sometimes this takes an hour, sometimes it takes six hours.
            It has to get done before we can begin the next critical phase - a good night's sleep.
          "
        ></TextBlock>
      <!-- </v-col> -->
      <v-col cols=12>
        <GameCard 
          image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1687388686/nathanWalkerPortfolio/kvetchVideoOne_eshxio.mp4'
          caption-one="I did a little bit of everything on everything. Everyone else kicked ass at their specialties - then I put it all together."
          image-two='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1689183567/nathanWalkerPortfolio/kvetch_video_two_qqjkcd.mp4'
          caption-two="I made the levels and coded the hazards. I love the hand animations I did for this project."
          title='Kvetch A Sketch'
          theme="Ancient Technology"
          team="Andy Gainer (code), Luke Schroder (art, sound fx), Kevin Smith (code), Peter Reid (music)"
          text ='
            The best jam game we ever made. A physics puzzle platformer where you create the platforms by drawing using "ancient technology".
            <br><br>
            We leaned into the theme by imagining a modern mobile game except written for an Etch-A-Sketch. Retro if not ancient technology by modern standards.
            <br><br>
            Our first game design failed - we made it - it sucked. A late jam pivot led to pure awesomeness.
            Despite a glaring late game bug, most players play for 45 minutes.
          '
          playURL="https://www.newgrounds.com/portal/view/887023"
          watchURL="https://www.youtube.com/watch?v=kkOlDKzD1Xw?&t=07m58s"
        ></GameCard>
      </v-col>
      <TextBlock
        title="Day Two : Reality vs Design"
        subtitle="Proof of Concept"
        text="
          On Day 2, we start as early as possible with the goal of everyone starting well rested - we had a long day ahead of us. We have one goal - implement and validate any tech required to implement our gameplay. I make the meals - keeping the team fed and working keeps the team on task. For my team, home cooked meals was novel and welcome.
          <br><br>
          Starting at 8am and ending after midnight is the norm. After dinner, we evaluate reality vs design. This is almost always a pivot. Unknown unknowns always surface in implementing new tech. And we are always implementing new (to us) tech - learning was one of team values.
          <br><br>
          Development is often multi-track. On Kvetch-a-Sketch, one developer worked on using input to dynamically create line like physics objects while another worked on turning line physics objects into pixels with a shader.
          Meanwhile, myself and the artist worked on the UI design and rendering. We generate placeholder graphics for the programmers as needed.
          <br><br>
          We had two end conditions - too exhausted to continue or the tech was ready for our Day 3 focus.
        "
      ></TextBlock>
      <v-col cols=12>
        <GameCard 
          image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1689190633/nathanWalkerPortfolio/emil_video_one_snkonh.mp4'
          image-two='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1689190633/nathanWalkerPortfolio/emily_video_two_iuf6e5.mp4'
          title='Emily vs Everything'
          theme='One Room'
          team="Andy Gainer ( code ), Luke Schroder ( art, sound fx ), Peter Reid ( music )"
          text ='
            Emily has been sent to her room. Bored she pretends it is invaded by ninjas before transforming into a spaceship and a medieval dungeon. Play until you get too scared!
            <br><br>
            The highlight of the jam was brainstorming and implementing a power up system in the final 90 minutes. It really adds the finishing touches to this small roguelike. In the comments it is all the users talk about!
          '
        ></GameCard>
        </v-col>
        <TextBlock
          title="Day Three : 30 seconds of fun"
          subtitle="Core Game Loop"
          text="
            After (hopefully) arriving at a point with no unknowns, the work that is known is still ambitious. Day 3 is all about putting the systems we develop on Day 2 together to make our core game loop.
            <br><br>
            The art team continues polishing, we start on animation, and with our aesthetic in place we begin on soundtrack and sound fx. Work begins on replacing placeholder art with final assets.
            <br><br>
            We end Day 3 with a whiteboard. I put every remaining task the team can think of on a whiteboard.
          "
        ></TextBlock>
        <v-col cols=12>
          <GameCard 
            image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1689191016/nathanWalkerPortfolio/spider_video_one_ibddzq.mp4'
            image-two="https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1689191016/nathanWalkerPortfolio/spider_video_two_mbgebp.mp4"
            caption-one='We had no artist - so I was the artist. I settled on a retro theme. I made vector art and wrote a shader to do the pixel-arting.'
            caption-two='
              Level design is often the very last thing to get done - fastly and furiously. I love the ideas we found but there is a ton of low hanging fruit.
              It is easy to fall in love with jam games!
            '
            title='Spider Collider'
            theme='Small World'
            team="Andy Gainer (code), Kevin Smith (code), Andrew Ruder (code), Peter Reid (music)"
            text ='
              A physics platformer and our highest rated Ludum Dare entry.
              <br><br>
              We made a small world using a wrap around screen mechanic a la Asteroid. We embraced this reference and extended it to the aesthetic.
              <br><br>
              Most players discover an exploit with a very high success rate trivializing the gameplay. But they all choose to play it as intended.
              <br><br>
              A very successful prototype.
            '
            watchURL='https://www.youtube.com/watch?v=RhXzOGk4_Fk'
            playURL='https://www.newgrounds.com/portal/view/887588'
          ></GameCard>
        </v-col>
        <TextBlock
          title="Day Four : Content"
          subtitle="Agile AF"
          text="
            Day Four is hectic. The game must launch at 8pm. Starting at 8am we do four 3-hour micro sprints. We choose items off the whiteboard and knock them out as quickly as possibly. Items fall off through completion or last minute pivots. So many pivots.
            I start adding sound fx and soundtracks into the game while building animation hooks.
            <br><br>
            Every 3-hours we do a walking standup, then we cross things out and add any bugs we've found. We pivot like mad men.
            <br><br>
            At 6pm, I start working on our platform builds. Our targets are always web, OSX, and Windows. Inevitably there are platform specific problems. 
            I prioritize Web if possible. The final step of Ludum Dare is 2 weeks of judging and players prefer a web build.
            <br><br>
            At 8pm, exhausted, we launch!
          "
        ></TextBlock>
    </ContentColumn>
  </div>
</template>

<script>
// @ is an alias to /src
import GameCard from '@/components/GameCard.vue'
import StudyBanner from '@/components/StudyBanner.vue'
import TextBlock from '@/components/TextBlock.vue'
import ContentColumn from '@/components/ContentColumn.vue'

export default {
  name: 'Home',
  components: {
    GameCard,
    StudyBanner,
    TextBlock,
    ContentColumn
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mooncalf.scss";
  video {
    /* override other styles to make responsive */
    width: 100%    !important;
    height: auto   !important;
  }
  .ludum-dare {
    // background-color:white;
  }
</style>
