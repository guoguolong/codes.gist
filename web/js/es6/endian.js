let buffer = new ArrayBuffer(2)
let view = new DataView(buffer)

view.setInt8(0, 5)
view.setInt8(1, -1)

console.log(view.getInt16(0, true))
console.log(view.getInt8(0))
console.log(view.getInt8(1))

