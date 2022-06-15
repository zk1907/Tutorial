<template>
    <div id="Eth">
        <div id="customerChart" class="customerChart"></div>
    </div>
</template>

<script>
// import _ from 'lodash';
import CryptoJS from "crypto-js";
import { inject, onMounted } from "vue";
import axiosApi from '@/src/assets/resource/axios.js'
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    setup() {
        let echarts = inject("ec");//引入
        onMounted(() => {//需要获取到element,所以是onMounted的Hook
            let myChart = echarts.init(document.getElementById("customerChart"));
            // 绘制图表
            myChart.setOption({
              title: { text: "总用户量" },
              tooltip: {},
              xAxis: {
                data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
              },
              yAxis: {},
              series: [
                {
                  name: "用户量",
                  type: "line",
                  data: [5, 20, 36, 10, 10, 20],
                },
              ],
            });
            window.onresize = function () {//自适应大小
              myChart.resize();
            };
        });
    },

    data(){
      return{
        counter:0,
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    },
    mounted(){

    },
    created(){
      // this.debclick = _.debounce(this.click,500);
      // this.initDate();
    },
    methods:{
      initDate(){
          let id = '46bf791a432242c253365b623a4b45c5'
          let key = "e4ea89835ad64eb1b8d76069e33908d4"; //加密密钥
          let time = Date.parse(new Date()).toString().substring(0, 10); //十位时间戳，精度是秒
          let str = id + time + key;
          let test = CryptoJS.HmacSHA256(str, key);
          let testStr = CryptoJS.enc.Hex.stringify(test);
          console.log('原字符串',str)
          console.log('签名加密后字符串',testStr)
      }
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
