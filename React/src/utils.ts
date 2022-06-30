export const isNumberBetweenMinMax =
    (min: number, max: number, number: number) =>
        max >= number && min <= number

export const dateDifferenceInDays =
    (dateA: string, dateB: string) => {
        const date1 = new Date(dateA);
        const date2 = new Date(dateB);

        // To calculate the time difference of two dates
        const timeDifference = date2.getTime() - date1.getTime();

        // To calculate the no. of days between two dates
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        return daysDifference;
    }