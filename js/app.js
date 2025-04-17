let slot1 = 0
let slot2 = 0
let slot3 = 0

let slot1C = 0
let slot2C = 0
let slot3C = 0

let wins = 0

const min = 1
const max = 4

function roll() {
  slot1 = Math.floor(Math.random() * (max - min + 1)) + min
  slot2 = Math.floor(Math.random() * (max - min + 1)) + min
  slot3 = Math.floor(Math.random() * (max - min + 1)) + min

  if (slot1 == 1) {
    document.getElementById("S1").style.backgroundColor = "green"
    slot1C = 1
  } else if (slot1 == 2) {
    document.getElementById("S1").style.backgroundColor = "blue"
    slot1C = 2
  } else if (slot1 == 3) {
    document.getElementById("S1").style.backgroundColor = "red"
    slot1C = 3
  } else if (slot1 == 4) {
    document.getElementById("S1").style.backgroundColor = "yellow"
    slot1C = 4
  }



  if (slot2 == 1) {
    document.getElementById("S2").style.backgroundColor = "green"
    slot2C = 1
  } else if (slot2 == 2) {
    document.getElementById("S2").style.backgroundColor = "blue"
    slot2C = 2
  } else if (slot2 == 3) {
    document.getElementById("S2").style.backgroundColor = "red"
    slot2C = 3
  } else if (slot2 == 4) {
    document.getElementById("S2").style.backgroundColor = "yellow"
    slot2C = 4
  }

  if (slot3 == 1) {
    document.getElementById("S3").style.backgroundColor = "green"
    slot3C = 1
  } else if (slot3 == 2) {
    document.getElementById("S3").style.backgroundColor = "blue"
    slot3C = 2
  } else if (slot3 == 3) {
    document.getElementById("S3").style.backgroundColor = "red"
    slot3C = 3
  } else if (slot3 == 4) {
    document.getElementById("S3").style.backgroundColor = "yellow"
    slot3C = 4
  }

  if (slot1C == slot2C && slot2C == slot3C) {
    wins++

    if (wins == 1) {
      document.getElementById("Result").innerHTML = `You won ${ wins} time!`
    } else {
      document.getElementById("Result").innerHTML = `You won ${wins} times!`
    }
  }
}













