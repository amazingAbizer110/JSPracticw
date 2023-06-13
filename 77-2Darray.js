const twoD_array=(m,n)=>{
    arr=[]
    for (let i =0; i<m;i++){
        arr[i]=[];
    }
    for (let i =0; i<m;i++){
        for (let j =0; j<n;j++){
            arr[i][j]=j;
        }
    }
    return arr
}
console.log(twoD_array(3,3))
