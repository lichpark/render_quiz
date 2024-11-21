import { useState } from "react";

const fruit = ["apple", "banana", "kiwi", "mango"];
const a0 = fruit; //["apple","banana","kiwi","mango"]
const [a1, b1, c1] = fruit; //"apple","banana","kiwi"

const coffeeold = ["americano", "latte", "mocha", "juice"];
const [m, n] = coffeeold; //"americano","latte"

const test0 = () => ["라면", "우동", "돈가스"];
const [a2, b2] = test0(); //"라면","우동" ;

const [cat, setCat] = useState();

const coffee = ["라떼", "민트", "돌체", "모카", "디카페인", "아아"];
const [a, b, ...rest] = coffee; // '라떼','민트' ,['돌체','모카','디카페인','아아'] -나머지 애들 다나온다

const bread = ["소금빵", "단팥빵", "크림빵"];

const test = [...coffee, ...bread];
