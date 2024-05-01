import Coffee from "../Coffee/Coffee";

import "./AboutText.scss";

const AboutText = ({ img }) => {
  return (
    <main className="about_text">
      <img src={img} alt="girl drink coffee" className="about__img" />
      <div className="about_text__content">
        <h3 className="about_text__title">About our beans</h3>
        <Coffee color={"black"}></Coffee>
        <div className="about_text__text_container">
          <p className="about_text__text">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <br></br>
          <p className="aboutText__text">
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. As greatly removed calling
            pleased improve an. Last ask him cold feel met spot shy want.
            Children me laughing we prospect answered followed. At it went is
            song that held help face.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutText;
