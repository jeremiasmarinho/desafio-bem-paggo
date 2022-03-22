import { IconMinus, IconPlus } from "./Icones";

interface AmountProps {
  texto: string;
  somenteLeitura?: boolean;
  className?: string;
  buttonInc?: (valor: any) => void;
  buttonDec?: (valor: any) => void;
}

export default function Amount(props: AmountProps) {
  return (
    <div className={`flex flex-col pt-5 px-5  ${props.className}`}>
      <label className="mb-2 font-semibold">{props.texto}</label>
      <div className="flex  items-center">
        <button
          className={`
                        flex justify-center items-center
                        text-blue-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}
        >
          {IconMinus}
        </button>
        <input
          className={`
                  border border-purple-500 rounded-lg text-center
                  focus:outline-none bg-gray-100 h-8 w-10
                  ${props.somenteLeitura ? "" : "focus:bg-white"}
              `}
        />

        <button
          className={`
                        flex justify-center items-center
                        text-blue-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}
        >
          {IconPlus}
        </button>
      </div>
    </div>
  );
}
