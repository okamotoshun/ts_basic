"use strict";
// ①論理型(boolean)
const ability_person = true;
const not_ability_person = false;
console.log('---能力者かどうか---');
console.log(`=> ルフィ:${ability_person}`);
console.log(`=> ナミ:${not_ability_person}`);
// ②数値型(number)
const chopper_bounty = 1000;
const usopp_bounty = 300000000;
console.log('---懸賞金---');
console.log(`=> チョッパー:${chopper_bounty}ベリー`);
console.log(`=> ウソップ:${usopp_bounty}ベリー`);
// ③文字列型(string)
const luffy = 'ルフィ';
console.log('---海賊王になるのは---');
console.log(`=> ${luffy}`);
// ④undefined型(undefind)
const pirate_kind = undefined;
console.log('---海賊王になるのは---');
console.log(`=> ${pirate_kind}`);
// ⑤null型
const laugh_tale = null;
console.log('---ラフテルとは---');
console.log(`=> ${laugh_tale}`);
// ⑥シンボル型
const devil_fruit1 = Symbol('ゴムゴムの実');
const devil_fruit2 = Symbol('ゴムゴムの実');
console.log('---シンボルで比較---');
console.log(devil_fruit1 === devil_fruit2);
// ⑦bigint型
const luffy_bounty = 3000000000n;
const jinbe_bounty = 1100000000n;
console.log('---懸賞金---');
console.log(`=> 合計${luffy_bounty + jinbe_bounty}ベリー`);
