var s=[0,1];
for(let i=2;i<10;i++){
    var a1=s[i-1];
    var a2=s[i-2];
    s.push(a1+a2); 
}
console.log(s);