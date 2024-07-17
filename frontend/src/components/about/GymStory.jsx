import { gymStoryData } from "../../data/data";

import styles from "./about.module.css";

const GymStory = () => {
  return (
    <div
      className={`${styles["gym-story"]} container sections-padding`}
      data-aos="fade-right">
      <div className={styles["section-one"]}>
        {gymStoryData.slice(0, 2).map((ele) => {
          return (
            <div key={ele.id}>
              {ele?.welcome && <p>Welcome</p>}
              <h2>{ele.title}</h2>
              <p>
              Our gym is more than just a place to work out—it's a community where you can achieve your fitness goals, find motivation, and connect with others. We believe in the power of fitness to transform lives and are dedicated to providing the best facilities, classes, and support for our members
              </p>
              {ele?.image && <img src={ele.image} alt="" />}
            </div>
          );
        })}
      </div>

      <div className={styles["section-two"]}>
        {gymStoryData.slice(2).map((ele) => {
          return (
            <div key={ele.id}>
              <h2>{ele.title}</h2>
              <p>
              Founded in [Year], our gym began with a simple mission: to create a welcoming space where everyone can pursue their fitness journey. What started as a small local gym has grown into a thriving community of fitness enthusiasts of all levels. Our passion for fitness and commitment to our members have driven us to continuously improve and expand our offerings
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymStory;
