## 🌟 Community-Powered Repository 🌟

This repository is crafted with ❤️ by our talented community members. It's a space for everyone to use, contribute to, and share. While it aligns with the spirit of our community, please note that this repo is not directly endorsed or supported by Investec. Always exercise caution and discretion when using or contributing to community-driven projects.

# 💳 Budget Breeze

Code that can be deployed to your Investec Programmable Card to help keep your transactions in check.

- It allows you to control how much you spend by setting expense categories (eg. groceries), assigning transactions per category (eg. woolworths)  and setting environment variables (eg. groceries limit =100)  to control your  spend per category
- Budget Breeze uses the [Investec Programmable Cards](https://developer.investec.com/za/programmable-card)
- You can now use the API to update environment variables for your programmable card without [deploying new code via the Investec IDE](https://developer.investec.com/za/api-products/documentation)

## ☑️ Requirements

- Access to the [Investec Programmable Banking API and Investec Online IDE](https://developer.investec.com/za/api-products)
- Ensure you familiarize yourself with [Investec Programmable Cards](https://offerzen.gitbook.io/programmable-banking-community-wiki/get-started/card-quick-start-guide)

## 🔑 Preparations

- Set your categories in the `categories` method within the `main.js` file
- Set your environment variables in the `env.json` file which will be used to control the spend per category

This will be done via the Investec Online IDE

## 🚀 Getting Started

The function inside the `main.js` file is used to replace the `beforeTransaction` function from within the Programmable Cards IDE on Investec Online. You will also need to copy the `categories` method and the `getCategory` method.

## 🧑‍💻 Contributions

Pull requests and changes are welcome.

## 📄 License

This project is MIT licensed.
