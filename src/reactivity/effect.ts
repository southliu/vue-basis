type IFn = () => void

class ReactiveEffect {
  private _fn
  constructor(fn: IFn) {
    this._fn = fn
  }
  run() {
    this._fn()
  }
}

let targetMap = new Map()
export function effect(fn: IFn) {
  // target -> key -> dep
  const _effect = new ReactiveEffect(fn)
  _effect.run()
}