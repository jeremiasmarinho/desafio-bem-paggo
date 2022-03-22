interface ObsProps {
  texto: string
  somenteLeitura?: boolean
  className?: string
  turnForm?: (valor: any) => void
}

export default function ObsForm(props: ObsProps) {
  return (
      <div className={`flex flex-col pt-5 px-5 ${props.className}`}>
          <label className="mb-2 font-semibold" >
              {props.texto}
          </label>
          <textarea
             onChange={e => props.turnForm?.(e.target.value)}
              className={` 
                  border border-purple-500 rounded-lg
                  focus:outline-none bg-gray-100 px-1 py-1
                  text-xs h-14
                  ${props.somenteLeitura ? '' : 'focus:bg-white'}
              `}
          />
      </div>
  )
}