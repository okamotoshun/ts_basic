import { type } from 'os'

// オブジェクト
const luffyInfo = {
  devil_fruit: 'ゴムゴムの実',
  bounty: 3000000000,
}

// 型の記法
const luffy1: {
  devil_fruit: string
  bounty: number
} = {
  devil_fruit: 'ゴムゴムの実',
  bounty: 3000000000,
}

// type文(型に別名をつける)
type AbilityPerson = {
  devil_fruit: string
  bounty: number
}
const luffy2: AbilityPerson = {
  devil_fruit: 'ゴムゴムの実',
  bounty: 3000000000,
}

// interface宣言(オブジェクト型だけ)
interface AbilityPerson1 {
  devil_fruit: string
  bounty: number
}

const luffy3: AbilityPerson1 = {
  devil_fruit: 'ゴムゴムの実',
  bounty: 3000000000,
}

// Declaration merging
interface AbilityPerson2 {
  devil_fruit: string
}

interface AbilityPerson2 {
  bounty: number
}

const luffy4: AbilityPerson2 = {
  devil_fruit: 'ゴムゴムの実',
  bounty: 3000000000,
}

// インデックスシグネチャ
type BountyData = {
  [key: string]: number
  // 任意のstring型のキー
}
const chara: BountyData = {
  luffy: 3000000000,
  jinbe: 1100000000,
  chopper: 1000,
}

// ただしどんなプロパティでもアクセスできてしまう
const test: number = chara.usopp
console.log(test)

// オプショナルなプロパティ
type Character = {
  bounty: number
  devil_fruit?: string
}
const luffy5: Character = {
  bounty: 3000000000,
  devil_fruit: 'ゴムゴムの実',
}

const usopp: Character = {
  bounty: 5000000000,
}

console.log(luffy5.devil_fruit)
console.log(usopp.devil_fruit)

// ユニオン型
type AbilityPerson3 = {
  readonly devil_fruit: string
}

const luffy6: AbilityPerson3 = {
  devil_fruit: 'ゴムゴムの実',
}

// console.log(luffy6.devil_fruit);
// luffy6.devil_fruit = 'メラメラの実'

// typeofキーワード
const num: number = 0
type berry = typeof num
const bounty: berry = 1000

const chopper = {
  bounty: 1000,
  devil_fruit: 'ヒトヒトの実',
}
type AbilitiPerson3 = typeof chopper
// 型推論によって決定
const luffy7: AbilitiPerson3 = {
  bounty: 3000000000,
  devil_fruit: 'ゴムゴムの実',
}

console.log(luffy7);
