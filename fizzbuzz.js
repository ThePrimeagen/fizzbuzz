!function b(a,n,i,x,r){
x<a.length?b(a,n,i,x+2,r+(i%a[x]?'':a[x+1]))||!x&&i<n?b(a,n,i+1,0,''):0:console.log(r?r:i)
}([3,'fizz',5,'buzz'],100,0,0,'')