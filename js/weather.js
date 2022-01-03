const key="151412be46808f8782bbe09c1173e35a";
const feeltemper=document.querySelector(".feel-like>span")
const temper=document.querySelector(".temperature>span")
const windspeed=document.querySelector(".wind > span");
const locate=document.querySelector(".location");
const img=document.querySelector(".weather>img")
const select=document.querySelector("#weather-select")


const getweather = async (city='Gumi')=>{
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const res= await axios.get(api);
    const {name,main,weather,wind}=res.data;//이건 디스트록션 res.data를 대괄호안에 있는거 사용할때는 뒤에 붙여준다 즉 wind 는 res.data.wind
    locate.innerText=name;
    temper.innerText=trans(main.temp);
    feeltemper.innerText=trans(main.feels_like);
    windspeed.innerText=wind.speed;
    
    img.setAttribute('src',`http://openweathermap.org/img/wn/${weather[0].icon}.png`)// 속성값을 바꺼주는거 setAttribute('바꿀속성',뭐로바꿀지)
}

const trans=(tem)=>{
    return (tem-273.15).toFixed(1);
}

select.addEventListener("change",(city)=>getweather(city.target.value));
getweather()