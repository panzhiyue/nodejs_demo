import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime.js';
//#region 时间戳
//获取当前时间错(秒)
console.log('获取当前时间错(秒)：'+dayjs().unix());

//获取当前时间错(毫秒)
console.log('获取当前时间错(毫秒)：'+dayjs().valueOf());

//#endregion


//#region 解析时间
//当前时间
console.log('当前时间：'+dayjs());
//字符串
console.log('解析字符串：'+dayjs('2018-08-08'));
//时间戳(毫秒)
console.log('解析时间戳(毫秒)：'+dayjs(1662455505186));
//#endregion

console.log('格式化时间：'+dayjs().format('YYYY-MM-DD'));
//获取14天前的时间
console.log('计算前一段时间：'+dayjs().subtract(14,'day').format('YYYY-MM-DD'));
//获取7天后的时间
console.log('计算后一段时间：'+dayjs().add(7, 'day'));
//#region startOf获取一月/一周等 开始时间
console.log('本周第一天开始时间：'+dayjs().startOf('week').format('YYYY-MM-DD'));
console.log('本月第一天开始时间：'+dayjs().startOf('month').format('YYYY-MM-DD'));

//#endregion

//#region startOf获取一月/一周等末尾时间
console.log('本周末尾时间：'+dayjs().endOf('week').format('YYYY-MM-DD'));
console.log('本月末尾时间：'+dayjs().endOf('month').format('YYYY-MM-DD'));
//#endregion

//#region 计算时间差，获取两个不同时间的差，如2020-09-25和2020-06-05相差112天：
console.log('2020-09-25与2020-06-05相差多少天：'+dayjs('2020-09-25').diff('2020-06-05', 'day'));
console.log('2020-09-25与2020-06-05相差多少月：'+dayjs('2020-09-25').diff('2020-06-05', 'month')); 
console.log('2020-09-25与2020-06-05相差多少小时：'+dayjs('2020-09-25').diff('2020-06-05', 'hour'));
//endregion

//获取月份天数
console.log('当前月份天数：'+dayjs().daysInMonth())

//距离当前时刻，,我们经常看到显示“1分钟前”、“3小时内”等时间转换后显示效果
//dayjs也可以轻松实现：
//fromNow()表示距离当前时刻，toNow()表示相对当前时刻，其实感觉意思差不多。
//不过要想fromNow()和toNow()生效，需要使用插件 RelativeTime，方法是先引入插件，再执行调用方法：
//import relativeTime from 'dayjs/plugin/relativeTime';
//dayjs.extend(relativeTime);
dayjs.extend(relativeTime);
console.log(dayjs('2020-09-27 18:22:32').fromNow()); 
console.log(dayjs('2020-09-27 18:22:32').toNow());  