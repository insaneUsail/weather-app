const apikey="ee47733e05d812c8bca112465a152019";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=ee47733e05d812c8bca112465a152019&q="

const searchinput=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");



async function weatherdata(city){

    const reply=await fetch(apiurl+city);
    const data= await reply.json();
    console.log(data);
          if(reply.status===404){
            searchinput.value="";
            document.querySelector(".weather").style.display="none";
            document.getElementById("errors").innerHTML="City Not Found";
          }
          else if(searchinput.value==="")
            {
                document.getElementById("errors").innerHTML="";
             alert("Please enter city name");
    
             document.querySelector(".weather").style.display="none";
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