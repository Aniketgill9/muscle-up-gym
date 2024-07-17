import React from 'react';
import styles from './schedule.module.css';

const scheduleData = {
  Monday: [
    { time: '06.00', class: 'Pro Cycling', duration: '06.00 - 07.00', instructor: 'Robert Cage' },
    { time: '09.00', class: 'Yoga', duration: '09.00 - 10.00', instructor: 'Jane Doe' },
    { time: '10.00', class: 'HIIT', duration: '10.00 - 11.00', instructor: 'Michael Lee' },
    { time: '11.00', class: 'Pilates', duration: '11.00 - 12.00', instructor: 'Emma Green' },
    { time: '12.00', class: 'Zumba', duration: '12.00 - 13.00', instructor: 'John Smith' },
  ],
  Tuesday: [
    { time: '06.00', class: 'Boxing', duration: '06.00 - 07.00', instructor: 'Mike Tyson' },
    { time: '09.00', class: 'CrossFit', duration: '09.00 - 10.00', instructor: 'Sarah Connor' },
    { time: '10.00', class: 'Strength Training', duration: '10.00 - 11.00', instructor: 'James Brown' },
    { time: '11.00', class: 'Aerobics', duration: '11.00 - 12.00', instructor: 'Linda White' },
    { time: '12.00', class: 'Pro Cycling', duration: '12.00 - 13.00', instructor: 'Robert Cage' },
  ],
  Wednesday: [
    { time: '06.00', class: 'Pro Cycling', duration: '06.00 - 07.00', instructor: 'Robert Cage' },
    { time: '09.00', class: 'Yoga', duration: '09.00 - 10.00', instructor: 'Jane Doe' },
    { time: '10.00', class: 'HIIT', duration: '10.00 - 11.00', instructor: 'Michael Lee' },
    { time: '11.00', class: 'Pilates', duration: '11.00 - 12.00', instructor: 'Emma Green' },
    { time: '12.00', class: 'Zumba', duration: '12.00 - 13.00', instructor: 'John Smith' },
  ],
  Thursday: [
    { time: '06.00', class: 'Pro Cycling', duration: '06.00 - 07.00', instructor: 'Robert Cage' },
    { time: '09.00', class: 'CrossFit', duration: '09.00 - 10.00', instructor: 'Sarah Connor' },
    { time: '10.00', class: 'Strength Training', duration: '10.00 - 11.00', instructor: 'James Brown' },
    { time: '11.00', class: 'Aerobics', duration: '11.00 - 12.00', instructor: 'Linda White' },
    { time: '12.00', class: 'Pro Cycling', duration: '12.00 - 13.00', instructor: 'Robert Cage' },
  ],
  Friday: [
    { time: '06.00', class: 'Pro Cycling', duration: '06.00 - 07.00', instructor: 'Robert Cage' },
    { time: '09.00', class: 'Yoga', duration: '09.00 - 10.00', instructor: 'Jane Doe' },
    { time: '10.00', class: 'HIIT', duration: '10.00 - 11.00', instructor: 'Michael Lee' },
    { time: '11.00', class: 'Pilates', duration: '11.00 - 12.00', instructor: 'Emma Green' },
    { time: '12.00', class: 'Zumba', duration: '12.00 - 13.00', instructor: 'John Smith' },
  ],
  Saturday: [
    { time: '06.00', class: 'Pro Cycling', duration: '06.00 - 07.00', instructor: 'Robert Cage' },
    { time: '09.00', class: 'CrossFit', duration: '09.00 - 10.00', instructor: 'Sarah Connor' },
    { time: '10.00', class: 'Strength Training', duration: '10.00 - 11.00', instructor: 'James Brown' },
    { time: '11.00', class: 'Aerobics', duration: '11.00 - 12.00', instructor: 'Linda White' },
    { time: '12.00', class: 'Pro Cycling', duration: '12.00 - 13.00', instructor: 'Robert Cage' },
  ],
};

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <p className="paragraph">Classes Schedule</p>
        <h2>Schedule Overview</h2>
      </div>
      <div className={styles.schedule}>
        <div className={styles.days}>
          <h5>Time</h5>
          {Object.keys(scheduleData).map((day) => (
            <h5 key={day}>{day}</h5>
          ))}
        </div>
        {['06.00', '09.00', '10.00', '11.00', '12.00'].map((time) => (
          <div className={styles.colums} key={time}>
            <div>{time}</div>
            {Object.keys(scheduleData).map((day) => (
              <div key={day}>
                {scheduleData[day].find((session) => session.time === time) ? (
                  <>
                    <h4>{scheduleData[day].find((session) => session.time === time).class}</h4>
                    <p>{scheduleData[day].find((session) => session.time === time).duration}</p>
                    <p>{scheduleData[day].find((session) => session.time === time).instructor}</p>
                  </>
                ) : (
                  <div className={styles.emptyCell}></div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Second;
