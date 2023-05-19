<template>
  <v-container class="pt-11">
    <v-row>
      <v-col cols=12>
        <GameCard 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638406/nathanWalkerPortfolio/betterTogether_square_iim2f0.png'
          title='Kvetch A Sketch'
          theme="Ancient Technology"
          team="Andy Gainer (code), Luke Schroder (art, sound fx), Kevin Smith (code), Peter Reid (intro music)"
          text ='
            The best jam game we ever made.
            Despite a glaring bug, most players complete the game.
            Completed for the only unjudged Ludum Dare ever.

          '
        ></GameCard>
        <GameCard 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638406/nathanWalkerPortfolio/betterTogether_square_iim2f0.png'
          title='Emily vs Everything'
          theme='One Room'
          text ='Iterating from MVP to thriving practice.'
        ></GameCard>
        <GameCard 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638406/nathanWalkerPortfolio/betterTogether_square_iim2f0.png'
          title='Spider Collider'
          theme=''
          text ='Iterating from MVP to thriving practice.'
        ></GameCard>
        <GameCard 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638406/nathanWalkerPortfolio/betterTogether_square_iim2f0.png'
          title='Trial 21'
          theme='Transform'
          text ='Iterating from MVP to thriving practice.'
        ></GameCard>
        <!-- <HomeCard
          route="Tangram" 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638625/nathanWalkerPortfolio/gameIcon_v18_512_zjtilp.png'
          title="OMG TANGRAM"
          text="A leak in the conversion pipeline won't stay fixed."
        ></HomeCard>
        <HomeCard 
          route="IdentityAutomation" 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680639720/nathanWalkerPortfolio/dceba86f-5d6c-426a-bbfb-4ca5e47736c7_opiq0w.png'
          title="IDENTITY AUTOMATION"
          text="Analytics saves the day, User Personas pave the way."
        ></HomeCard>
        <HomeCard 
          route="LudumDare" 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638157/nathanWalkerPortfolio/communityIcon_wnbpyy6bixk31_rkqput.png'
          title="LUDUM DARE"
          text="Three-day product cycles for fun and no profit."
        ></HomeCard> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import GameCard from '@/components/GameCard.vue'

export default {
  name: 'Home',
  components: {
    GameCard
  }
}
</script>
