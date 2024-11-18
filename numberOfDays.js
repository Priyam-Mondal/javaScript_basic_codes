function daysBetween(dateString1, dateString2) {

    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    const time1 = date1.getTime();
    const time2 = date2.getTime();

    const diffInMilliseconds = Math.abs(time2 - time1);

    // Convert the difference from milliseconds to days
    const daysDifference = diffInMilliseconds / (1000 * 60 * 60 * 24);

    return daysDifference;
}

const date1 = "2024-10-20";
const date2 = "2024-10-25";
console.log(daysBetween(date1, date2)); 
