const clock = document.querySelector("h2#clock");
// ID가 "clock"인 <h2> 요소를 선택하여 clock 변수에 저장
function getClock() {
    const date = new Date();
    // 현재 날짜와 시간을 저장하는 Date 객체 생성
    const hours = String(date.getHours()).padStart(2, "0");
    // 현재 시간을 2자리 문자열로 변환 (한 자리 수는 앞에 0을 추가)
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // 현재 분을 2자리 문자열로 변환 (한 자리 수는 앞에 0을 추가)
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // 현재 초를 2자리 문자열로 변환 (한 자리 수는 앞에 0을 추가)
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // 시, 분, 초를 h2#clock 요소의 텍스트로 설정
}
getClock();
// 페이지가 로드될 때 즉시 시간을 한 번 표시
setInterval(getClock, 1000);
// 1초(1000ms)마다 getClock 함수를 호출하여 시간을 갱신