// 引入ref依赖
import { ref } from "vue";

// 创建变量储存时间并初始化
const nowTime = ref("00:00:00");
// 创建变量传递方法
const getNowTime = () => {
 const now = new Date();
 // 时间字符串格式化（如果是一位数则前置0）
 const hour = now.getHours() < 10 ? `0${
   now.getHours()}` : now.getHours();
 const minu =
     now.getMinutes() < 10 ? `0${
   now.getMinutes()}` : now.getMinutes();
 const sec =
     now.getSeconds() < 10 ? `0${
   now.getSeconds()}` : now.getSeconds();
 // 拼接时间并储存在变量nowTime中
 nowTime.value = `${
   hour}:${
   minu}:${
   sec}`;
 // 实现时钟自走效果
 setTimeout(getNowTime, 1000);
};

// 暴露钩子函数，方便其他模块调用
export { nowTime, getNowTime }