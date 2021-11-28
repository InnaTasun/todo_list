const conditionsArr = ['USD', 'EUR', 'RUB'];

export default function ratesFilter(ratesArr) {
    
  return ratesArr.filter((rate) => conditionsArr.indexOf(rate.cc) > -1);
}
