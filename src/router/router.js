//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
import clientChat from "@/components/client/Client";
import login from "@/components/login/login";
import register from "@/components/login/register";
import Home from "@/components/Home/Home";
// import BuyAticket from "@/components/CoreSercie/BuyAticket";
import ScheduleTraining from "@/components/CoreSercie/ScheduleTraining";
import PersonalInfoIndex from "@/components/personalInfo/PersonalInfoIndex"
import BuyTickets from "@/components/CoreSercie/BuyTickets";
import VideoLearning from "@/components/CoreSercie/VideoLearning";
import VideoPage from "@/components/CoreSercie/VideoPage";
import SecondRouterView from "@/components/giveUp/SecondRouterView";
//第三方库需要use一下才能用
Vue.use(VueRouter)


//定义routes路由的集合，数组类型
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path: "/", component: Home},
    {path: "/home", component: Home},
    {path: "/login", component: login},
    {path: "/register", component: register},
    {path: "/video", component: VideoLearning},
    {path: "/videoPage", component: VideoPage},
    {
        path: "/ticket", component: BuyTickets,
        children: [{path:'a',component:SecondRouterView}]
    },
    {path: "/train", component: ScheduleTraining},
    {path: "/personal", component: PersonalInfoIndex},
    {path: '/chat', name: clientChat, component: clientChat}
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
//ES6简写，等于routes：routes
    mode: "history",
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router