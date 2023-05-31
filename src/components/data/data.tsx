function createStoryData(
  name: string,
  adjudication: string,
  status: string,
  date: string,
  location: string
) {
  // Create a new Date object for the current date
  const currentDate = new Date();

  // Extract the day, month, and year from the date object
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // January is represented by 0, so we add 1 to get the correct month
  const year = currentDate.getFullYear();

  // Format the day, month, and year as strings with leading zeros if necessary
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedYear = `${year}`;

  // Combine the formatted components into the desired date format
  date = `${formattedDay}/${formattedMonth}/${formattedYear}`;

  return { name, adjudication, status, date, location };
}

export const demoTableStoryRows = [
  createStoryData('Ronak1', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData('Abhi1', 'Completed', 'Re-check', Date(), 'Rajkot'),
  createStoryData('Ashwin1', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData(
    'krishna1',
    'Completed',
    'Re-check',
    Date(),
    'Rajkot'
  ),
  createStoryData('Dhaval1', 'Pending', 'Re-check', Date(), 'Rajkot'),
  createStoryData('Ronak2', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData('Abhi2', 'Completed', 'Re-check', Date(), 'Rajkot'),
  createStoryData('Ashwin2', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData(
    'krishna2',
    'Completed',
    'Re-check',
    Date(),
    'Rajkot'
  ),
  createStoryData('Dhaval2', 'Pending', 'Re-check', Date(), 'Rajkot'),
  createStoryData('Ronak3', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData('Abhi3', 'Completed', 'Re-check', Date(), 'Rajkot'),
  createStoryData('Ashwin3', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData(
    'krishna3',
    'Completed',
    'Re-check',
    Date(),
    'Rajkot'
  ),
  createStoryData('Dhaval3', 'Pending', 'Re-check', Date(), 'Rajkot'),
  createStoryData('Ronak4', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData('Abhi4', 'Completed', 'Re-check', Date(), 'Rajkot'),
  createStoryData('Ashwin4', 'Pending', 'Verified', Date(), 'Rajkot'),
  createStoryData(
    'krishna4',
    'Completed',
    'Re-check',
    Date(),
    'Rajkot'
  ),
  createStoryData('Dhaval4', 'Pending', 'Re-check', Date(), 'Rajkot'),
];
