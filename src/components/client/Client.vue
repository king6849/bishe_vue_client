<template>
  <div class="container-fluid">
    <!--    头部-->
    <div class="row">
      <div class="col-md-12 chatHeader border rounded-top text-left">
        <h3>客服咨询</h3>
      </div>
    </div>
    <!--    主体-->
    <div class="row border">
      <div class="col-md-12 scrollBar contentBody ">
        <ul class="list-group list-unstyled">
          <li class="list-group-item" v-for="(item,index) in historyMsgList[currentStaff]" :key="index">
            <!-- 自己的消息-->
            <div v-if="userInfo.nickName === item.nickName" class="pull-right media rightMsg">
              <div class="media-body">
                <h5>{{ userInfo.nickName }}</h5>
                {{ item.msg }}
              </div>
              <img :src="userInfo.avatar" alt="." class="" width="40px" height="40px"/>
            </div>
            <!--            来自客服的消息-->
            <div v-if="userInfo.nickName !== item.nickName" class="pull-left media leftMsg">
              <img :src="staffInfo[currentStaff].avatar" alt="." width="40px" height="40px" class=""/>
              <div class="media-body">
                <h5>{{ staffInfo[currentStaff].nickName }}</h5>
                {{ item.msg }}
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>

    <!--    输入框-->
    <div class="row chatHeader border rounded-bottom">
      <nav class="navbar navbar-expand-md navbar-light bg-light carte">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link" >表情</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >文件</a>
          </li>
        </ul>
      </nav>


      <div class=" input-group mb-2 mr-sm-2 ">
        <textarea class="form-control noLine" rows="3" v-model="chatMsg.msg"/>
        <div class="input-group-append">
          <button class="btn btn-success noLine" v-on:click="sendMessage">发送</button>
        </div>
      </div>


    </div>
  </div>

</template>
<script>


import requestService, {deleteRequest, get} from "@/utils/requestService";

