  ## formatDate
  **日期时间格式化**
  *参数*
  >+ @param1 <string | number> time
  >+ @param2 <string> type
  **示例，用符号占位，可以任意组合**
  #``` const time = '2022-1-1 10:11:12'; #```
  #``` formatDate(time, 'yyyy年MM月dd日 hh时mm分ss秒'); // 2022年01月01号 10时11分12秒 #```

    符号    |   名称
    ----    |   ----
    yyyy    |   年
    MM      |   月
    dd      |   日
    hh      |   小时
    mm      |   分钟
    ss      |   秒



  ## encrypt
  **加密**
  *参数*
  >+ @param1 <string> data
  **示例**
  #``` const target = '5863538192fa472b9090161b974823bc'; #```
  #``` const result = encrypt(target); // 5E6N5N8L9Of4J29M9M1K19J4E2Nb #```



  ## decrypt
  **解密**
  *参数*
  >+ @param1 <string> data
  **示例**
  #``` decrypt(result); // 5863538192fa472b9090161b974823bc #```



  ## strToJson
  **字符串转json**
  *参数*
  >+ @param1 <string> str
  **示例**
  #``` strToJson('id=1&name=2'); // {id: 1,name: 2} #```



  ## jsonToStr
  **json转字符串**
  *参数*
  >+ @param1 <object> json
  **示例**
  #``` jsonToStr({id: 1,name: 2}); // id=1&name=2 #```



  ## arrRepeat
  **数组去重**
  *参数*
  >+ @param1 <array> arr
  >+ @param2 <...args> args 可变参数
  **示例**
  #``` const arr = [{id:1,name:11},{id:2,name:11},{id:1,name:22},{id:1,name:22}]; #```
  #``` arrRepeat(arr, 'id'); // [{id:1,name:11},{id:2,name:11}] #```
  #``` arrRepeat(arr, 'name'); // [{id:1,name:11},{id:1,name:22}] #```
  #``` arrRepeat(arr, 'id', 'name'); // [{id:1,name:11},{id:2,name:11},{id:1,name:22}] #```



  ## arrDelayer
  **树形结构扁平化**
  *参数*
  >+ @param1 <array> arr
  **示例**
  #``` const tree = [{id:'1',children:[{id:'1-1'},{id:'1-2'}]}]; #```
  #``` arrDelayer(tree, 'id'); // [{id:'1'},{id:'1-1'},{id:'1-2'}]; #```



  ## deepCopy
  **深复制**
  *参数*
  >+ @param1 <object> json
  **示例**
  #``` const copy = {id:'1',colors:{red:1}}; #```
  #``` deepCopy(copy); // {id:'1',colors:{red:1}} #```