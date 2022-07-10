type IFn = () => void

class ReactiveEffect {
  private _fn
  constructor(fn: IFn) {
    this._fn = fn
  }
  run() {
    activeEffect = this
    this._fn()
  }
}

let targetMap = new Map()
export function tarck(target: object, key: string | symbol) {
  // target -> key -> dep
  let depsMap = targetMap.get(key)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(key, depsMap)
  }

  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Map()
  }

  dep.push(activeEffect)
}

let activeEffect: unknown;
export function effect(fn: IFn) {
  const _effect = new ReactiveEffect(fn)
  _effect.run()
}