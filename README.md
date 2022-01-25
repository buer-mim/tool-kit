## formatDate
    **日期时间格式化**
    ***示例*** 
    #```
        const time = '2022-1-1 10:11:12';
        const result = formatDate(time, 'yyyy年MM月dd日 hh时mm分ss秒'); // ***2022年01月01号 10时11分12秒***
    #```
    
    **用符号占位，可以任意组合**
    符号    |   名称
    ----    |   ----
    yyyy    |   年
    MM      |   月
    dd      |   日
    hh      |   小时
    mm      |   分钟
    ss      |   m秒
    