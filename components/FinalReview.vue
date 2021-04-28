<template>
  <section class="FinalReview">
    <section-title
      class="Final-Title"
      en-title="Final Review"
      ja-title="最終審査会"
    />
    <div class="FinalReview-Description">
      <p>
        2020年10月25日開催<br />
        応募した105名が組成したチーム27組が作品を提出し、一次選考を通過した10組がファイナリストとして最終審査会にてプレゼンテーションを行いました。<br />
        最終審査会のアーカイブは画像から！
      </p>
    </div>
    <div class="FinalReview-Image">
      <a
        href="https://www.youtube.com/watch?v=VIgMtTQtkHA"
        rel="noreferrer nofollow noopener"
        target="_blank"
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
