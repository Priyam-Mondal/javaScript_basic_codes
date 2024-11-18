function hoursUntilEndOfDay(dateString) {
    const currentDate = new Date(dateString);
    
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    const diffInMilliseconds = endOfDay - currentDate;

    // Convert milliseconds to hours
    const hoursLeft = diffInMilliseconds / (1000 * 60 * 60);

    return hoursLeft;
}


const dateString = "2024-10-20T15:30:00"; 
console.log(hoursUntilEndOfDay(dateString));