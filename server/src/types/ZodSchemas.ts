import { z } from 'zod'

export const CurrencyIdShema = z.object({
    currencyId: z.string()
})