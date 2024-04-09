const linearSearch=(arr,x)=>{
    for(let i=0;i<arr.length;i++) if(arr[i]==x) return i;
    return undefined;
}

const binarySearch=(arr,x)=>{
    let f=0,e=arr.length-1;
    while(f<=e){
        let mid=(f+e)/2;
        if(arr[mid]==x) return mid;
        else if(arr[mid]>x) e=mid-1;
        else f=mid+1;
    }
    return undefined;
}

module.exports={
    linearSearch,binarySearch
}