import { EventEmitter } from "node:events";

const sayHi =(name)=>{
    console.log(`${name} logged in`)
};

// sayHi("ashmit");

const task= new EventEmitter();
task.once("greet",()=>{
    console.log("system started");
});

task.on("greet",sayHi);
task.on("greet",(name)=>{
    console.log(`${name} starts working`);
})
task.off("greet",sayHi);
task.emit("greet","rahul sinha");
task.emit("greet","ashutosh");


const exitt=(name)=>{
    console.log(`${name} logged off`)
};


task.once("exitt",()=>{
    console.log("system shutdown");
});
task.on("exit",exitt);

task.emit("exit","ashutosh");
task.emit("greet","ashmit")
console.log("total listener",task.listenerCount("greet"));
task.removeAllListeners("greet");