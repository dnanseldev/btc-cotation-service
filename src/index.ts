import { config } from "dotenv";
import axios from "axios"


async function readMarketPRice(): Promise<number>{
    config();
   // const result = (await fetch(process.env.URL_API));
  //  const  {bitcoin}  = await result.json();

  const result = (await axios.get(process.env.URL_API));
  return result.data.bitcoin.usd;
}


//### Tests #####
readMarketPRice().then(
  (value) => console.log(value)
)


