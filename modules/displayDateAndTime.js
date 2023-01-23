import { dateDisplay } from './dom.js';
import { DateTime } from './luxon.min.js';

export default function displayCurrentDateAndTime() {
  const dt = DateTime.now();
  dateDisplay.innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}