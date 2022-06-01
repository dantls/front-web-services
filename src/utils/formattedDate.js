
export default function formattedDate(value){
    let data = new Date(value);
    let day = data.getDate().toString().padStart(2, '0');
    let month = (data.getMonth()+1).toString().padStart(2, '0'); //+1 pois no getMonth Janeiro começa com zero.
    let year = data.getFullYear();
    let hour = (data.getHours()+4).toString().padStart(2,'0');
    let minute = data.getMinutes().toString().padStart(2,'0');
  return day+"/"+month+"/"+year+" "+hour+":"+minute;
}