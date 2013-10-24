function b(arr,n,i,idx,res) {
    idx<arr.length?b(arr,n,i,idx+2,res+(i%arr[idx]?'':arr[idx+1]))||!idx&&i<n?b(arr,n,i+1,0,''):0:console.log(res?res:i);
}
b([3, 'fizz', 5, 'buzz'], 100,0,0,'')