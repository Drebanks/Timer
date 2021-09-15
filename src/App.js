import {useState, useEffect} from "react";

const App = () => {
  const[days, setDays] =useState(10);
  const[hours, setHours] =useState(10);
  const[minutes, setMinutes] =useState(10);
  const[seconds, setSeconds] =useState(10);
  const [isLoading, setIsLoading] = useState (true)

  const countdown = () => {
    const endDate = new Date ("December 25, 2021 00:00:00").getTime ()
    const today =  new Date ().getTime ()

    const timedifference = endDate - today

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let timeDays = Math.floor (timedifference / days)
    let timeHours = Math.floor (( timedifference % days) / hours)
    let timeMinutes = Math.floor ((timedifference % hours)/minutes)
    let timeSeconds = Math.floor ((timedifference % minutes)/seconds)

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes

    setDays(timeDays)
    setHours(timeHours)
    setMinutes(timeMinutes)
    setSeconds(timeSeconds)
    setIsLoading(false)
   
  }

  useEffect (() => {
    setInterval(countdown, 1000)
  }, [])

  
  return (
    <>
      {isLoading ? (
        <div className="load">
          <div className="spinner">

          </div>
        </div>
      ) : (
        <section className="container">
          <h1>Xmas Countdown Timer</h1>
          <div className="timer">
            <article>
              <p>{days}</p>
              <h3>days</h3>
            </article>
            <article>
              <p>{hours}</p>
              <h3>hours</h3>
            </article>
            <article>
              <p>{minutes}</p>
              <h3>minutes</h3>
            </article>
            <article>
              <p>{seconds}</p>
              <h3>seconds</h3>
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
