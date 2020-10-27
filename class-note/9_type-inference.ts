// 타입을 따로 지정하지 않더라도 변수를 선언하거나 초기화 할 때 타입 추론이 일어남
// 타입 추론 기본 1
var a;

function getB(b = 10) {
    var c = '10';
    return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem:Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}
var detailedItem: DetailedDropdown<number> = {
    value: 30,
    title: 'abc',
    description: 'abc is abc',
    tag: 3
}

// Best Common Type: 가장 근접한 타입을 추론한다(유니온 타입으로 다 묶음)
var arr = [ 'a', 3, true, 'b' ];