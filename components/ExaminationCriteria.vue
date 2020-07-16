<template>
  <section class="ExaminationCriteria">
    <section-title
      class="ExaminationCriteria-Title"
      en-title="Examination Criteria"
      ja-title="審査基準"
    />
    <ol>
      <li>社会課題の提起とその解決案の企画</li>
      <li>応募作品の実現可能性・課題解決力</li>
      <li>応募作品の技術的な完成度</li>
      <li>応募作品の設計・デザイン・アクセシビリティ</li>
      <li>チーム開発プロセス</li>
    </ol>
  </section>
</template>

<style lang="scss" scoped>
.ExaminationCriteria {
  margin-bottom: 50px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Description {
    font-family: $font-ja;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: normal;
    color: $indigo-1;
  }
  ol {
    counter-reset: number;
    list-style-type: none !important;
    padding: 0.5em;
    background: transparent;
  }
  ol li {
    position: relative;
    line-height: 50px;
    padding: 0.5em 0.5em 0.5em 70px;
    font-family: $font-ja;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 1.4px;
    color: $indigo-1;
  }

  ol li::before {
    position: absolute;
    counter-increment: number;
    content: counter(number, upper-alpha);
    display: inline-block;
    background: $indigo-1;
    color: white;
    font-family: $font-en;
    font-weight: 600;
    font-size: 15px;
    border-radius: 50%;
    left: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
