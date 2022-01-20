/**
 * @name 加密
 * @param data 待加密数据
*/
const encrypt = (data) => {
    if(!data){
        return data;
    };
    const result = [], arr = data.split('');
    for(let i = 0;i < arr.length; i++){
      result.push((i+1)%2 === 0 ? String.fromCharCode(data.charCodeAt(i) ^ 0x7D) : arr[i]);
    };
    return result.join('');
};

/**
 * @name 解密
 * @param data 待解密数据
*/
const decrypt = (data) => {
    if(!data){
        return data;
    };
    const result = [], arr = data.split('');
    for(let i = 0;i < arr.length; i++){
      result.push((i+1)%2 === 0 ? String.fromCharCode(data.charCodeAt(i) ^ 0x7D) : arr[i]);
    };
    return result.join('');
};

module.exports = {
    encrypt,
    decrypt
};
