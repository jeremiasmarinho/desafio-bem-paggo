import BuyForm from "./BuyForm";

export default interface FormRepository {
  save(buyForm: BuyForm): Promise<BuyForm>;
  delete(buyForm: BuyForm): Promise<void>;
  getAll(): Promise<BuyForm[]>;
}
