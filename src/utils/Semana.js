
export default function Semana(diaAtual){
    let semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  
    if( diaAtual > 6)
      return semana[diaAtual - 7]
     return semana[diaAtual]
  }
  