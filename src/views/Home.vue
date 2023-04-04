<template>
  <v-container class="pt-11">
    <v-row>
      <v-col cols=12>
        <HomeCard 
          route="Flyover" 
          image='https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg'
          title='FLYOVER COUNSELING'
          text ='Iterating from MVP to thriving practice.'
        ></HomeCard>
        <HomeCard
          route="Tangram" 
          image='https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg'
          title="OMG TANGRAM"
          text="A leak in the conversion pipeline won't stay fixed."
        ></HomeCard>
        <HomeCard 
          route="IdentityAutomation" 
          image='https://res.cloudinary.com/mooncalf/image/upload/v1651780301/nathanWalkerPhotography/prints/web_gallery_wides-4_nex7rf.jpg'
          title="IDENTITY AUTOMATION"
          text="Analytics saves the day, User Personas pave the way."
        ></HomeCard>
        <HomeCard 
          route="LudumDare" 
          image='https://res.cloudinary.com/mooncalf/image/upload/v1680582372/nathanWalkerPortfolio/resetData_nqqgbb.png'
          title="LUDUM DARE"
          text="A three-day product cycle."
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
  }
}
</script>
