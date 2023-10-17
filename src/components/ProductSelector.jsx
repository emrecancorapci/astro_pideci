import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select.jsx';

export default function ProductSelector({ name, options }) {
  return (
    <Select>
      <SelectTrigger className="w-[300px] bg-zinc-900/80 text-white">
        <SelectValue placeholder={name} />
      </SelectTrigger>
      <SelectContent className="bg-zinc-900/70 backdrop-blur">
        {options.map((option) => (
          <SelectItem
            className="bg-zinc-900/70 pl-2 text-white hover:bg-zinc-950/70 hover:text-white focus:bg-zinc-950/70 focus:text-white"
            key={option}
            value={option}
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
