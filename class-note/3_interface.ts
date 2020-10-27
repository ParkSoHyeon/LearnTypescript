interface User {
    age: number;
    name: string;
}

// 변수에 활요한 인터페이스
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
var capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number
}
var sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string
}
var arr: StringArray = [ 'a', 'b', 'c' ];
// arr[3] = 0;
arr[3] = 'd';

// 딕셔너리 패턴
interface StringRegxDictionary {
    [key: string]: RegExp;
}
var obj: StringRegxDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a';
obj['tsFile'] = /\.ts$/;
Object.keys(obj).forEach(function () {});

// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    name: '캡틴',
    age: 100,
    language: 'typescript'
}