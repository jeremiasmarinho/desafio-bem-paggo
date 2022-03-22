export default class BuyForm {
  #id: string;
  #adesivo1: boolean;
  #adesivo2: boolean;
  #adesivo3: boolean;
  #quant: number;
  #obs: string;

  constructor(
    adesivo1: boolean,
    adesivo2: boolean,
    adesivo3: boolean,
    quant: number,
    obs: string,
    id: string = null
  ) {
    this.#id = id;
    this.#adesivo1 = adesivo1;
    this.#adesivo2 = adesivo2;
    this.#adesivo3 = adesivo3;
    this.#quant = quant;
    this.#obs = obs;
  }

  static hollow() {
    return new BuyForm(false, false, false, 0, "");
  }

  get id() {
    return this.#id;
  }

  get adesivo1() {
    return this.#adesivo1;
  }

  get adesivo2() {
    return this.#adesivo2;
  }

  get adesivo3() {
    return this.#adesivo3;
  }

  get quant() {
    return this.#quant;
  }
  get obs() {
    return this.#obs;
  }
}
