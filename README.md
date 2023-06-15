# 💳 Budget Breeze

Code that can be deployed to the Investec Programmable Card to help keep your transactions in check.

- It allows you to set expense categories and environment variables to control a spend per each category
- Budget Breeze uses the [Investec Porgrammable Cards](https://developer.investec.com/za/programmable-card)
- You can now use the API to update environment variables for your programmable card without [deploying new code](https://developer.investec.com/za/api-products/documentation/U0ElMjBDYXJkJTIwQ29kZQ%3D%3D#operation/UpdateFunctionEnvironmentVariables)

## ☑️ Requirements

- Access to the [Investec Programmable Banking API](https://developer.investec.com/za/api-products)
- Ensure you familiarize yourself with [Investec Porgrammable Cards](https://offerzen.gitbook.io/programmable-banking-community-wiki/get-started/card-quick-start-guide)

## 🔑 Preparations

- Set your categories in the `categories` method within the `main.js` file
- Set your environment variables in the `env.json` file which will be used to control the spend per category

## 🚀 Getting Started

The function inside the `main.js` file is used to replace the `beforeTransaction` function from within the Programmable Cards IDE on Investec Online. You will also need to copy the `categories` method and the `getCategory` method.

## 🧑‍💻 Contributions

Possible additions:

Pull requests and changes are welcome.

## 📄 License

This project is MIT licensed.
