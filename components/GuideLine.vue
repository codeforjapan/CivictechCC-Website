<template>
  <section class="GuideLine">
    <section-title
      class="GuideLine-Title"
      en-title="Guidelines"
      ja-title="募集要件"
    />
    <v-card width="100%" color="#F5F5F2" class="GuideLine-Card" elevation="0">
      <v-card-subtitle class="GuideLine-Card-Title"> 募集対象 </v-card-subtitle>
      <v-card-text class="GuideLine-Card-Text">
        自分の持つスキル（プログラミングやデザインを含むがこれに限らない）を、社会課題の解決に活かしたい方
      </v-card-text>
      <v-divider />
      <v-card-subtitle class="GuideLine-Card-Title"> 応募資格 </v-card-subtitle>
      <v-card-text class="GuideLine-Card-Text">
        <ul>
          <li>1998年4月2日以降生まれの方</li>
          <li>
            現在のスキルレベルにかかわらず、開発を通じて積極的にスキルアップしていく意思のある方
          </li>
          <li>
            Code for Japan の
            <a href="https://github.com/codeforjapan/codeofconduct">
              Code of Conduct
            </a>
            と
            <a href="https://www.code4japan.org/privacy-policy">
              プライバシーポリシー
            </a>
            に同意いただける方
          </li>
        </ul>
      </v-card-text>
      <v-divider />
      <v-card-subtitle class="GuideLine-Card-Title"> 開発形態 </v-card-subtitle>
      <v-card-text class="GuideLine-Card-Text">
        <ul>
          <li>
            参加者のエントリー後に、チーム（2～5人程度）を結成して、作品を開発・提出していただきます
          </li>
          <li>
            チームについては、エントリー時に予め組んでいても、個人で応募したあとに参加者から募ってもよいこととします
          </li>
          <li>
            いずれの場合でも、チームメンバー全員で協力して開発することが求められます
          </li>
          <li>
            「チーム開発」をテーマに掲げているため、単独での作品提出は原則禁止とします
          </li>
        </ul>
      </v-card-text>
      <v-divider />
      <v-card-subtitle class="GuideLine-Card-Title">
        応募作品について
      </v-card-subtitle>
      <v-card-text class="GuideLine-Card-Text">
        <p>応募作品は下記のいずれか又は複数の組み合わせとします。</p>
        <ul>
          <li>Windows・macOS上で動作するソフトウェア</li>
          <li>Android・iOS上で動作するアプリ</li>
          <li>Webアプリ</li>
          <li>その他、IoTデバイス等を利用した作品（※）</li>
        </ul>
        <p>※ IoTデバイス等を利用する場合は事前にお知らせください。</p>
        <p>使用するプログラミング言語やAPI等は問いません。</p>
      </v-card-text>
      <v-divider />
      <v-card-subtitle class="GuideLine-Card-Title"> 備考 </v-card-subtitle>
      <v-card-text class="GuideLine-Card-Text">
        <ul>
          <li>
            他のプログラミングコンテスト等との併願を認めますが、併願先で多重応募に関する規定がある場合はそちらに従ってください。
          </li>
          <li>
            作品の応募にあたり、他者の知的財産権を侵害しないように十分ご注意ください。また、応募者と第三者との間でトラブルが発生した場合は、当事者間で解決を図るものとし、Civictech
            Challenge Cup U-22 運営及びCode for Japanは一切関与いたしません。
          </li>
          <li>
            本イベントでは、Slackを活用して各種連絡・情報共有を行う予定です。
          </li>
        </ul>
      </v-card-text>
      <v-card-actions class="align-center justify-center">
        <ButtonEntry inner-padding="20px 55px" />
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import ButtonEntry from '@/components/ButtonEntry.vue'
export default {
  name: 'GuideLine',
  components: {
    ButtonEntry,
  },
}
</script>

<style lang="scss" scoped>
.GuideLine {
  margin-bottom: 50px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Card {
    padding: 15px;
    &-Title {
      font-family: $font-ja;
      font-size: 18px;
      font-weight: 900;
      line-height: 2.5;
      letter-spacing: normal;
      color: $indigo-1 !important;
    }
    &-Text {
      font-family: $font-ja;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.67;
      letter-spacing: normal;
      color: $indigo-1 !important;
      a {
        color: $indigo-1 !important;
      }

      > p {
        margin-bottom: 0;
      }

      > ul + p {
        margin-top: 2em;
      }
    }
  }
}
</style>
