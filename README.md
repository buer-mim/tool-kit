## formatDate
*** 日期时间格式化 ***<br/>
**参数** <br/>
>+ @param1 <string | number> time
>+ @param2 <string> type

**示例** <br/>
#```
const time = '2022-1-1 10:11:12';<br/>
formatDate(time, 'yyyy年MM月dd日 hh时mm分ss秒'); // *** 2022年01月01号 10时11分12秒 ***<br/>
#```
**用符号占位，可以任意组合**<br/>

    符号    |   名称
    ----    |   ----
    yyyy    |   年
    MM      |   月
    dd      |   日
    hh      |   小时
    mm      |   分钟
    ss      |   秒

## encrypt
*** 加密 ***<br/>
**参数** <br/>
>+ @param1 <string> data

**示例** <br/>
#```
const target = '5863538192fa472b9090161b974823bc';<br/>
const result = encrypt(target); // *** 5E6N5N8L9Of4J29M9M1K19J4E2Nb ***<br/>
#```

## decrypt
*** 解密 ***<br/>
**参数** <br/>
>+ @param1 <string> data

**示例** <br/>
#```
decrypt(result); // *** 5863538192fa472b9090161b974823bc ***<br/>
#```

## strToJson
*** 字符串转json ***<br/>
**参数** <br/>
>+ @param1 <string> str

**示例** <br/>
#```
strToJson('id=1&name=2'); // *** {id: 1,name: 2} ***<br/>
#```

## jsonToStr
*** json转字符串 ***<br/>
**参数** <br/>
>+ @param1 <object> json

**示例** <br/>
#```
jsonToStr({id: 1,name: 2}); // *** id=1&name=2 ***<br/>
#```

## arrRepeat
*** 数组去重 ***<br/>
**参数** <br/>
>+ @param1 <array> arr
>+ @param2 <...args> args 可变参数

**示例** <br/>
#```
const arr = [{id:1,name:11},{id:2,name:11},{id:1,name:22},{id:1,name:22}];<br/>
arrRepeat(arr, 'id'); // *** [{id:1,name:11},{id:2,name:11}] ***<br/>
arrRepeat(arr, 'name'); // *** [{id:1,name:11},{id:1,name:22}] ***<br/>
arrRepeat(arr, 'id', 'name'); // *** [{id:1,name:11},{id:2,name:11},{id:1,name:22}] ***<br/>
#```

## arrDelayer
*** 树形结构扁平化 ***<br/>
**参数** <br/>
>+ @param1 <array> arr

**示例** <br/>
#```
const tree = [{id:'1',children:[{id:'1-1'},{id:'1-2'}]}];<br/>
arrDelayer(tree, 'id'); // *** [{id:'1'},{id:'1-1'},{id:'1-2'}] ***<br/>
#```

## deepCopy
*** 深复制 ***<br/>
**参数** <br/>
>+ @param1 <object> json

**示例** <br/>
#```
const copy = {id:'1',colors:{red:1}};<br/>
deepCopy(copy); // *** {id:'1',colors:{red:1}} ***<br/>
#```