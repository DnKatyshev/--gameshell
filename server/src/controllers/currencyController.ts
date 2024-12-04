// Node
import { Request, Response } from "express";

// Services

// Types
import {CurrencyIdShema} from "../types/ZodSchemas";


class CurrencyController{

    async getAllCurrencies(req:Request, res:Response) {
        try {
            const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
            const data = await response.json();

            // т.к API от ЦБ возвращает данные в виде объекта, это очень неудобно
            const arrayData = Object.values(data.Valute);

            res.status(200).json({message: 'Валюты успешно получены с сайта ЦБ!', arrayData});

        } catch (error) {
            res.status(500).json({ message: 'Server Error', error });
        }
    }

    async getOneCurrency(req:Request, res:Response) {
        try {
            // Делаем валидацию в runtime через ZOD
            if(CurrencyIdShema.safeParse(req.body).success){
                const {currencyId} = req.body

                console.log('CurrencyId: ', currencyId)

                const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();

                // Извлекаем конкретную валюту, т.к API-шка ЦБ не предоставляет одну валюту по другому
                const oneCurrency = data.Valute[currencyId];

                console.log('oneCurrency: ', oneCurrency)

                res.status(200).json({message: 'Одна валюта успешно получена с сайта ЦБ!', oneCurrency});
            } else{
                res.status(400).json({ message: 'Invalid currency string!' });
            }

        } catch (error) {
            res.status(500).json({ message: 'Server Error', error });
        }
    }

}

export default new CurrencyController();