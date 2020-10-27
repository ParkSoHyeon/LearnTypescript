// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온 타입(|) 장점: 타입 가드(특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
var seho: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 인터페이스에 유니온 타입을 적용했을 때는 공통된 속성만 접근 가능
function askFunction(someone: Developer | Person) {
    someone.name
    // someone.skill
    // someone.age
}
askFunction({ name: '디벨로퍼', skill: '웹 개발' });
askFunction({ name: '캡틴', age: 100 });

// 인터셉션 타입(&)
// 인터페이스에 인터셉션 타입을 적용했을 때는 모든 속성만 접근 가능
function askFunction2(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}
askFunction2({ name: '디벨로퍼', skill: '웹 개발', age: 33 });