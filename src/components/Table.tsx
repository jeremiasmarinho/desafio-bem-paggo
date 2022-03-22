import BuyForm from "../core/BuyForm";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TableProps {
  buyForms: BuyForm[]
  buySelected?: (buyForm: BuyForm) => void
  buyDeleted?: (buyForm: BuyForm) => void
}

export default function Table(props: TableProps) {

  const displayActions = props.buyDeleted || props.buySelected

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Adesivo React</th>
        <th className="text-left p-4">Adesivo Vue</th>
        <th className="text-left p-4">Adesivo Angular</th>
        <th className="text-left p-4">Quantidade</th>
        <th className="text-left p-4">Observações</th>
      </tr>
    )
  }

  function renderData() {
    return props.buyForms?.map((buyForm, i) => {
      return (
        <tr key={buyForm.id}
            className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
            <td className="text-left p-4">{buyForm.id}</td>
            <td className="text-left p-4">{buyForm.adesivo1}</td>
            <td className="text-left p-4">{buyForm.adesivo2}</td>
            <td className="text-left p-4">{buyForm.adesivo3}</td>
            <td className="text-left p-4">{buyForm.quant}</td>
            <td className="text-left p-4">{buyForm.obs}</td>
      
        </tr>
      )
    })
  }

  function renderActions(buyForm: BuyForm) {
    return (
      <td className="flex justify-center">
          {props.buySelected ? (
                    <button onClick={() => props.buySelected?.(buyForm)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.buyDeleted ? (
                    <button onClick={() => props.buyDeleted?.(buyForm)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
    <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
    `}>
        {renderHeader()}
    </thead>
    <tbody>
        {renderData()}
    </tbody>
</table>
  )
}