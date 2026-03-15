import type { RefObject } from "react";
export declare function getSelection<D>(selection: "one" | "many", selected: string[], key: string | undefined, data?: D[], index?: number, ctrlKey?: boolean, shiftKey?: boolean): string[];
export declare function downloadTable(ref: RefObject<HTMLTableElement | null>, fileName?: string, bom?: string, sep?: string, eol?: string, out?: "text" | "xlsx" | string, convert?: (props: {
    name: string;
    sep?: string;
    eol?: string;
    formData?: {
        blob: Blob;
    };
}) => Promise<Blob>): Promise<void>;
//# sourceMappingURL=TableUtils.d.ts.map