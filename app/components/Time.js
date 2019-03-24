import React from 'react';

let minute = 1000 * 60;
let hour = minute * 60;
let day = hour * 24;
let month = day * 30;

function getDate(dateTimeStamp) {

    if (dateTimeStamp == undefined) {
        return false;
    } else {
        dateTimeStamp = dateTimeStamp.replace(/\-/g, "/");

        let sTime = new Date(dateTimeStamp).getTime();//把时间pretime的值转为时间戳

        let now = new Date().getTime();//获取当前时间的时间戳

        let diffValue = now - sTime;

        if (diffValue < 0) {
            return ""
        }

        let monthC = diffValue / month;
        let weekC = diffValue / (7 * day);
        let dayC = diffValue / day;
        let hourC = diffValue / hour;
        let minC = diffValue / minute;

        if (monthC >= 1) {
            return (parseInt(monthC) + "个月前");
        }
        else if (weekC >= 1) {
            return (parseInt(weekC) + "周前")
        }
        else if (dayC >= 1) {
            return (parseInt(dayC) + "天前")
        }
        else if (hourC >= 1) {
            return (parseInt(hourC) + "个小时前")
        }
        else if (minC >= 1) {
            return (parseInt(minC) + "分钟前")
        } else {
            return ("刚刚")
        }
    }
}

export default props => <span className="time">{ getDate(props.time) }</span>