export const deepClone = <T>(value: T, hash = new WeakMap<object, any>()): T => {
  // 处理原始数据
  if (value === null || typeof value !== "object") {
    return value
  }
  // 处理日期
  if (value instanceof Date) {
    return new Date(value) as T
  }
  // 处理正则表达式
  if (value instanceof RegExp) {
    return new RegExp(value) as T
  }
  // 处理循环引用
  if (hash.has(value)) {
    return hash.get(value)
  }
  // 处理数组
  if (Array.isArray(value)) {
    const copyArray: any[] = []
    hash.set(value, copyArray)
    for (let i = 0; i < value.length; i++) {
      copyArray[i] = deepClone(value[i], hash)
    }
    return copyArray as T
  }
  // 处理对象
  const copyObject: { [key: string]: any } = {}
  hash.set(value, copyObject)
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      copyObject[key] = deepClone(value[key], hash)
    }
  }
  return copyObject as T
}
