// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}

// 함수 반환 값에 타임을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방
function calc(a: number, b: number): number {
    return a + b;
}

// 함수의 옵셔널 파라미터(?)
function log(a: string, b?: string, c?: string) {

}

log('hello');