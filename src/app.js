
const cardNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
let oneSecond = "";

function cardGen() {

  let cardNum = cardNums[Math.floor(Math.random() * cardNums.length)]

  let spades = `
  <div id="card" class="card m-5 align-self-center" style="width: 450px">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-club-fill m-3" viewBox="0 0 16 16">
      <path
        d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907" />
    </svg>
    <p class="align-self-center text-center" style="font-size: 15em">${cardNum}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-spade-fill m-3 align-self-end" viewBox="0 0 16 16">
      <path
        d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907" />
    </svg>
  </div>
`

  let hearts = `
  <div id="card" class="card m-5 align-self-center" style="width: 450px">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-heart-fill m-3 text-danger" viewBox="0 0 16 16">
      <path
        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
    </svg>
    <p class="align-self-center text-center" style="font-size: 15em">${cardNum}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-heart-fill m-3 align-self-end text-danger" viewBox="0 0 16 16">
      <path
        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
    </svg>
  </div>
`

  let clubs = `
  <div id="card" class="card m-5 align-self-center" style="width: 450px">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-club-fill m-3" viewBox="0 0 16 16">
      <path
        d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5" />
    </svg>
    <p class="align-self-center text-center" style="font-size: 15em">${cardNum}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-club-fill m-3 align-self-end" viewBox="0 0 16 16">
      <path
        d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5" />
    </svg>
  </div>
`

  let diamonds = `
  <div id="card" class="card m-5 align-self-center" style="width: 450px">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-diamond-fill m-3 text-danger" viewBox="0 0 16 16">
      <path
        d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2" />
    </svg>
    <p class="align-self-center text-center" style="font-size: 15em">${cardNum}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
      class="bi bi-suit-diamond-fill m-3 text-danger align-self-end" viewBox="0 0 16 16">
      <path
        d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2" />
    </svg>
  </div>
`

  const suit = [spades, clubs, hearts, diamonds]

  let card = suit[Math.floor(Math.random() * suit.length)]

  if (document.getElementById("card") === null) {
    document.body.innerHTML += card
  } else {
    document.getElementById("card").parentNode.removeChild(document.getElementById("card"))
    document.body.innerHTML += card
  }


}

function clockCard() {
  stopCard()
  let countDown = 10
  if (document.getElementById("countDown") === null) {
    document.body.innerHTML += `<p id="countDown" class="align-self-center" style="font-size: 50px">${countDown}</p>`
  } else {
    document.getElementById("countDown").innerHTML = countDown
  }
  oneSecond = setInterval(() => {
    countDown--

    console.log(countDown);
    if (document.getElementById("countDown") === null) {
      document.body.innerHTML += `<p id="countDown" class="align-self-center" style="font-size: 50px">${countDown}</p>`
    } else {
      document.getElementById("countDown").innerHTML = countDown
    }

    if (countDown === 0) {
      clockCard()
    }
  }, 1000)

  cardGen()
}

function stopCard() {
  clearInterval(oneSecond)
  if (document.getElementById("countDown") != null) {
    document.getElementById("countDown").parentNode.removeChild(document.getElementById("countDown"))
  }
}