interface ButtonProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao(props: ButtonProps) {
  const cor = props.cor ?? 'gray'
  return (
      <button onClick={props.onClick} className={`
          bg-gradient-to-r from-${cor}-400 to-${cor}-700
          text-white px-3 py-2 rounded-md mr-4 mb-4
          ${props.className}
      `}>
          {props.children}
      </button>
  )
}