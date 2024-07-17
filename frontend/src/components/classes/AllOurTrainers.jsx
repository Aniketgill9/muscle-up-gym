import React from "react";
import { Link } from "react-router-dom";
import styles from "./classes.module.css";
import { allOurTrainersData } from "../../data/data";

// GymClasses data
const classesData = [
  {
    id: 1,
    title: "Pilates Training",
    description:
      "Pilates is a low-impact exercise that aims to strengthen muscles while improving postural alignment and flexibility. Join our classes to enhance your core strength and overall fitness.",
    image: "/images/pilates.jpg", // replace with actual image path
    link: "/classes/pilates"
  },
  {
    id: 2,
    title: "Yoga",
    description:
      "Yoga classes that help you find your balance, flexibility, and strength. Suitable for all levels.",
    image: "/images/yoga.jpg", // replace with actual image path
    link: "/classes/yoga"
  },
  {
    id: 3,
    title: "Cardio Kickboxing",
    description:
      "High-energy workout that combines martial arts techniques with fast-paced cardio. Burn calories and build stamina.",
    image: "/images/cardio_kickboxing.jpg", // replace with actual image path
    link: "/classes/cardio-kickboxing"
  },
  {
    id: 4,
    title: "Strength Training",
    description:
      "Build your strength and endurance with our comprehensive strength training program. Suitable for all levels.",
    image: "/images/strength_training.jpg", // replace with actual image path
    link: "/classes/strength-training"
  },
  {
    id: 5,
    title: "Zumba",
    description:
      "Dance your way to fitness with our high-energy Zumba classes. Fun and effective cardio workout.",
    image: "/images/zumba.jpg", // replace with actual image path
    link: "/classes/zumba"
  },
  {
    id: 6,
    title: "HIIT",
    description:
      "High-Intensity Interval Training (HIIT) is a fast-paced workout that alternates between intense bursts of activity and fixed periods of less-intense activity.",
    image: "/images/hiit.jpg", // replace with actual image path
    link: "/classes/hiit"
  }
];

const AllOurTrainers = () => {
  return (
    <div>
        <div>
      <div className={`${styles["all-trainers"]} container sections-padding`}>
        <div className={styles["trainers-text"]}>
          <p className="paragraph">Our Trainers</p>
          <h2>We Train You to Gain</h2>
        </div>
        <div className={styles.classes}>
          {allOurTrainersData.map((ele) => (
            <div key={ele.id} className={styles.classCard} data-aos="fade-right">
              <img src={ele.image} alt={ele.title} />
              <div className={styles.classContent}>
                <h3>{ele.title}</h3>
                <p>{ele.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      
      <div className={styles["gym-classes"]}>
        <div className={styles["hero-section"]}>
          <div className={styles["hero-content"]}>
            <h1>Discover Our Classes</h1>
            <p>Explore a variety of classes designed to suit your fitness needs and goals.</p>
          </div>
        </div>
        <div className={`${styles["classes-content"]} container`}>
          <h2>Our Classes</h2>
          <div className={styles.classes}>
            {classesData.map((classItem) => (
              <div key={classItem.id} className={styles.classCard}>
                
                <div className={styles.classContent}>
                  <h3>{classItem.title}</h3>
                  <p>{classItem.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOurTrainers;
