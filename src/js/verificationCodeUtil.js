import requestService, {getRequest} from "@/utils/requestService";
import $ from "jquery";

export default {
    date() {
        return {
            timer: null,
        }
    },
    methods: {
        getCode(phone) {
            if (this.isNullObj(phone)) {
                alert("请输入手机号")
                return 0;
            }
            getRequest(requestService.ConsumerHost + "/code/" + phone, {}).then(res => {
                console.log("验证码 :" + JSON.stringify(res))
                this.code = res["data"];
            }).catch(err => {
                console.log("code request error " + err)
            })
            sessionStorage.setItem("alert_code_phone", phone)
            this.settime()
        },//倒计时
        settime() {
            if (this.isNullObj(this.timer)) {
                this.isAble = true
                this.$forceUpdate();
                this.timer = setInterval(() => {
                    if (this.countDown > 0 && this.countDown <= 60) {
                        this.countDown--;
                        localStorage.setItem("alert_countDown", this.countDown)
                        $("#countBtn").val("重新获取(" + this.countDown + ")s")
                    } else {
                        this.isAble = false
                        localStorage.removeItem("alert_countDown")
                        $("#countBtn").val("获取验证码")
                        clearInterval(this.timer);
                        this.timer = null;
                        sessionStorage.removeItem("alert_code_phone")
                    }
                }, 1000)
            }
        },
    }
}