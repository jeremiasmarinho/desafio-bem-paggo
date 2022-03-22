interface EntryProps {
  type?: "text" | "number" | "checkbox";
  text: string;
  value: any;

  className?: string;
  valueTurn?: (value: any) => void;
}

export default function Entry(props: EntryProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.valueTurn?.(e.target.value)}
        className={`
                  border border-purple-500 rounded-lg
                 }
              `}
      />
    </div>
  );
}
