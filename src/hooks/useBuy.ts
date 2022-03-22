import { useEffect, useState } from "react";
import ColectionBuy from "../backend/db/ColectionBuy";
import BuyForm from "../core/BuyForm";
import FormRepository from "../core/FormRepository";
import useTableOrForm from "./useTableOrForm";

export default function useBuy() {
  const repo: FormRepository = new ColectionBuy();

  const { tableVisible, displayTable, displayForm } = useTableOrForm();

  const [buy, setBuy] = useState<BuyForm>(BuyForm.hollow());
  const [buys, setBuys] = useState<BuyForm[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((buys) => {
      setBuys(buys);
      displayTable();
    });
  }

  function selectBuy(buy: BuyForm) {
    setBuy(buy);
    displayForm();
  }

  async function deleteBuy(buy: BuyForm) {
    await repo.delete(buy);
    getAll();
  }
  function newBuy() {
    setBuy(BuyForm.hollow());
    displayForm();
  }

  async function saveBuy(buy: BuyForm) {
    await repo.save(buy);
    getAll();
  }

  return {
    buy,
    buys,
    newBuy,
    saveBuy,
    deleteBuy,
    selectBuy,
    getAll,
    tableVisible,
    displayTable,
  };
}
