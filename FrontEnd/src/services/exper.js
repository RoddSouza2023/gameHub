
const ref = {
  a: 3,
  c: 2
}


const link = new Map()

for (let key in ref){
  console.log(ref.key)
  link.set(key, ref.key)
}

console.log(Object.values(link))