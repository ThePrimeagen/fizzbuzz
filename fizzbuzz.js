(function b(arr,n,i,idx,res) {
    i=i||0,idx=idx||0,res=res||"";
    idx>=arr.length?console.log(res===""?i:res):(function(){res+=!!(i%arr[idx])?"":arr[idx+1];b(arr,n,i,idx+2,res);!!!idx&&i<n?b(arr,n,i+1):null;})();
})([3, 'fizz', 5, 'buzz'], 100);