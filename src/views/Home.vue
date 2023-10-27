<template>
  <v-container class="pt-11">
    <v-row>
      <v-col cols=12>
        <HomeCard 
          route="Flyover" 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638406/nathanWalkerPortfolio/betterTogether_square_iim2f0.png'
          title='FLYOVER COUNSELING'
          :keywords=flyoverChips
          text ='A Minimum Viable Private Practice'
        ></HomeCard>
        <HomeCard 
          route="IdentityAutomation" 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680639720/nathanWalkerPortfolio/dceba86f-5d6c-426a-bbfb-4ca5e47736c7_opiq0w.png'
          title="IDENTITY AUTOMATION"
          text="Product Management saves the day."
        ></HomeCard>
        <HomeCard 
          route="LudumDare" 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638157/nathanWalkerPortfolio/communityIcon_wnbpyy6bixk31_rkqput.png'
          title="LUDUM DARE"
          text="Three-day product cycles for fun and no profit."
        ></HomeCard>
        <HomeCard
          route="Tangram" 
          image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1680638625/nathanWalkerPortfolio/gameIcon_v18_512_zjtilp.png'
          title="OMG TANGRAM"
          text="A leak in the conversion funnel won't stay fixed."
        ></HomeCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HomeCard from '@/components/HomeCard.vue'

export default {
  name: 'Home',
  components: {
    HomeCard
  },
  data() {
    return {
      flyoverChips: [
        'Entrepreneurship',
        'Product Management',
        'UX',
        'Design',
      ],
    }
  }
}
</script>
