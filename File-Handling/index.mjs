import {readFile,writeFile} from 'fs/promises';

const filePath=new URL('./index.html',import.meta.url);
let content=await readFile(filePath,{encoding:'utf-8'});

const data={
    name:"vishal Bhargav",
    company:"Prodesk",
    age:23,
}

for(const [key,value] of Object.entries(data)){
    content = content.replace(`{{${key}}}`,value);
}

await writeFile(new URL('./newindex.html',import.meta.url),content);

console.log(content);