<template>
  <div class="id-auto">
    <StudyBanner
      image='https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1697826370/nathanWalkerPortfolio/dceba86f-5d6c-426a-bbfb-4ca5e47736c7_4by5_ysnbyw.png'
      title="Identity Automation"
      text="
        At Identity Automation, my team rebuilt the front-end from the ground up against a drop-dead deadline. At the same time, we maintained and expanded our legacy code before retiring support.
      "
    ></StudyBanner>
    <ToolBox
      tools="['photoshop', 'figma', 'vscode', 'vuejs']"
    ></ToolBox>
    <ContentColumn>
      <TextBlock
      title="Context"
      text="
        RapidIdentity, Identity Automation's core offering, was undergoing a total frontend rewrite and redesign. It had to.
        It was written in Flash and Flash was being deprecated by everyone.  Flash was no longer a viable technology.
        <br><br>
        The company was growing. Revenue was up dramatically. A company had recently been acquired whose technology would dramatically enhance our market reach.
        Things needed done and more contributors were required. An infusion from Venture Capital made this all possible.
        <br><br>
      "
      ></TextBlock>
      <TextBlock
      title="Drop Dead Line"
      text="
        Identity Automation had resources but they also had an imperative : if their product did not work in a web browser the day Flash was disabled - they had no customers and were in breach of innumerable contracts.
        If we didn't make the deadline - the business would suffer. And that suffering would most likely be fatal.
      "
      ></TextBlock>
      <TextBlock
      title="The Product"
      text="
        Identity Automation was in the identity management business. Our focus was controlling access to digital resources. For our customers, this was often legally required. Additionally, any access of changes often needed to be auditable.
        <br><br>
        RapidIdentity was a hodge podge of functionality. The companies standard strategy was to sell something, build it, then sell it again. This resulted in a total of 8 modules - each of which was often sold as a product unto itself.
      "
      ></TextBlock>
      <TextBlock
      title="My Role"
      text="
        I was hired as a Senior Software Engineer. My primary task was rewriting the companies primary web service.
        Simultaneously, I supported bug and feature requests in the old product. My newly formed team of 5 was tasked with the entire front-end rewrite.
        <br><br>
        My responsibilities rapidly grew until I was hosting weekly meetings with the company leadership. This story is indicative of why.
      "
      ></TextBlock>

      image of code estimation poker game

      <TextBlock
      title="Plant a Tree Yesterday"
      text="
        One of my first goals as a member of the frontend team was identifying who are users were and how they used the product.
        The interview process had revealed that no one was truly sure. Our bottom line wasn't directly affected by our users - they were locked in.
        The general concensus was it didn't matter - the users that mattered were the ones with whom sales had a relationship.
        <br><br>
        My first act as an employee of IA - quite obstinately insisting that analytics were absolutely necessary.  
        <br><br>
      "
      ></TextBlock>
      <TextBlock
      title="User Segmentation"
      text="
        I segmented my data by user type. We had a different relationship with each. These were legal, professional, and for the sales staff - sometimes personal. I was able to determine user type based off both permissions and hierarchy inherent in the project.
        <br><br>
        For example, in a school setting, an end user would have permissions for one module, a manager user would have a hierarchy under them, and an IT user would have permissions to at least three modules. Consultants and internal employees would use special licenses.
      "
      ></TextBlock>
      <NoteCard
        :cards="[
          {
            title: 'End User',
            text: 'Used software to access and manage digital assets. This could be an Instagram account or a Word Document. Credentials were obfuscated from the user - all they had to know was their RapidIdentity login. <br><br> Because we sold into government, we often had a legal obligation to accessibility.'
          },
          {
            title: 'IT User',
            text: 'This user created and managed the entitlement properties managed by the managers.'
          },
          {
            title: 'Internal Users',
            text: 'This included our Customer Service as well as outside consultants. These users were the first one on the ground for installations and the last line of defense when things went wrong. <br><br> What we owed this user was on a case-by-case basis.'
          },
          {
            title: 'Stakeholders',
            text: 'We had C-Suite and they had taken Venture Capital money. Performance for equity was in play. Milestones set in ink before the drop-dead date revealed itself.'
          }
        ]"
      ></NoteCard>
      <TextBlock
        title="Early wins"
        text="
          Revealed internal users were not really using the alpha.
          <br>
          Revealed browser and OS usage. No customer was using internet explorer. We could safely deprioritize bugs identified by QA.
          <br>
          Revealed some large clients were not using the product AT ALL. Support reached out and their product was brought online.
          <br>
          Revealed features were only being used by their internal champions. We could safely deprioritize bugs reported - by their internal champions.
        "
      >
      </TextBlock>
      <TextBlock
        title="Tracking failure"
        subtitle="Cohort Analysis"
        text="
          As our rewrite gained capabilities we began to prompt end users to try our beta product with a prominent button that allowed them to return to the old product. Users that participated in the beta became part of a tracked cohort, users that then reverted became part of another one.
          Whatever action they took upon reversion was of supreme interest - a safe assumption was that the new interface had failed them in some way.
        "
      ></TextBlock>
      <TextBlock
        title="Time would tell"
        subtitle="Proper Sample Size"
        text="
          There were early wins but their was also a need for patience. A majority of our customers were schools - this meant there were usage cycles.
          We had to monitor usage during the school year and during the summer - when implementations of our software often took place.
          <br><br>
          We had to wait 10 months before we could draw our final conclusions. Meanwhile we had a product to build!
        "
      >
      </TextBlock>
      <TextBlock
      title="Ounces of prevention"
      subtitle="Estimation"
      text="
        As part of our agile process, we created stories and estimated them. We tracked our velocity and knew what a reasonable pace per iteration was.
        Every two weeks, we showed new, functional software.
        <br><br>
        We had reliable metrics. We made and estimated stories for the rest of the Rapid Identity. We knew for certain we had a problem.
      "
      ></TextBlock>
      <TextBlock
      title="The Problem"
      text="
        We had over twice as much work as we could possibly finish. We had one year to finish - and over two years worth of work.
        <br><br>
        The company made an open call for solutions - on the surface the problem seemed intractable.
      "
      ></TextBlock>
      <TextBlock
      title="A sharp knife"
      subtitle=""
      text="
        We had over twice as much work as we could possibly finish.
        <br><br>
        The company made an open call for solutions - on the surface the problem seemed intractable.
      "
      ></TextBlock>
      <TextBlock
        title="Time to kill a baby"
        subtitle=""
        text="
          I now had a years worth of data and the data showed a way.
          <br><br>
          Keeping our obligations to customers in mind, I broke the product into quality tiers.
          <br><br>
          We had a legal obligation for accessibility to our end users. To our manager users, we owed continuance of any tools they relied on. While not a legal issue, it was in our best interest to not force them towards another tool.
          <br><br>
          To our IT users we had a legal obligation to allow them to continue to generate auditable assets they could then provide to end users.
          <br><br>
          To our internal and consultant users - we owed nothing but paychecks.
          <br><br>
          On the surface, this meant we had to complete each and every feature. But as it turned out - not each and every feature was being used equally - or at all.
          With smart prioritization our risk could be mitigated.
          <br><br>
          To do this - I also had to consider user behaviour.
        "
      >
      </TextBlock>
      <TextBlock
        title="This is the way"
        subtitle="Backlog Grooming"
        text="
          Our product had 8 modules, one with a pure user focus, six with various audit related functionality, and one massive configuration module to rule them all.
          At the top level I created two buckets. A bucket of must completes by deadline and a bucket of could be completed after the deadline.
          <br><br>
          Assets on the end user pathways was a must complete. Additionally, these assets must pass accessibility. Developers and QA worked together to make this possible.
          <br><br>
          Assets on the manager pathways was a must complete.
          <br><br>
          Assets on IT pathways during the school year were a must complete. However, anything from a configuration phase could be deprioritized with hooks put in for alerts. IT users was comfortable contacting support and we could be proactive identifying attempts.
          <br><br>
          Assets on internal users could be completely deprioritized. Flash was dead but internally we could conduct workarounds our clients could not.
        "
      >
      </TextBlock>
    </ContentColumn>
  </div>
</template>

<script>
import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import ToolBox from '@/components/ToolBox.vue';
import NoteCard from '@/components/NoteCard.vue';
import ContentColumn from '@/components/ContentColumn.vue';

export default {
  name: "IdentityAutomation",
  data() {
    return {
    }
  },
  components : {
    StudyBanner,
    TextBlock,
    // PullQuote,
    ContentColumn,
    NoteCard,
    ToolBox,
  },
}
</script>

<style scoped lang="scss">
  @import "@/assets/styles/mooncalf.scss";
</style>
