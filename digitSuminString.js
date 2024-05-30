let str="asdh23 ncjf06 ncdc90 abc21f";
let result=0;
for(var i=0;i<str.length;i++){
    let num=0;
    if(str.charAt(i)>='0'&&str.charAt(i)<='9'){
        num=parseInt(str.charAt(i));
        //console.log(num);
        let j=10;
        while(i+1<str.length && (str.charAt(i+1)>='0'&& str.charAt(i+1)<='9')){
            num=(num*j)+parseInt(str.charAt(i+1));
            j*=10;
            i++;
        }
    }
    result+=num;
}
console.log(result);
