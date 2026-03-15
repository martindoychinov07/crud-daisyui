import type {ClassNameRule, InputProps} from "./Input";
import {toClassName} from "./useFormat";
import { FieldValues, Path } from "react-hook-form";

export function InputToggle<T extends object, F extends FieldValues>(props: InputProps<T, F>) {
  const { register } = props.form;

  const cn: ClassNameRule[] = [
    { addIf: true, add: "w-full btn btn-sm" },
    { addIf: !!props.disabled, add: "btn-disabled" },
    { addIf: props.variant === "ghost", add: "btn-ghost" },
  ];

  return (
    <input
      {...register(props.name as Path<F>)}
      type="checkbox"
      aria-label={props.prefix?.toString()}
      disabled={props.disabled}
      className={toClassName(cn)}
      value={props.action ?? "true"}
    />
  );
}
