// オブジェクト
const luffyInfo = {
    devil_fruit: 'ゴムゴムの実',
    bounty: 3000000000,
};
// 型の記法
const luffy1 = {
    devil_fruit: 'ゴムゴムの実',
    bounty: 3000000000,
};
const luffy2 = {
    devil_fruit: 'ゴムゴムの実',
    bounty: 3000000000,
};
const luffy3 = {
    devil_fruit: 'ゴムゴムの実',
    bounty: 3000000000,
};
const luffy4 = {
    devil_fruit: 'ゴムゴムの実',
    bounty: 3000000000,
};
const chara = {
    luffy: 3000000000,
    jinbe: 1100000000,
    chopper: 1000,
};
// ただしどんなプロパティでもアクセスできてしまう
const test = chara.usopp;
console.log(test);
const luffy5 = {
    bounty: 3000000000,
    devil_fruit: 'ゴムゴムの実',
};
const usopp = {
    bounty: 5000000000,
};
console.log(luffy5.devil_fruit);
console.log(usopp.devil_fruit);
const luffy6 = {
    devil_fruit: 'ゴムゴムの実',
};
// console.log(luffy6.devil_fruit);
// luffy6.devil_fruit = 'メラメラの実'
// typeofキーワード
const num = 0;
const bounty = 1000;
const chopper = {
    bounty: 1000,
    devil_fruit: 'ヒトヒトの実',
};
// 型推論によって決定
const luffy7 = {
    bounty: 3000000000,
    devil_fruit: 'ゴムゴムの実',
};
console.log(luffy7);
export {};
