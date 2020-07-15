<template>
  <section class="ThemeSample">
    <v-row>
      <v-col cols="12" md="6">
        <section-title
          class="ThemeSample-Title"
          en-title="Theme Sample"
          ja-title="テーマサンプル"
        />
      </v-col>
      <v-col>
        <div class="ThemeSample-Description">
          <span>
            テーマは何でもOK！
          </span>
          <br />
          <span>
            自分が興味のあるテーマを設定しよう！
          </span>
        </div>
      </v-col>
    </v-row>
    <v-flex grow wrap>
      <v-row wrap>
        <v-col
          v-for="(sample, index) in samples"
          :key="index"
          cols="12"
          md="3"
          sm="6"
        >
          <ThemeSampleCard
            :title="sample.title"
            :subtitle="sample.subtitle"
            :description="sample.description"
          >
            <template v-slot:image>
              <component :is="sample.image" class="ThemeSampleCard-Image" />
            </template>
          </ThemeSampleCard>
        </v-col>
      </v-row>
    </v-flex>
  </section>
</template>

<script>
import ThemeSampleCard from '@/components/ThemeSampleCard.vue'
import School from '@/static/School.svg'
import People from '@/static/People.svg'
import Hundreds from '@/static/hundreds.svg'
import Mind from '@/static/Mind.svg'

export default {
  name: 'ThemeSample',
  components: {
    ThemeSampleCard,
    School,
    People,
    Hundreds,
    Mind,
  },
  data() {
    return {
      samples: [
        {
          title: '登校せずに、登校しよう',
          subtitle: '[Sample 1]',
          description:
            '朝の満員電車は嫌だけど、オンライン授業は切り替えが難しい。そんな悩みを、技術で解決してみませんか？',
          image: 'School',
        },
        {
          title: '街の行列を減らそう',
          subtitle: '[Sample 2]',
          description:
            '「密」を避けようとすればするほど、街の行列は長くなる。行列を無くし、密と無駄な時間を減らす方法を考えてみませんか？',
          image: 'People',
        },
        {
          title: '学力の測り方を再考しよう',
          subtitle: '[Sample 3]',
          description:
            '定期テストは生徒の学力を正しく測れているのだろうか。新たな学力を測る方法を技術で作り上げ、生徒一人一人が正しく評価される社会を作ってみませんか？',
          image: 'Hundreds',
        },
        {
          title: '忘れても良い社会にしよう',
          subtitle: '[Sample 4]',
          description:
            '発達障害、認知症の方など含め、覚えておくのが苦手な人は沢山いる。疲れていたら誰しも集中力は低下する。物忘れをしても、忘れ物をしても、困らない仕組み・ツールで誰かを(あるいは自分を)救ってみませんか？',
          image: 'Mind',
        },
      ],
    }
  },
}
</script>
>

<style lang="scss" scoped>
.ThemeSample {
  margin-bottom: 50px;
  &-Title {
    margin-left: 0;
    margin-right: auto;
  }
  &-Description {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: normal;
    color: $indigo-1;
  }
}

.ThemeSampleCard-Image {
  height: auto;
  width: 100%;
  padding: 30px;
}

@media screen and (max-width: 600px) {
  .ThemeSample {
    &-Description {
      font-size: 20px;
    }
  }
}
</style>
