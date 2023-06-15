const categories = {
  "FOOD_AND_DRINK": [
    "BOOTLEGGERS",
    "KFC",
    "PIZZA HUT",
    "SEATTLE COFFEE",
    "STARBUCKS",
    "UBER EATS",
    "MOTHERLAND"
  ],
  "GROCERIES": [
    "SPAR",
    "CHECKERS",
    "WOOLWORTHS",
  ],
}

const getCategory = (merchantName) => {
  for (let category in categories) {
    const match = (element) => (new RegExp(element)).test(merchantName.toUpperCase());

    if (categories[category].some(match)) {
      return category;
    }
  }
}

const beforeTransaction = async (authorization) => {
  const category = getCategory(authorization.merchant.name);

  return category ? authorization.centsAmount < (process.env[category] * 100) : true;
};
