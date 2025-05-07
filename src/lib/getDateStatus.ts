export function getDateStatus(dateString: string): string {
    // Convert the input date string into a Date object
    const inputDate = new Date(dateString);
    const currentDate = new Date();
    
    // Check if the input date is invalid
    if (isNaN(inputDate.getTime())) {
        throw new Error("Invalid date string");
    }
    
    // Reset time values for comparison (to focus only on the date part)
    currentDate.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    
    // Explicitly cast the Date objects to numbers for arithmetic operations
    const timeDiff = inputDate.getTime() - currentDate.getTime();

    // Return status based on the time difference
    if (timeDiff === 0) {
        return "Today";
    }
    
    if (timeDiff > 0) {
        return "Upcoming";
    }
    
    return "Completed";
}
