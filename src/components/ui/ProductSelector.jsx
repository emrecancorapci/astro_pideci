import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select.jsx';

export default function ProductSelector({ name, options }) {
  return (
    <Select>
      <SelectTrigger className="font-medium">
        <SelectValue placeholder={name} />
      </SelectTrigger>
      <SelectContent className="max-h-[320px]">
        {options.map((option) => (
          <SelectItem className="pl-2 font-medium" key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
