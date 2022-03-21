const timerBlock = document.querySelector('.timer__time')
const deadline = '31 march 2022'

let interval

wordForm = function (days, words) {
  words = ['день', 'дня', 'дней'];
  days=Math.abs(days) % 100;
  let n = days % 10;
  if(days > 10 && days < 20)return words[2];
  if(n > 1 && n < 5) return words[1];
  if(n ===1) return words[0];
  return words[2];
  
}



const updateClock = () => {
  const date = new Date().getTime()
  const dateDeadline = new Date(deadline).getTime()
  const timeRemaining = (dateDeadline - date) / 1000

  const days = Math.floor(timeRemaining / 60 / 60 / 24)
  const hours = Math.floor((timeRemaining / 60 / 60) % 24)
  const minutes = Math.floor((timeRemaining / 60) % 60)
  const seconds = Math.floor(timeRemaining % 60)

  // const fDays = days >= 5 || days < 1 ? days + ' дней'  : days >= 2 ?  days + ' дня' : days + ' день'

  
 
  const fDays = days + ' ' + wordForm(days)
  const fHours = hours < 10 ? '0' + hours : hours
  const fMinutes = minutes < 10 ? '0' + minutes : minutes
  const fSeconds = seconds < 10 ? '0' + seconds : seconds


  timerBlock.textContent = `${fDays} ${fHours}:${fMinutes}:${fSeconds}`

  if (timeRemaining <= 0) {
    clearInterval(interval)
    timerBlock.textContent = `00:00:00`

  }
};

updateClock();

interval = setInterval(updateClock, 500)



