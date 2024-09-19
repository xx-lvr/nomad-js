const quotes = [
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author: "앙드레 말로",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "제임스 딘",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다",
        author: "나폴레옹",
    },
];
// 명언과 작가를 담은 객체들이 배열에 저장됨
const quote = document.querySelector("#quote span:first-child");
// ID가 "quote"인 요소 내부의 첫 번째 <span> 요소를 선택하여 quote 변수에 저장
const author = document.querySelector("#quote span:last-child");
// ID가 "quote"인 요소 내부의 마지막 <span> 요소를 선택하여 author 변수에 저장
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// quotes 배열에서 랜덤한 인덱스를 선택하여 그 인덱스에 해당하는 명언 객체를 todaysQuote 변수에 저장
quote.innerText = todaysQuote.quote;
// 선택된 명언 객체의 quote 값을 quote <span> 요소의 텍스트로 설정
author.innerText = todaysQuote.author;
// 선택된 명언 객체의 author 값을 author <span> 요소의 텍스트로 설정