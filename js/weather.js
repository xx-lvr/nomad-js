const API_KEY = "a73b4aa5e517b2722a239b26262fc0dd";
// OpenWeatherMap API의 개인 API 키를 API_KEY 변수에 저장

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // 사용자의 현재 위치에서 위도(latitude)와 경도(longitude)를 가져와 각각 lat, lon 변수에 저장

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // OpenWeatherMap API에 요청할 URL을 생성, 위도, 경도, API 키, 단위(metric)를 포함

    fetch(url)
        .then((response) => response.json())
        // fetch 함수로 API 요청을 보내고, 응답을 JSON 형태로 파싱

        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            // ID가 "weather"인 요소 내에서 첫 번째 <span>과 마지막 <span>을 각각 선택

            city.innerText = data.name;
            // API로 받은 데이터에서 도시 이름을 가져와 city <span>에 표시

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            // API로 받은 날씨 정보와 온도를 weather <span>에 표시
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
    // 위치 정보를 가져오는 데 실패하면 경고창을 띄움
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 사용자의 위치 정보를 요청, 성공 시 onGeoOk 함수 호출, 실패 시 onGeoError 함수 호출