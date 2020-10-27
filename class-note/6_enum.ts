// 이넘 디폴트 값은 index: 0, 1, 2, ...
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes);   // 0

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askFunction(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askFunction(Answer.Yes);
// askFunction('Yes');