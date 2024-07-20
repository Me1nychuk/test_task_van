import css from "./Home.module.css";
import images from "../assets/homePage/images";
import clsx from "clsx";
const Home = () => {
  return (
    <div>
      <section className={css.section}>
        <img
          className={clsx(css.image, css.mainImg)}
          src={images.main}
          alt=""
        />
        <h1 className={css.title}>Welcome to our trailer sales website!</h1>
      </section>
      <section className={clsx(css.section, css.sectionSecnd)}>
        <p className={clsx(css.description)}>
          We are happy to welcome you to the world of endless travel and
          adventure. Our online store specializes in the sale of trailers and
          campers, providing you with everything you need for a comfortable and
          safe travel life.
        </p>
        <div className={css.gallery}>
          <img
            className={clsx(css.image, css.galleryS)}
            src={images.image1}
            alt=""
          />
          <img
            className={clsx(css.image, css.galleryF)}
            src={images.image2}
            alt=""
          />
          <img
            className={clsx(css.image, css.galleryT)}
            src={images.image3}
            alt=""
          />
          <img
            className={clsx(css.image, css.galleryL)}
            src={images.image4}
            alt=""
          />
        </div>
      </section>
      <section>
        <div className={css.photoBlock}>
          <img className={css.image} src={images.image5} alt="" />
          <div>
            <h2 className={css.advatageTitle}>What we offer:</h2>
            <ul className={css.advantagesList}>
              <li>
                A wide range of models: From compact campers for short trips to
                spacious trailers equipped with all the amenities for long
                journeys.
              </li>
              <li>
                High quality: All of our trailers meet the highest quality and
                safety standards, ensuring the reliability and durability of
                your new home on wheels.
              </li>
              <li>
                Affordable prices: We offer competitive prices and flexible
                financing terms to make your trailer purchase as affordable as
                possible.
              </li>
              <li>
                Professional support: Our team of experts is always ready to
                provide advice and assistance in choosing the best option for
                your needs and budget.
              </li>
              <li>
                Maintenance and repair: We provide a full range of maintenance
                and repair services for your trailers so that you can always
                enjoy worry-free travel.
              </li>
            </ul>
          </div>
        </div>
        <div className={css.photoBlock}>
          <div>
            <h2 className={css.advatageTitle}>Why choose us:</h2>
            <ul className={css.advantagesList}>
              <li>
                Experience and reliability: We have been operating in the
                trailer sales market for many years and have earned the trust of
                thousands of satisfied customers.
              </li>
              <li>
                Individual approach: Each client is special to us. We take into
                account all your wishes and requirements to find the perfect
                trailer for you.
              </li>
              <li>
                Affordable prices: We offer competitive prices and flexible
                financing terms to make your trailer purchase as affordable as
                possible.
              </li>
            </ul>
          </div>
          <img className={css.image} src={images.image6} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
