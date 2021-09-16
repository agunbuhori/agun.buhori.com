export function formatDate(str: string) {
    let date = new Date(str)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    let hour = date.getHours()
    let minutes = date.getMinutes()

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember']

    return `${day} ${months[month]} ${year} ${('00'+hour).slice(-2)}:${('00'+minutes).slice(-2)}`
}