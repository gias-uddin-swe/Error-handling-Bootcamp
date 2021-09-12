

কোডে কিছু মিসিং বা ভুল আছে, যেমনঃ ব্রাকেট, সেমিকোলন, কোলন, কমা।


SyntaxError:
>SyntaxError: Identifier 'a' has already been declared
>SyntaxError: Unexpected token '{'
>SyntaxError: Unexpected token ';'











// In JavaScript, a reference error is thrown when a code attempts to reference a non-existing variable.
// অর্থাৎ  খাঁটি বাংলায়  আমরা যখন  কোনো ভ্যারিয়েবল  বা  এক্সপ্রেশন  ব্যবহার  করি যা   আসলে (ডিফাইন করা হয় নাই)  এক্সিস্ট   না  তখন  রেফেরারেন্স  এরর  দিবে 

ReferenceError:
>Uncaught ReferenceError: Cannot access 'a' before initialization
>ReferenceError: b is not defined
>ReferenceError: functionName is not defined
>ReferenceError: abcd is not defined











আমরা যেই মেথড/প্রোপার্টি ব্যবহার করার ট্রাই করতেছি, সেটা বর্তমান টাইপ এর অব্জেক্ট এর উপর ব্যবহার করা যায় না।

HTMLelement.innerText
HTMLelement.innerHTML 
Array/String.length 
HTMLelement.value  // input er jonno 


TypeError:
>TypeError: Assignment to constant variable.
>TypeError: Cannot set property 'map' of null
>TypeError: Cannot read property 'map' of undefined
>TypeError:Cannot read property 'map' of null
>TypeError: Cannot read property 'length' of undefined
>TypeError: obj is not iterable
>TypeError: obj.map is not a function

Bonus :
>try and catch  and finally  with custom Error message 


How we find error :

