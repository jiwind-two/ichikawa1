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
