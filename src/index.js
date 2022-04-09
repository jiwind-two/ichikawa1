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

const name = "市川";
const age = 69;
const messege = `私の名前は${name}です、年は${age}です。`;
console.log(messege);
