var x = 0;
console.log(x+1);

let y = 352345;
console.log(y);

const pi = 3.1427
console.log(pi)
// pi = 94857239048     this will give error as pi is const and it's value can't be changed
console.log(pi) 

for(let i = 0; i < 30; i++) {
    console.log(i);
}

let c = 0
while(c < 10) {
    console.log(c);
    c++;
}



do {
    console.log(c)
} while (c < 10);

arr = [545,23452345,325,2345234,52345,32,4532,45,354]
for (const i in arr){
    console.log(i)
}

for(const i of arr) {
    console.log(i)
}

let count=0;
function handleClick(){
    console.log("you clicked!!");
    count++;
    window.alert(`You clicked ${count} times!!.`);
}

