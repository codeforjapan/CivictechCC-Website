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
        href="https://forms.gle/rxUU9V3CQ71MpZkZ6"
        target="_blank"
        rel="noopener"
      >
        <span class="PersonalSponsors-Button-Label">
          個人協賛のお申し込みはこちら
        </span>
      </v-btn>
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
    font: {
      family: $font-ja;
      size: 20px;
      weight: 700;
    }

    p {
      margin-bottom: 0;
    }

    ul {
      margin-bottom: 0.5em;
      padding-left: calc(
        24px + 0.5em
      ); // 24px = .v-application ul のデフォルト値
    }

    li {
      line-height: 15px;
      padding: 0.5em;
    }

    &-SeeAlso {
      margin-left: -0.6em;
      font: {
        size: 75%;
        weight: 500;
      }
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
}
</style>
