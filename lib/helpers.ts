const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']

export function pad(num: number) {
    return ('00'+num).slice(-2)
}

export function formatDate(str: string) {
    let date = new Date(str)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return `${day} ${months[month]} ${year} ${pad(hours)}:${pad(minutes)}`
}