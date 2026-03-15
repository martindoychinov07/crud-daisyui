interface CalendarArgs {
    title?: string;
    date?: Date | undefined | null;
}
interface CalendarResult {
    date?: Date;
}
export declare function useCalendar(): import("./useModal").ModalInput<CalendarResult, CalendarArgs>;
export {};
//# sourceMappingURL=useCalendar.d.ts.map