export default {
  data() {
    return {
      websocket: null,
      chatMsg: {type: "chat", from: '', target: '', msg: ""},
      //从服务器里拿
      userInfo: {
        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
        nickName: 'name1',
        role: 0
      },
      //从服务器里拿
      staffInfo: {
        "kf1": {
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          nickName: 'kf1',
        }
      },
      //websocket传输
      //文本信息
      currentStaff: 'kf1',
      msgList: {
        //  消息队列模板
        // "kf1": ["你好", "在吗"],
      },
      historyMsgList: {
        //  "kf1":[ {name:name1 ,msg:你好},]
      },
      noticeList: []
    }
  }, created() {
    this.initWebSocket()
  },
  destroyed() {
    this.websocket.close();
  },
  // watch: {
  //   historyMsgList: {
  //     handler() {
  //       this.$forceUpdate()
  //     }
  //   }
  // },
  methods: {
    handleReachTop() {
      return new Promise(resolve => {
        console.log(resolve)
      });
    },
    initWebSocket() { //初始化weosocket
      const wsuri = "ws://127.0.0.1:8888/ws";
      this.websocket = new WebSocket(wsuri);
      this.websocket.onmessage = this.websocketonmessage;
      this.websocket.onopen = this.websocketonopen;
      this.websocket.onerror = this.websocketonerror;
      this.websocket.onclose = this.websocketclose;
    },
    sendMessage() {
      //发送消息  his  name:[]
      var his = this.historyMsgList[this.currentStaff]
      if (this.isNullObj(his)) {
        his = []
      }
      his.push({"nickName": this.userInfo.nickName, "msg": this.chatMsg.msg})
      this.$set(this.historyMsgList, this.currentStaff, his)
      this.chatMsg.target = this.currentStaff
      this.chatMsg.from = this.userInfo.nickName
      this.websocket.send(JSON.stringify(this.chatMsg))
      //持久化
      this.saveSingleMsg(this.userInfo.nickName, this.userInfo.nickName, this.currentStaff, this.chatMsg.msg, this.doSaveDialog)
      this.chatMsg.msg = ''
    },
    appendMessage(message) {
      // 接受消息
      console.log("收到消息" + message)
      let json = JSON.parse(message)
      this.disparch(json["type"], json);
    }, disparch(type, data) {
      if (type === "unread") {
        this.unread(data)
      } else if (type === "chat") {
        this.receivedMsg(data)
      } else {
        return
      }
    }, //拉取未读消息
    unread(jsonObj) {
      let user = jsonObj['user']
      let list = jsonObj['msgList']
      if (this.isNullObj(list)) {
        return
      }
      //持久化消息
      this.saveListMsg(this.userInfo.nickName, user, user, list, this.doSaveDialog)
      let listElement = this.historyMsgList[user];
      if (this.isNullObj(listElement)) {
        listElement = []
      }
      list.forEach(item => {
        listElement.push({"nickName": user, "msg": item})
      })
      this.$set(this.historyMsgList, user, listElement)
      this.haveRead(user)
    },
    haveRead(nickName) {
      console.log("清除服务器消息缓存")
      deleteRequest(requestService.chatHost + "/haveread/" + nickName, {})
    },
    //当前接收的消息
    receivedMsg(jsonObj) {
      var from = jsonObj['from']
      this.currentStaff = from
      var list = this.historyMsgList[from]

      if (this.isNullObj(list)) {
        list = []
      }
      //持久化消息
      this.saveSingleMsg(this.userInfo.nickName, from, from, jsonObj['msg'], this.doSaveDialog)
      list.push({"nickName": from, "msg": jsonObj['msg']})
      this.$set(this.historyMsgList, from, list)
    },
    //持久化单条的消息
    saveSingleMsg(storeName, fromWho, toWho, msg, doSave) {
      return new Promise(function (resolve) {
        doSave(storeName, fromWho, toWho, msg)
        resolve(fromWho, msg)
      })
    },
    //持久化多条信息
    saveListMsg(storeName, fromWho, toWho, msgList, doSave) {
      return new Promise(function (resolve) {
        msgList.forEach(item => {
          doSave(storeName, fromWho, toWho, item)
        })
        resolve(msgList)
      })
    }
    , doSaveDialog(storeName, fromWho, toWho, msg) {
      //存储格式 "selfNickName": { userInfoNickName:[ {name:name1 ,msg:你好},]  , }
      let msgJsonObj = JSON.parse(localStorage.getItem(storeName))
      if (this.isNullObj(msgJsonObj)) {
        msgJsonObj = {}
      }
      let msglist = msgJsonObj[toWho]
      if (this.isNullObj(msglist)) {
        msglist = []
      }
      msglist.push({"nickName": fromWho, "msg": msg})
      let saveObj = {}
      saveObj[toWho] = msglist
      console.log("who " + toWho)
      localStorage.setItem(storeName, JSON.stringify(saveObj))
    },

    // loadHistoryFromLocal(userInfoNickName) {
    //   let his = JSON.parse(localStorage.getItem(userInfoNickName))
    //   if (this.isNullObj(his)) {
    //     return 0
    //   }
    //   let list = this.historyMsgList[userInfoNickName]
    //   if (this.isNullObj(list)) {
    //     list = []
    //   }
    //   his.forEach(item => {
    //     list.push(item)
    //   })
    //   this.$set(this.historyMsgList, this.currentStaff, list)
    //   this.$forceUpdate()
    //   console.log("this.historyMsgList[nickName] " + JSON.stringify(this.historyMsgList[userInfoNickName]))
    // },
    loadHistoryFromLocal(staffInfoNickName) {
      console.log("读取本地缓存 " + staffInfoNickName)
      let his = JSON.parse(localStorage.getItem(staffInfoNickName))
      if (this.isNullObj(his)) {
        return 0
      }
      for (let userInfoListKey in his) {
        console.log("userInfoListKey " + userInfoListKey)
        let msgList = his[userInfoListKey]
        if (this.isNullObj(msgList)) continue
        let list = this.historyMsgList[userInfoListKey]
        if (this.isNullObj(list)) {
          list = []
        }
        msgList.forEach(item => {
          list.push(item)
        })
        this.$set(this.historyMsgList, userInfoListKey, list)
        console.log("加载本地缓存：" + JSON.stringify(this.historyMsgList[userInfoListKey]))
      }
    },
    //对象是否为空
    isNullObj(obj) {
      if (obj === null || obj === undefined || obj === "") {
        return true
      }
      return false
    }
    ,
    websocketonmessage(event) {
      this.appendMessage(event.data)
    },
    websocketonopen() {
      //建立连接，发送个人信息
      let info = {type: "chat_basic_info", info: this.userInfo}
      this.websocket.send(JSON.stringify(info))
      //拉取服务器缓存的消息
      this.pullUnreadMsg()
      //加载本地消息
      this.loadHistoryFromLocal(this.userInfo.nickName)
    }, pullUnreadMsg() {
      get(requestService.chatHost + "/client/unread/" + this.userInfo.nickName, {}, this.pullMsgSucc, this.pullMsgErr)
    }, pullMsgSucc(res) {
      console.log("拉取未读消息 " + res.data)
    }, pullMsgErr(res) {
      console.log(res)
    },
    websocketonerror() {
      this.appendMessage("error")
    },
    websocketclose() {
      this.appendMessage("close")
    }
  }
}

</script>
<style scoped>
/*头部*/
.chatHeader {
  background: #ffffff;
}

.chatHeader h3 {
  padding-top: 4px;
}

.chatHeader hr {
  position: relative;
  top: -6px;
}

/*主体*/
.contentBody {
  background: #ffffff;
  height: 400px;
  width: auto;
}

.scrollBar {
  overflow: scroll;
  overflow-y: auto;
  overflow-x: auto;
}

/*右边消息*/
.rightMsg {
  position: relative;
  right: -4%;
}

/*左边消息*/
.leftMsg {
  position: relative;
  left: -4%;
}

/*菜单*/
.carte {
  padding: 0!important;
}

.carte button {
  margin-right: 5px;
}

.noLine {
  display: inline-block;
}


li {
  border: 0;
}

</style>