export const formatMoney = (cantidad) => {
    return cantidad.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    })
};