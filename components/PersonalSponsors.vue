<template>
  <section class="PersonalSponsors">
    <section-title
      class="PersonalSponsors-Title"
      en-title="Personal Sponsors"
      ja-title="個人協賛"
    />
    <div class="PersonalSponsors-Description">
      <p>
        Civictech Challenge Cupでは、個人協賛を募集しております。
        皆様からの協賛金は、全額を運営のために大切に使わせていただきます。
      </p>
      <p>
        詳しい内容につきましては、下記お申込みフォームよりご確認ください。
      </p>
    </div>
    <div class="PersonalSponsors-Button">
      <v-btn
        height="55px"
        rounded
        color="#170f7b"
        outlined
        href="https://forms.gle/4beQrCvLMGyo6waX8"
        target="_blank"
        rel="noopener"
      >
        <span class="PersonalSponsors-Button-Label">
          個人協賛のお申し込みはこちら
        </span>
      </v-btn>
    </div>
    <section-title en-title="" ja-title="ご協賛いただいた皆様 (9月14日現在)" />
    <div class="PersonalSponsors-Description">
      <span class="PersonalSponsors-Names">斉藤精一様</span>
      <span class="PersonalSponsors-Names">小副川健様</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PersonalSponsors',
}
</script>

<style lang="scss" scoped>
.PersonalSponsors {
  margin-bottom: 50px;

  &-Title {
    margin: {
      left: 0;
      right: auto;
    }
  }

  &-Description {
    line-height: 2.07;
    letter-spacing: normal;
    color: $indigo-1;
    padding-left: 1em;
    margin-bottom: 1em;
    font: {
      family: $font-ja;
      size: 16px;
      weight: 700;
    }

    p {
      margin-bottom: 0;
    }
  }
  &-Button {
    display: flex;
    justify-content: center;

    &-Label {
      font-family: $font-ja;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.93px;
    }
  }
  .PersonalSponsors-Names {
    margin-right: 20px;
  }
}
</style>
