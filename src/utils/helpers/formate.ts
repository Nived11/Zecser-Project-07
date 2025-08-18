export const formateDate = (date:Date)=>{

    const time = date.toLocaleTimeString()
    const formattedDate = date?.toLocaleDateString()

    return `${time} ${formattedDate}`
}