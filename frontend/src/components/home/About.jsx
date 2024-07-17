import styles from "./home.module.css";

import photo1 from "../../assets/home5.png";
import photo2 from "../../assets/home6.png";
import photo3 from "../../assets/my-photos/me2.jpeg";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.about} container sections-padding`}>
      <div
        className={styles.text}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <p className="paragraph">About</p>
        <h2>
          Respect Your Body,
          <br />
          It’s the Only One You Get
        </h2>
        <p>
          Taking care of your body is not just a duty, it's a form of self-love. Your body is the vehicle that carries you through life, and it deserves the best care and respect you can offer.
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Motivation</h3>
            <p>
              Fitness is not about being better than someone else, it's about being better than you used to be. Embrace the journey and celebrate your progress every step of the way.
            </p>
          </div>
          <img src={photo1} alt="Photo one" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Photo two" />
          <div>
            <h3>Inspire</h3>
            <p>
              You don't get the body you want by wanting it, you get it by working for it. Every drop of sweat, every ounce of effort brings you closer to your goals. Stay inspired and keep pushing forward.
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles["img-container"]}
        data-aos="fade-up"
        data-aos-duration="3000">
        <img src={photo3} alt="Man Exercise" />
        <button onClick={() => navigate("/schedule")}> Schedule</button>
      </div>
    </div>
  );
};

export default FourthSection;
