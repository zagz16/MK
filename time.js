export const timeLogFight = () => {
    const time = new Date();
    let timeHours = time.getHours();
    let timeMinutes = time.getMinutes();
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    const nowTimes = timeHours + ":" + timeMinutes;
    return nowTimes;
}