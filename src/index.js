//constでも配列やオブジェクトなら上書きできる。
const animal = ["dog", "cat"];
console.log(animal);
animal.push("brid");

function func1(str) {
  return str;
}
console.log(func1("func1aaaaaa"));

const func2 = (str) => {
  return str;
};

console.log(func2("uuu"));

const myProfile = {
  name: "koma",
  age: 31
};
const { name, age } = myProfile;
const massesi = `私の名前は${name}です。年齢は${age}歳です`;
console.log(massesi);
//デフォルト値
const sayHallo = (name = "ゲスト") => console.log(`こんにちはさ${name}ん`);
sayHallo();
//スプレッド構文
const array = [10, 11];
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...array);
//map
const nameArr = ["sato", "tanaka", "suzuki"];
nameArr.map((name) => {
  console.log(name);
});
const nameArr2 = nameArr.map((C) => {
  return name;
});
console.log("nameArr2", nameArr2);
//filter条件に一致したものを返す
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
//条件分岐map
const newNameArr = nameArr.map((name) => {
  if (name === "sato") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
//三項演算子
const num3 = 1300;
const fomatNum =
  typeof num3 === "number" ? num3.toLocaleString() : "数値を入力してくださ";
console.log(fomatNum);

const sankouenzansikeisan = (num1, num2) => {
  return num1 + num2 > 100 ? "デカすぎです" : "許容範囲ないです";
};
console.log(sankouenzansikeisan(300, 40));

//「||」は「または」ではなく、左辺がfalseなら右辺を返す。
const numm = null;
const fee = numm || "金額が未設定です";
console.log(fee);
//「&&」は「かつ」ではなく、左辺がtureなら右辺を返す。
const numm2 = null;
const fee2 = numm2 && "数値が入っています";
console.log(fee2);
