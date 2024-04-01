


export default function getHour(time) {


    const datetime = new Date(time);

    const currentTime = new Date();

    const timeDifferenceMillis = currentTime - datetime;

    const timeDifferenceHours = Math.floor(timeDifferenceMillis / (1000 * 60 * 60));

    return timeDifferenceHours;


}