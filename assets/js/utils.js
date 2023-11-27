export const formatDateRelative = (value) => {
    const currentDate = new Date();
    const postDate = new Date(value)
    const time = Number.parseInt((postDate - currentDate) / 1000 / 60 / 60 / 24);

    return new Intl.RelativeTimeFormat('es-ES', {
        numeric: 'auto'
    }).format(time, 'day');
}