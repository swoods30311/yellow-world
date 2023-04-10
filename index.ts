//Type Alias for code reuse
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name:'Sandy',
    retire: (date: Date) => {
        console.log(date);
    }
} 