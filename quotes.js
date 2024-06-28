const quotes = [
  {
    quote: "즐거움은 텅 빈 데서 나온다.",
    author: "장자",
  },
  {
    quote: "준빙ㅔ 실패하는 것은 실패를 준비하는 것이다.",
    author: "벤저민 프랭클린",
  },
  {
    quote: "당신이 그곳에서 가장 똑똑한 사람이라면 잘못된 장소에 있는 것이다.",
    author: "클리퍼드 허드슨 <리더가 다 잘 할 필요는 없다>",
  },
  {
    quote: "핑계를 찾는 대신 방법을 고민해야 한다.",
    author: "한근태 <공부란 무엇인가>",
  },
  {
    quote: "인간에게 가장 힘든 일은 자신을 알고 변화시키는 일이다.",
    author: "알프레드 아들러",
  },
  {
    quote: "우리가 앞으로 나아가고 발전하기 위해서는 내가 아닌 타인을 만나야 한다.",
    author: "샤를 페펭 <만남이라는 모험>",
  },
  {
    quote:"세상을 바꿀 생각은 누구나 하지만 자신을 바꾸려는 사람은 아무도 없다.",
    author: "톨스토이",
  },
  {
    quote: "나무는 꽃을 버려야 열매를 가질 수 있고 강물은 강을 버려야 바다에 이를 수 있다.",
    author: "역경",
  },
  {
    quote: "지지 않을 곳에 서서 이길 때까지 기다려라.",
    author: "손자병법",
  },
  {
    quote: "생산성은 인생에 더 많은 일을 밀어넣는 것이 아니라 매시간 적절한 일을 하는 것이다.",
    author: "크리스 베일리 <하이퍼 포커스>",
  },
]

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const todaysQuote = quotes[Math.floor(Math.random()
  * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;