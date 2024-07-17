import styles from "./yogaClass.module.css";
import photo1 from "../../assets/yoga2.png";
import { useNavigate } from "react-router";
const Second = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.second}  container sections-padding`}>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <img src={photo1} alt="" />
        <span>March 22, 2024</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>
        Yoga is not just about physical exercise; it's a comprehensive approach to achieving a balanced mind,
         body, and spirit. Our classes focus on helping you find inner peace and improve your overall well-being. 
         Experience the transformative power of yoga with our expert instructors.
        </p>
        <ul>
          <li>A natural way of your health.</li>
          <li>Train Yourself to Exercise.</li>
          <li>Enhancing the personal healing.</li>
        </ul>
        <h3>Make real time a health improvements</h3>
        <p>
        Join our yoga classes to see immediate benefits in your health and fitness.
         Our classes are designed to cater to all levels, from beginners to advanced practitioners. 
         With regular practice, you will notice improvements in flexibility, strength, and mental clarity.
        </p>
        <ul>
          <li>
            It brings the right people together with all the right information
            and tools to get work done
          </li>
          <li>
            We provide operational efficiency, data security, and flexible scale
          </li>
          <li>
            Your best work, together in one package that works seamlessly from
            your computer
          </li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <h3>Class Details</h3>
        <p>Objectively innovate empowered manufactured products</p>

        <p className={styles.info}>
          Duration : <span>45 Minutes </span>
        </p>

        <p className={styles.info}>
          Intensity :<span>High </span>
        </p>
        <p className={styles.info}>
          Fitness Level :<span>Advanced </span>
        </p>
        <p className={styles.info}>
          Schedule :<span>Monday, Saturday </span>
        </p>
        <button onClick={()=> navigate("/Contact")}>join now</button>
      </div>
    </div>
  );
};

export default Second;
