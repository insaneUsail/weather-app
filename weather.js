const apikey="ee47733e05d812c8bca112465a152019";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchinput=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");



async function weatherdata(city){

    const reply=await fetch(apiurl+city+`&appid=${apikey}`);
    const data= await reply.json();
    console.log(data);
          if(reply.status===404){
            document.querySelector(".weather").style.display="none";
alert("city not found");
  searchinput.value=""
          }
          else{
    document.querySelector(".weather").style.display="block";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".txt p").innerHTML=data.main.humidity+"%";
    document.querySelector(".speed").innerHTML=data.wind.speed+"km/h";
}
}
searchbtn.addEventListener("click" ,()=>{
    weatherdata(searchinput.value);
}
)