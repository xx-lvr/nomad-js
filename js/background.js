const images = ["0.jpg", "1.jpg", "2.jpg"];
// 이미지 파일 이름들을 저장한 배열

const chosenImage = images[Math.floor(Math.random() * images.length)];
// images 배열에서 랜덤한 인덱스를 선택하여 chosenImage 변수에 저장

const bgImage = document.createElement("img");
// 새로운 <img> 요소를 생성하여 bgImage 변수에 저장

bgImage.src = `img/${chosenImage}`;
// img 폴더 내에 있는 랜덤하게 선택된 이미지를 bgImage의 src 속성에 설정

document.body.appendChild(bgImage);
// 생성된 <img> 요소를 document의 body에 추가하여 화면에 표시