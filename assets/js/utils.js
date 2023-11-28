export const formatDateRelative = (value) => {
    const postDate = new Date(value).getTime();
    const currentDate = new Date().getTime();
    const diff = currentDate - postDate;

    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = months / 12;

    if (seconds < 60) {
        return `${Math.round(seconds)} segundos`;
    } else if (minutes < 60) {
        return `${Math.round(minutes)} minutos`;
    } else if (hours < 24) {
        return `${Math.round(hours)} horas`;
    } else if (days < 30) {
        return `${Math.round(days)} días`;
    } else if (months < 12) {
        return `${Math.round(months)} meses`;
    } else {
        return `${Math.round(years)} años`;
    }
}