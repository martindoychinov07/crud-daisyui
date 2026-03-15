import { type ReactNode } from "react";
interface ConfirmArgs {
    title?: ReactNode;
    content?: ReactNode;
    buttons?: "no_yes" | "ok";
}
interface ConfirmResult {
    confirmed?: boolean;
}
export declare function useConfirm(): import("./useModal").ModalInput<ConfirmResult, ConfirmArgs>;
export {};
//# sourceMappingURL=useConfirm.d.ts.map