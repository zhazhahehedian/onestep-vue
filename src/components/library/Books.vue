<template>
  <div>
    <el-row style="height: 840px;">
      <!--<search-bar></search-bar>-->
      <el-tooltip effect="dark" placement="right"
                  v-for="item in books"
                  :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.author}}</span> /
          <span>{{item.date}}</span> /
          <span>{{item.press}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover">
            <img :src="item.cover" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.title}}</a>
            </div>
          </div>
          <div class="author">{{item.author}}</div>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
        :current-page="1"
        :page-size="10"
        :total="20">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data () {
    return {
      books: [
        {
          cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
          title: '三体',
          author: '刘慈欣',
          date: '2019-05-05',
          press: '重庆出版社',
          abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
        },
        {
          cover: 'https://img2.doubanio.com/view/subject/s/public/s33921603.jpg',
          title: '每天回家老婆都在装死',
          author: 'K.Kajunsky/ichida',
          date: '2021-08',
          press: '中国友谊出版社',
          abs: '一切的一切都源自日本网友的一个真实烦恼,为什么每天回家都会看到我的老婆在装死？,由于提问中描述的妻子行为过于离谱，形象又过于可爱，使得话题瞬间在网络中爆火，由此诞生了这一句式：每天回家都会看到XXX在XX。随后，题主K. Kajunsky与漫画家合作将自己和妻子的真实故事转化为漫画随笔，展现出新手夫妻对抗琐碎生活的戏精日常。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.cover {
  width: 115px;
  height: 172px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 115px;
  height: 172px;
  /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #3377aa;
}
</style>
