import styles from "./home.module.css";
import photo1 from "../../assets/home4.png";
import photo2 from "../../assets/home3.png";
import photo3 from "../../assets/home2.png";
import { Link } from "react-router-dom";

const SecondSection = () => {
  return (
    <div className={`${styles.second_section} container sections-padding`}>
      <div className={styles.first}>
        <div>
          <p className="paragraph">Our Fitness Training</p>
          <h2>Upcoming Classes</h2>
        </div>
        <div>
          <button>More Class</button>
        </div>
      </div>
      <div className={styles.second}>
        <div>
          <img src={photo1} alt="women in gym" />
          <h3>Pilates Training</h3>
          <p>Description: Join our Pilates class to improve your flexibility, core strength, and posture. Suitable for all fitness levels, this low-impact workout focuses on controlled movements and breathing techniques.
             Instructor: Jane Doe, certified Pilates instructor with 10 years of experience.
             Schedule: Mondays and Wednesdays at 7:00 PM.
             Duration: 1 hour.
             Location: Studio 2.
             Sign-Up: Register Here
             Testimonials: "Jane's Pilates class has helped me immensely with my back pain. Highly recommend!" - Sarah K. </p>
         
        </div>

        <div>
          <img src={photo2} alt="women in gym" />
          <h3>Aerobic Training</h3>
          <p>Description: Energize your fitness routine with our Aerobic Training sessions. These high-energy classes are designed to boost cardiovascular health, burn calories, and improve overall stamina.
             Instructor: John Smith, former professional athlete and certified aerobics coach.
             Schedule: Tuesdays and Thursdays at 6:00 PM.
             Duration: 1 hour.
             Location: Main Hall. </p>
         
        </div>

        <div>
          <img src={photo3} alt="man in gym" />
          <h3>CrossFit Workout</h3>
          <p>Description: Experience the intensity of CrossFit workouts that combine strength training, cardio, and gymnastics. Perfect for those looking to push their limits and achieve new fitness goals.
            Instructor: Emily Johnson, CrossFit Level 2 Trainer.
            Schedule: Fridays at 5:00 PM and Saturdays at 10:00 AM.
            Duration: 1 hour.
            Location: Outdoor Arena. </p>
          {/* <a href="#">Read More</a> */}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
