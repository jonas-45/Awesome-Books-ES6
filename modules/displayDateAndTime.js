import { dateDisplay } from './dom.js';
import { DateTime } from './luxon.min.js';

const displayCurrentDateAndTime = () => {
  const dt = DateTime.now();
  dateDisplay.innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
export default displayCurrentDateAndTime;