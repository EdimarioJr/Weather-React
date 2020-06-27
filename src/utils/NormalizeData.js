
export default function NormalizeData(clima) {
    clima.list[0].main.temp = clima.list[0].main.temp.toFixed(0);
    clima.list[0].main.feels_like = clima.list[0].main.feels_like.toFixed(0);
    clima.list[0].wind.speed = clima.list[0].wind.speed.toFixed(0);
    clima.list[0].main.humidity = clima.list[0].main.humidity.toFixed(0);
    for (let i = 0; i < 7; i++) {
      clima.list[i].main.temp_max = clima.list[i].main.temp_max.toFixed(0);
      clima.list[i].main.temp_min = clima.list[i].main.temp_min.toFixed(0);
    }
    return clima;
  }