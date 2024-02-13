// ①論理型(boolean)
const ability_person: boolean = true
const not_ability_person: boolean = false
console.log('---能力者かどうか---')
console.log(`=> ルフィ:${ability_person}`)
console.log(`=> ナミ:${not_ability_person}`)

// ②数値型(number)
const chopper_bounty: number = 1000
const usopp_bounty: number = 300_000_000
console.log('---懸賞金---')
console.log(`=> チョッパー:${chopper_bounty}ベリー`)
console.log(`=> ウソップ:${usopp_bounty}ベリー`)

// ③文字列型(string)
const luffy: string = 'ルフィ'
console.log('---海賊王になるのは---')
console.log(`=> ${luffy}`)

// ④undefined型(undefind)
const pirate_kind: undefined = undefined
console.log('---海賊王になるのは---')
console.log(`=> ${pirate_kind}`)

// ⑤null型
const laugh_tale: null = null
console.log('---ラフテルとは---')
console.log(`=> ${laugh_tale}`)

// ⑥シンボル型
const devil_fruit1: symbol = Symbol('ゴムゴムの実')
const devil_fruit2: symbol = Symbol('ゴムゴムの実')

console.log('---シンボルで比較---')
console.log(devil_fruit1 === devil_fruit2)

// ⑦bigint型
const luffy_bounty: bigint = 3_000_000_000n
const jinbe_bounty: bigint = 1_100_000_000n
console.log('---懸賞金---')
console.log(`=> 合計${luffy_bounty + jinbe_bounty}ベリー`)
