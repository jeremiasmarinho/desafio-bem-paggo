import { useState } from "react";
import BuyForm from "../core/BuyForm";
import Button from "./Button";
import Entry from "./Entry";

interface FromProps {
  buyForm: BuyForm;
  buyTurn?: (buyForm: BuyForm) => void;
  cancel?: () => void;
}

export default function Form(props: FromProps) {
  const id = props.buyForm?.id;
  const [adesivo1, setAdesivo1] = useState(props.buyForm?.adesivo1 ?? null);
  const [adesivo2, setAdesivo2] = useState(props.buyForm?.adesivo2 ?? null);
  const [adesivo3, setAdesivo3] = useState(props.buyForm?.adesivo3 ?? null);
  const [quant, setQuant] = useState(props.buyForm?.quant ?? 0);
  const [obs, setObs] = useState(props.buyForm?.obs ?? "");

  return (
    <div>
      {id ? <Entry text="Código" value={id} className="mb-5" /> : false}
      <Entry
        type="checkbox"
        text="Adesivo1"
        value={adesivo1}
        valueTurn={setAdesivo1}
      />
      <Entry
        type="checkbox"
        text="Adesivo2"
        value={adesivo2}
        valueTurn={setAdesivo2}
      />
      <Entry
        type="checkbox"
        text="Adesivo3"
        value={adesivo3}
        valueTurn={setAdesivo3}
      />
      <Entry type="number" text="Quant" value={quant} valueTurn={setQuant} />
      <Entry type="text" text="Obs" value={obs} valueTurn={setObs} />

      <div className="flex justify-end mt-7">
        <Button cor="blue" className="mx-8">
          {id ? "Alterar" : "Enviar"}
        </Button>
        <Button onClick={props.cancel}>Cancelar</Button>
      </div>
    </div>
  );
}
