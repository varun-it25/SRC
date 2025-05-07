interface dataType {
  _id: string;
  event_banner: string;
  event_name: string;
  event_venue: string;
  event_description: string;
  event_date: string;
  event_start_time: string;
  event_end_time: string;
  guest_image: string;
  guest_name: string;
  guest_email: string;
  guest_mobile_no: string;
}

export function countUpcomingEvents(data: dataType[]): number {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  let upcomingCount = 0;

  data.forEach((item) => {
    const dateString = item.event_date;
    const inputDate = new Date(dateString);
    inputDate.setHours(0, 0, 0, 0);

    // Use getTime() to convert the Date objects to numbers
    const timeDiff = inputDate.getTime() - currentDate.getTime();

    if (timeDiff > 0) {
      upcomingCount++;
    }
  });

  return upcomingCount;
}
