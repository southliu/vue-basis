import { tarck } from "./effect"

export function reactive(raw: object) {
  return new Proxy(raw, {
    get(target, key) {
      const res = Reflect.get(target, key)

      // TODO 依赖收集
      tarck(target, key)
      return res
    },
    set(target, key, value) {
      const res = Reflect.set(target, key, value)
      
      // TODO 触发依赖
      return res
    }
  })
}