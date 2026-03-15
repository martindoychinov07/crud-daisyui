import { type InputFormatter, type InputOptions, type InputProps } from "./Input";
import type { LayoutModelItem } from "./LayoutModel";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
interface LayoutInputProps<T extends object, F extends FieldValues> {
    form: UseFormReturn<any, any>;
    variant?: InputProps<T, F>["variant"];
    item: LayoutModelItem<T>;
    name?: Path<T> | string;
    index: number;
    disabled?: boolean;
    formatter?: InputFormatter;
    options?: InputOptions<T>;
}
export declare function LayoutInput<T extends object, F extends FieldValues>(props: LayoutInputProps<T, F>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LayoutInput.d.ts.map