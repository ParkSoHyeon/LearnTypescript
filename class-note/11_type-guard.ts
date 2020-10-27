interface Developer {
    name: string;
    skill: string
}

interface Person {
    name: string;
    age: number
}

function introduce(): Developer | Person {
    return { name: 'Tony', skill: 'Iron Making', age: 26 };
}

var tony = introduce();
// console.log(tony.skill);

// 타입 단언으로 해결(코드 가독성 떨어짐)
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
}
else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}

// 타입 가드로 해결
function isDeveloper(target: Developer | Person): target is Developer { // 타입 가드 정의(is)
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
}
else {
    console.log(tony.age);
}