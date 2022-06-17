export type CountryCode = 'SG' | 'MY'
export type Country = {
    label: string,
    currency: string,
    code: CountryCode,
    exchangeRate: number,
    secretApiKey: string,
    storeId: string;
}