import ObsForm from "./ObsForm"
import Title from "./Title"
import Checkbox from "./Checkbox"
import Button from "./Button"
import BuyForm from "../core/BuyForm"


interface FormProps {
    buyForm: BuyForm
    buyTurn?: (formbuy: BuyForm) => void
    cancel?: () => void
    home: string
    children: any
}

export default function Layout(props: FormProps) {

    const id = props.buyForm?.id

    return (
        <div className={`
            flex flex-col w-2/6 shadow-xl
            bg-white text-gray-800 rounded-md
        `}>
            <Title>{props.home}</Title>
            <div className="p-2">
                {props.children}
            </div>
            <Checkbox />
            <ObsForm texto="Observações"/>
            <div className="flex justify-end mt-7">
                <Button cor="blue" className="mr-2"
                    >
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}