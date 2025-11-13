function createLookup(countryCurrencyPairs) {
  const lookup = {};
  
  for (const [country, currency] of countryCurrencyPairs) {
    lookup[country] = currency;
  }
  return lookup;
}
console.log(createLookup([['PT', 'EUR'], ['CA', 'CAD']]));

module.exports = createLookup;
