function calculateTax(income: number, taxYear: number) {
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

console.log(calculateTax(10_000, 2023));