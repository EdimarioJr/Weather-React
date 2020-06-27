import axios from "axios";

export default async function pegarDado(cidade) {
  try{
    let response = await axios
      .get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
          q: cidade,
          appid: "96617c0270b83f622936d88021c90b79",
          units: "metric",
          lang: "pt_br"
        }
      })
       return response.data;
  } catch(err){
    console.log(err);
    alert("Não conseguimos encontrar o local especificado!");
    return await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        q: "Araci",
        appid: "96617c0270b83f622936d88021c90b79",
        units: "metric",
        lang: "pt_br"
      }
    })
    .then(response => response.data)
  } 
  
  }