// SyntaxError::

// যখন  কোডে কোনো  মিসিং থাকে  অথবা  কোনো সিনটেক্সট ভুল (ব্রাকেট ,কোলন ,সেমিকোলন) থাকে  তখন  সিনটেক্সট এরর দেয় 


// solution=>সল্যুশন এর  উপায় হচ্ছে  কোড  কমেন্ট করে  করে  বের করা  যে  আসলে  আমাদের   কোডের  কোন  অংশে  এরর টা দিচ্ছে  তাহলে  খুব  দ্রুত  সল্ভ করে ফেলা যাবে 

SyntaxError: Identifier 'a' has already been declared
const a= 5;
const a= 5;

function sum(a,b) {
    const total=a+b;
    return  total;
}
const result=sum(1,3);
console.log(result)

// 1) মাঝে মাঝে  অবজেক্ট এর মধ্যে  কোলন মিস্টেকে করে সেমিকোলন দিয়ে  দেই 
const obj={
    name:"kolim uddin"
}
const result= obj.name;
console.log(result)



// ReferenceError
// In JavaScript, a reference error is thrown when a code attempts to reference a non-existing variable.

// অর্থাৎ  খাঁটি বাংলায়  আমরা যখন  কোনো ভ্যারিয়েবল  বা  এক্সপ্রেশন  ব্যবহার  করি যা   আসলে  এক্সিস্ট না  তখন  রেফেরারেন্স  এরর  দিবে 
// Uncaught ReferenceError: Cannot access 'a' before initialization


console.log(a) // hoisting
const a= 5;
console.log(b)
var b=10;


// ReferenceError: b is not defined
const x= "hero alom";
console.log(b);


// ReferenceError: abcd is not defined
const abc="HelloReferenceError: abcd is not defined world";
console.log(abcd);

অবজেক্ট এর উপর  লুপ চালাইলে  not  iterable  এই  এরর  টা  দিবে 

const obj={name:"hello"};
obj.forEach(pd=>pd)


TypeError
var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj is not iterable
    // …
}

// map  is not a function 
let obj = {a: 13, b: 37, c: 42};

obj.map(function(num) {
  return num * 2;
});

//আমরা যেই মেথড/প্রোপার্টি ব্যবহার করার ট্রাই করতেছি, সেটা বর্তমান টাইপ এর অব্জেক্ট এর উপর ব্যবহার করা যায় না।



// null  অথবা  undefine  এর  উপর  কিছু  সেট করতে গেলে  টাইপ এরর  দিবে ; কারণ  null  একটা  ভ্যালিড  অবজেক্ট  না 


// >TypeError: Cannot read property 'map' of undefined
const a= undefined;

a.map(pd=>pd);

a=null;
a.map(pd=>pd)




try{
    alert("i am from try block");
}
catch(err){
    alert("i am from catch block");
}
finally{
    alert("i am from finally block");
}





