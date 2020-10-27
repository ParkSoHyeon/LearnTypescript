var a;
a = 20;
a = 'a';
var b = a as string;    // 타입 추론이 아닌 개발자가 타입을 잘 알고 있으니 개발자가 단언한 타입으로 추론해라.(as)

let div = document.querySelector('#app') as HTMLDivElement;
div.innerText;