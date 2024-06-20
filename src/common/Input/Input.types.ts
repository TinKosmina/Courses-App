export interface InputProps {
  labelText: string;
  placeholderText: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string;
  error?: string;
  type:
    | "number"
    | "search"
    | "button"
    | "time"
    | "image"
    | "text"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "month"
    | "password"
    | "radio"
    | "range";
}
