<template>
  <div class="ludum-dare">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680035062/nathanWalkerPortfolio/betterTogether_ftnrpx.jpg'
      title="Ludum Dare"
      text="
      Ludum Dare is the world's largest game jam. Designers are presented with a theme at 8pm Friday. Delivery is 72 hours later. A full game must be designed then developed from scratch.
      The teams then play and rate each others games. Winners are assigned overall and for a number of categories such as Theme, Graphics, and Fun.
      <br><br>
      I built a team under the Mooncalf Games brand. I recruited artists, composers, and programmers to jam with Mooncalf. Mooncalf games has competed in 9 Ludum Dare events.
      <br><br>
      Game Jams allow you to experience the entire product pipeline - from concept to delivery in a concrete amount of time.
      "
    ></StudyBanner>
    <v-row>
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
            Despite a glaring late game bug, most players complete the game.
            <br><br>
          '
          playURL="https://www.newgrounds.com/portal/view/887023"
          watchURL="https://www.youtube.com/watch?v=kkOlDKzD1Xw?&t=07m58s"
        ></GameCard>
      </v-col>
      <TextBlock
      title="Day Two : Proof of Concept"
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
          title="Day Three : Loopers"
        ></TextBlock>
        <v-col cols=12>
          <GameCard 
            image-one='https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1689191016/nathanWalkerPortfolio/spider_video_one_ibddzq.mp4'
            image-two="https://res.cloudinary.com/mooncalf/video/upload/f_auto/v1689191016/nathanWalkerPortfolio/spider_video_two_mbgebp.mp4"
            caption-one='We had no artist - so I was the artist. I settled on a retro theme. I made vector art and let a shader do the pixel-arting.'
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
        ></TextBlock>
        <!-- <v-col cols=12>
        <GameCard 
          image-one='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638406/nathanWalkerPortfolio/betterTogether_square_iim2f0.png'
          caption-one=''
          title='Trial 21'
          theme='Transformation'
          team='Andy Gainer (code)'
          text ='
            For this theme we made a puzzle platformer where the player changes forms in real time to solve platforming puzzles. As gameplay progresses, more abilities are unlocked.
            <br><br>
            A low turnout for this jam put me as the sole artist and Andy as the main coder. Not the best execution but the puzzles work for a few minutes of gameplay. 
            <br><br>
            
          '
        ></GameCard>
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import GameCard from '@/components/GameCard.vue'
import StudyBanner from '@/components/StudyBanner.vue'
import TextBlock from '@/components/TextBlock.vue'

export default {
  name: 'Home',
  components: {
    GameCard,
    StudyBanner,
    TextBlock
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
    background-color:white;
  }
</style>
