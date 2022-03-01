<template>
  <div class="fit-wrapper">
    <div class="demo-fit">
      <div
        v-for="item in fitList"
        :key="item.url"
        @click="clickItem(item.url)"
        class="fititem"
      >
        <!-- <el-avatar
            shape="square"
            :size="100"
            fit="fill"
            :src="item.url"
          ></el-avatar> -->
        <div class="img-wrapper">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
  <!-- <div>maincontent comp</div> -->
</template>

<script setup>
import { ref, reactive } from "vue";
import Wlylogo from 'assets/wlylogo.png'
const fits = ref(["fill", "contain", "cover", "none", "scale-down"]);
const urlitem = ref(
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
);
const fitList = ref([
  // { title: "合同管理系统", imgUrl: Wlylogo, url: 'http://222.128.19.51:38081/' },
  // { title: "wly2a", imgUrl: Wlylogo, url: 'http://222.128.19.51:38081/' },
  // { title: "wly3", imgUrl: Wlylogo, url: 'http://222.128.19.51:38081/' },
  // { title: "wly4", imgUrl: Wlylogo, url: 'http://222.128.19.51:38081/' },
  // { title: "wly5", imgUrl: Wlylogo, url: 'http://222.128.19.51:38081/' },
  // { title: "wly6", imgUrl: urlitem.value, url: 'http://222.128.19.51:38081/' },
]);
const clickItem = (url) => {
  console.log("clickItem", url);
  window.open(url)
};
const walpha30 = "rgba(255,255,255,.3)";
const walpha80 = "rgba(255,255,255,.8)";
</script>

<style lang="scss" scoped>
.fit-wrapper {
  display: flex;
  justify-content: center;
  .demo-fit {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    .fititem {
      margin: 20px;
      cursor: pointer;
      width: 100px;
      overflow: hidden;
      .img-wrapper {
        width: 100px;
        height: 100px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 14px;
        border-radius: 10px;
        text-align: center;
        background-color: v-bind(walpha80);
        cursor: pointer;
        transition: background-color 0.35s;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .img-wrapper:hover {
        background-color: v-bind(walpha30);
      }
      // .customNav:hover>img {
      //     color: v-bind(walpha30);
      // }
      .title {
        font-size: 12px;
        text-align: center;
        text-overflow: ellipsis;
        transition: 0.25s;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>