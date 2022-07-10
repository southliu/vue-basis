import { reactive } from "../reactive"
import { effect } from "../effect"

interface IState {
  age: number;
}

describe('effect', () => {
  it('happy path', () => {
    const user = reactive({
      age: 10
    });

    let nextAge;
    effect(() => {
      nextAge = (user as IState).age + 1
    });

    expect(nextAge).toBe(10);

    // update
    (user as IState).age++;
    expect(nextAge).toBe(11);
  })
})
