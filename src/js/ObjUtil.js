export default {
    methods: {
        getPersonalFromLocal() {
            let info = localStorage.getItem("loginPersonalInfo")
            if (this.isNullObj(info)) return 0;
            return JSON.parse(info)
        },
        updateLocalPersonalInfo(avatar, nickName, overage, phone, sex) {
            let info = this.getPersonalFromLocal()
            if (!this.isNullObj(avatar)) {
                info['avatar'] = avatar
            }
            if (!this.isNullObj(nickName)) {
                info['nickName'] = nickName
            }
            if (!this.isNullObj(overage)) {
                info['overage'] = overage
            }
            if (!this.isNullObj(phone)) {
                info['phone'] = phone
            }
            if (!this.isNullObj(sex)) {
                info['sex'] = sex
            }
            localStorage.setItem("loginPersonalInfo", JSON.stringify(info))
        },
        updateWholeFamilyPersonalInfo() {

        },
        isNullObj(obj) {
            if (obj === null || obj === undefined || obj === ""||obj.trim()==="") {
                return true
            }
            return false
        }
    }
}