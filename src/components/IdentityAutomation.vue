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
      tools="['photoshop', 'figma', 'vscode', 'ember', 'analytics', 'jira']"
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
      "
      ></TextBlock>
      <TextBlock
      title="Drop Dead Line"
      subtitle="Objective"
      text="
        Identity Automation had resources but they also had an imperative : if their product did not work in a web browser the day Flash was disabled - they had no customers and were in breach of innumerable contracts.
        If we didn't make the deadline - the business would suffer. And that suffering would most likely be fatal.
      "
      ></TextBlock>
      <TextBlock
        title=""
        subtitle="Key Results"
        text="
          All product features available in new codebase.
          No lost customers.
          Integrate acquisition features.
          Consistent UI design.
        "
      />
      <TextBlock
      title="The Product"
      subtitle="And the Kitchen Sink"
      text="
        Identity Automation was in the identity management business. Our focus was controlling and auditing access to digital resources. A resource could be an Instagram account or a Word Document.
        <br><br>
        RapidIdentity was a hodge podge of functionality designed by accretion by programmers. The companies standard strategy was to sell something, build it, then sell it again. 
      "
      ></TextBlock>
      <TextBlock
      title="My Role"
      text="
        I was hired as a Senior Software Engineer. My primary task was rewriting the companies core product.
        Simultaneously, I supported bug and feature requests in the old product.
        <br><br>
        I coordinated with the backend team, QA, and sales on a daily basis. Later in my tenure, I led a weekly meeting with the CTO, Director of Engineering, Engineering Managers and two Product Managers.
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
        cardColumns="6"
        :cards="[
          {
            title: 'Leaf User',
            text: 'Used software to access and manage digital assets. This could be an Instagram account or a Word Document. Credentials were obfuscated from the user - all they had to know was their RapidIdentity login. <br><br> Because we sold into government, we often had a legal obligation to accessibility.'
          },
          {
            title: 'Node User',
            text: 'This user created and managed the entitlement properties managed by the managers.'
          },
          {
            title: 'Elevated Users',
            text: 'This included our Customer Service as well as outside consultants. These users were the first one on the ground for installations and the last line of defense when things went wrong. <br><br> What we owed this user was on a case-by-case basis.'
          },
          {
            title: 'Internal User',
            text: 'IT, Customer Service, QA, or a consultant. We were a B2B company, if sales had to make a promise to get a contract they did. If sales made a promise we had to make it happen. Company growth was still a top priority.'
          },
          {
            title: 'Stakeholders',
            text: 'We had a C-Suite and they had taken Venture Capital money. Salesman had made promises and needed performance for a payday. Performance for equity was in play. Milestones set in ink before the drop-dead date had to be taken into consideration.'
          },
        ]"
      ></NoteCard>
      <PullQuote
        text="I was not a Pokemon trainer"
      ></PullQuote>
      <TextBlock
        title="Early wins"
        subtitle="Analytics"
        text="
          Revealed internal users were not really using the alpha. Letting staff know I knew rectified the problem immediately. This led to an essential increase in bug reports and feedback. I was not a Pokemon trainer, without help I could not catch them all.
          <br><br>
          Revealed browser and OS usage. No customer was using internet explorer. We safely deprioritized bugs identified by QA. We maintained QA on IE and put issues into a special bucket in case we obtained an IE7 customer.
          <br><br>
          Revealed some clients were not using the product AT ALL. Support reached out, issues were identified and entire accounts were saved.
          <br><br>
          Revealed features were only being used internally. We could safely deprioritze new development. I took that time to recruit internal testers and focused on pre-development UX activities to improve my co-workers workdays.
        "
      >
      </TextBlock>
      <TextBlock
        title="Tracking failure"
        subtitle="Cohort Analysis"
        text="
          As our rewrite gained capabilities we began to prompt end users to try our beta product with a prominent button that allowed them to return to the old product. 
          Users that participated in the beta became part of a tracked cohort, users that then reverted became part of another one.
          <br><br>
          Whatever action users took upon reversion was of supreme interest - a safe assumption was that the new interface had failed them in some way.
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
        This problem was exacerbated because the company was B2B. New, highest priority features were being added. As a B2B company, sales were made on promises for features implemented on timelines.
        Like most companies, trading risk for reward was part of the package. At any point in time, we could be tasked with a new top priority feature.
        <br><br>
        The company made an open call for solutions - on the surface the problem seemed intractable.
      "
      ></TextBlock>
      <ImageBox
        :images=conditionsImage
        caption="
        "
      ></ImageBox>
      <TextBlock
      title="A sharp knife"
      subtitle=""
      text="
        We had over twice as much work as we could possibly finish. We needed more people but we believed in the Mythical Man Month. We'd added two developers in the past year and directly measured dips in velocity.
        If we doubled our body count - we would have thrice as much work than we could possibly finish.
        <br><br>
        Leadership made an open call for solutions - on the surface the problem seemed intractable.
      "
      ></TextBlock>
      INSERT FEATURE AUDIT TABLE FROM PM BOOK HERE
      <table style="width: 100%;">
        <tr>lalala</tr>
        <tr></tr>
        <tr></tr>
      </table>
      <TextBlock
        title="Time to kill a baby"
        subtitle="Saying No"
        text="
          I now had a years worth of data and the data showed a way.
          <br><br>
          Keeping our obligations to customers in mind, I broke the product into what was owed to each.
          <br><br>
          We had a legal obligation for accessibility to our end users. To our manager users, we owed continuance of any tools they relied on. While not a legal issue, it was in our best interest to not force them towards another tool.
          <br><br>
          To our IT users we had a legal obligation to allow them to continue to generate auditable assets they could then provide to end users.
          <br><br>
          To our internal and consultant users - we owed nothing but paychecks.
          <br><br>
          To our stakeholders we owed obedience but also reality. We had to say, 'No'. I opened hard conversations, I had to sacrifice popularity for the product.
          <br><br>
          With this amount of obligation it was impossible to reach our deadline without some sort of risk.
          But with prioritization - this risk could be mitigated.
          <br><br>
          To do this - I also had to consider user behaviour.
        "
      >
      </TextBlock>
      <NoteCard
        cardColumns="4"
          :cards="[
            {
              title: 'High Priority, High Quality',
              text: 'Used software to access and manage digital assets. This could be an Instagram account or a Word Document. Credentials were obfuscated from the user - all they had to know was their RapidIdentity login. <br><br> Because we sold into government, we often had a legal obligation to accessibility.'
            },
            {
              title: 'High Priority, Medium Quality',
              text: 'These stories needed to be completed but any bugs could be safely'
            },
            {
              title: 'High Priority, Low Quality',
              text: 'These stories needed to be completed but the UX and design did not need to be in compliance. Accessibility issues could be considered bugs. Bugs could be fixed after the deadline.'
            },
            {
              title: 'Low Priority, High Quality',
              text: 'These stories did not need completed before the deadline but needed to be high quality when they were.'
            }
          ]"
      ></NoteCard>
      <TextBlock
        title="This is the way"
        subtitle="Backlog Grooming"
        text="
          Our product had 8 massive modules, one with a pure user focus, six with various audit related functionality, and one massive configuration module to rule them all.
          The backlog could be arranged along two measurable axis : the user for that feature with consideration for actual user pathways.
          <br><br>
          Assets on the end user pathways was a must complete at high quality. Additionally, these assets must pass accessibility. Developers and QA worked together to make this possible.
          <br><br>
          Assets on the non-configuration IT pathways was a must complete at high quality. Configuration pathways were a must complete at low quality.
          <br><br>
          Assets on IT pathways during the school year were a must complete at medium quality. However, anything from a configuration phase could be deprioritized with hooks put in for alerts. IT users was comfortable contacting support and we could be proactive identifying attempts.
          <br><br>
          Assets on internal users could be completely deprioritized. Flash was dead but internally we could conduct workarounds our clients could not.
        "
      >
      </TextBlock>
      <TextBlock
        title="Dont throw good development after bad"
        subtitle="Feature Creep"
        text="
          Segmenting and analyzing user pathways presented us with a massive win. Our biggest most complex module, a module we had developed training for, training that ran with a full roster
        "
      ></TextBlock>
      <TextBlock
        title="Dividing the pie"
        text="
          Everything was prioritized but even what remained to be done was still around twice what was accomplishable. We needed
        "
      ></TextBlock>
    </ContentColumn>
  </div>
</template>

<script>
import StudyBanner from '@/components/StudyBanner.vue';
import TextBlock from '@/components/TextBlock.vue';
import ToolBox from '@/components/ToolBox.vue';
import NoteCard from '@/components/NoteCard.vue';
import ContentColumn from '@/components/ContentColumn.vue';
import PullQuote from '@/components/PullQuote.vue';
import ImageBox from '@/components/ImageBox.vue';

export default {
  name: "IdentityAutomation",
  data() {
    return {
      conditionsImage: ['https://res.cloudinary.com/mooncalf/image/upload/f_auto/v1683694307/nathanWalkerPortfolio/conditions-treated_k9bnuw.png'],
    }
  },
  components : {
    StudyBanner,
    TextBlock,
    PullQuote,
    ContentColumn,
    NoteCard,
    ToolBox,
    ImageBox
  },
}
</script>

<style scoped lang="scss">
  @import "@/assets/styles/mooncalf.scss";
</style>
