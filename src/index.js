import "./styles.css";
/**
 * const プロパティは変更できる
 */
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monky");
console.log(val5);
/**
 * テンプレート文字列
 */
/**
 * 

const name = "市川";
const age = 69;
const messege = `私の名前は${name}です、年は${age}です。`;
console.log(messege);
 */
/**
 * アロー関数
 */
function func2(str) {
  return str;
}
console.log(func2("bbbb"));

const func1 = function (str) {
  return str;
};
console.log(func1("aaaaa"));

const func3 = (str) => {
  return str;
};
console.log(func3("アロー関数"));

const func5 = (str) => str;

console.log(func5("アロー関数3"));
/*
 * 分割代入
 */
/**
 * 

const myProfile = {
  name: "市川",
  age: 69
};

const message2 = `私の名前は${myProfile.name}です、歳は${myProfile.age}です。`;
console.log(message2);

const {name,age}=myProfile;
const message3=`私の名前は${name}です、歳は${age}です。`;
console.log(message3);
 */

const myProfile = ["市川", 69];
const message30 = `私の名前は${myProfile[0]}です、歳は${myProfile[1]}です。`;
console.log(message30);

const [name, age] = myProfile;
const message3 = `私の名前は${name}です、歳は${age}歳です。`;
console.log(message3);
/**
 * デフォルト値
 */
const sayHellow = (name = "ゲスト") => console.log(`${name}さん、こんにちは`);
sayHellow();
/***
 * スプレッド構文
 */

const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

/**
 * 配列のコピーや結合
 */

const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);
arr6[0] = 100;
console.log(arr4);
console.log(arr6);

//const arr7=[...arr4,...arr5];
//console.log(arr7);

//const arr8=arr4;
//console.log(arr8);
//参照が引き継がれる
//arr8[0]=100;
//console.log(arr4);

/**
 * map fillter
 */
const nameArr = ["田中", "山田", "市川"];
//const nameArr2 = nameArr.map((name) => {
//  return name;
//});
//console.log(nameArr2);

nameArr.map((name, index) =>
  console.log(`${index + 1}番目は${name}さんです。`)
);

const numArr = [1, 2, 3, 4, 5];
const newnumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newnumArr);

const newnameArray = nameArr.map((name) => {
  if (name === "市川") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newnameArray);
