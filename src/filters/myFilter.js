//    视屏时长转换
export function duration_cover_filter(time) {
    let hour = Math.floor(time / 3600)
    let minute = Math.floor(time / 60)
    let second = time % 60
    return hour + ":" + minute + ":" + second
}

//视屏发布时间格式化
export function date_format_filter(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}