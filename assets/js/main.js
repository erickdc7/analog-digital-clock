/*=============== CLOCK ===============*/
const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes')

const clock = () => {
    // We get the Date object
    let date = new Date()

    // We get the hours and minutes 
    // (current time) / 12(hours) * 360(deg circle)
    // (Current minute) / 60(minutes) * 360(deg circle)
    let hh = date.getHours() / 12 * 360,
        mm = date.getMinutes() / 60 * 360
}
setInterval(clock, 1000) // (Updates every 1s) 1000 = 1s 

/*=============== TIME AND DATE TEXT ===============*/
const dateDayWeek = document.getElementById('date-day-week'),
    dateMonth = document.getElementById('date-month'),
    dateDay = document.getElementById('date-day'),
    dateYear = document.getElementById('date-year'),
    textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmPm = document.getElementById('text-ampm')

const clockText = () => {

}
setInterval(clockText, 1000) // (Updates every 1s) 1000 = 1s