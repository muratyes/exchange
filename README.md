# Currency Converter Application (ExchangeApp)

This project is a JavaScript application that retrieves current exchange rates of various cryptocurrencies and fiat currencies via [CryptoCompare API](https://min-api.cryptocompare.com/) and converts these rates to Turkish Lira (TL).

## Features

* Get current exchange rates of specified cryptocurrencies or fiat currencies.
* Calculate the Turkish Lira (TL) equivalent of the selected currency.
* Simple and understandable user interface.

## Installation

1. Clone this repository to your computer:

```bash
git clone [https://github.com/muratyes/exchange.git](https://github.com/muratyes/exchange.git)
```
2. Go to the project directory:

```bash
cd exchange
```
3. Install the necessary dependencies:

```bash
npm install
```

## Usage

1. Start the application:

```bash
npm start
```
2. Open the application in your browser (usually `http://localhost:3000`).

3. Enter the code of the currency you want to convert (for example, USD, EUR, BTC, ETH) in the corresponding fields in the interface.
4. Click the "Convert" or similar button to view the result.

## API Source

This application uses [CryptoCompare API](https://min-api.cryptocompare.com/) to retrieve exchange rate data. CryptoCompare generally offers a free API, but the terms of use may change from time to time. Please be sure to check the API terms of use.

## License

This project is licensed under the MIT license. For more information, see [LICENSE](LICENSE).
