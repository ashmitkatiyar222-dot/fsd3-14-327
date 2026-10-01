import fa from 'fs'

fs.symlink("notes.txt",(curr,prev)=>{
    console.log(curr);
    console.log(prev);
})

setTimeout(()=>{
    watcher.unwatchFile()
},3000) 
