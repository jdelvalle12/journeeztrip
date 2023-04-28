export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export const calculateDuration = (startDateString, endDateString) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const duration = Math.round(Math.abs((endDate - startDate) / oneDay));
  return duration;
}

export const formatCurrency = (amount) => {
  const options = { style: 'currency', currency: 'USD' };
  return amount.toLocaleString('en-US', options);
}

export const getWeatherIcon = (code) => {
  if (code === '01d' || code === '01n') {
    return 'wi-day-sunny';
  } else if (code === '02d' || code === '02n') {
    return 'wi-day-cloudy';
  } else if (code === '03d' || code === '03n' || code === '04d' || code === '04n') {
    return 'wi-cloudy';
  } else if (code === '09d' || code === '09n' || code === '10d' || code === '10n') {
    return 'wi-rain';
  } else if (code === '11d' || code === '11n') {
    return 'wi-thunderstorm';
  } else if (code === '13d' || code === '13n') {
    return 'wi-snow';
  } else if (code === '50d' || code === '50n') {
    return 'wi-fog';
  }
}