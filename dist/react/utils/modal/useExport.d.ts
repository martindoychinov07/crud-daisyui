import { type ReactNode } from "react";
interface ExportArgs {
    title?: ReactNode;
    buttons?: "no_yes" | "ok";
}
interface ExportResult {
    out?: string;
    bom?: string;
    sep?: string;
    eol?: string;
    confirmed?: boolean;
}
export declare function useExport(): import("./useModal").ModalInput<ExportResult, ExportArgs>;
export {};
//# sourceMappingURL=useExport.d.ts.map