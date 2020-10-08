<template>
  <section class="FinalReview">
    <section-title
      class="Final-Title"
      en-title="Final Review"
      ja-title="最終審査会"
    />
    <div class="FinalReview-Description">
      <p>
        事前選考を勝ち抜いたファイナリストがプレゼンテーションを行い、大賞・企業賞を決定するCivictech
        Challenge Cupの集大成、最終審査会を10月25日に開催します！
      </p>
      <p>
        申し込みは<a href="https://ccc-final-review.peatix.com/"
          >こちらのPeatixページ</a
        >から！
      </p>
    </div>
    <div class="FinalReview-Image">
      <a href="https://ccc-final-review.peatix.com/"
        ><img src="@/static/Final.jpg"
      /></a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.FinalReview {
  margin-top: 2em;
  margin-bottom: 4em;
  &-Image {
    img {
      width: 40vw;
      transition: 0.2s;
      &:hover {
        opacity: 0.8;
        transition: 0.2s;
      }
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
      a {
        color: inherit;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .FinalReview {
    &-Image {
      text-align: center;
      margin: 0 auto;
      img {
        width: 80vw;
      }
    }
  }
}
</style>
