export const getCurrencyList = async () => {

    try{
       const response = await fetch(`http://localhost:8000/server-side/all-currencies`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return response.json()

    } catch (error: any) {
        return { status: 400 };
    }
}


export const getOneCurrency = async () => {

    try{
       const response = await fetch(`http://localhost:8000/server-side/one-currency`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return response.json()

    } catch (error: any) {
        return { status: 400 };
    }
}