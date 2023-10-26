import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.OPENAI_API_MODEL;
const PROMPT = process.env.PROMPT
const LOOP_COUNT = process.env.LOOP_COUNT

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: PROMPT }],
    model: MODEL,
  });

  console.log(completion.choices[0]);
}

// NOTE: use for loop instead of setinterval to avoid crashing
for (let i = 0; i < LOOP_COUNT ; i++) {
  await main();
}