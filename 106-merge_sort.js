function merge(arr,l,m,r){
    let n1=m-l+1;
    let n2=r-m ;
    let L=new Array(n1);
    let R=new Array(n2);

    for(let i=0;i<n1;i++) L[i]=arr[l+i];
    for (let j=0;j<n2;j++) R[j]=arr[m+1+j];
    let i=0,j=0;
    let k=l;

    while(i<n1 && j<n2){
        if (L[i]<=R[j]){
            arr[k]=L[i];
            i++;
        }
        else{
            arr[k]=R[j];
            j++;

        }
        k++;
    }
    while(i<n1){
        arr[k]=L[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k]=R[j];
        j++;
        k++;
    }


}

function mergeSort(arr,l,r) {
    if (l>=r) return ;

    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
    console.log(arr)
}
console.log(mergeSort([5,3,4,2,1],0,4))