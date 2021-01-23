export default {
    data() {
        return {
            dateObj: null
        }
    },
    created() {
        this.dateObj = new Date()
    },
    methods: {
        getdate() {
            let date = new Date()
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let strDate = date.getDate();

            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            return year + "-" + month + "-" + strDate
        }
        , getYear() {
            let date = this.dateObj
            return date.getFullYear();
        },
        getMonth() {
            let date = this.dateObj
            let month = date.getMonth() + 1;
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            return month;
        }, getWeek() {
            let date = this.dateObj
            return date.getWeak()
        },
        getCurrentDate() {
            let date = this.dateObj
            let strDate = date.getDate();
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            return strDate;
        }

    }
}