# chatgpt-infinite-loop

Until the API fee is reduced to 1$, the gpt-4 model cannot be used.
So, the idea is to throw infinite requests to ChatGPT API to be able to use gpt-4.

💡Actually, this program is not infinite loop. It is just a for loop that sends requests to ChatGPT API. You can set the number of requests `LOOP_COUNT` in `.env` file.

## ⚠️ You SHOULD set Usage Limit to $1

This program does not perform any checks on the use of the API. It just sends requests to the API. So, if you set Usage Limit to $100, you will be charged $100. To avoid this, I reccomend you to set Usage Limit to $1, which is the minimum to use gpt-4.

## How to use

1. Install dependencies

```shell
npm install
```

2. Set .env file

```shell
cp .env.example .env
```

3. Execute

```shell
node main.js
```