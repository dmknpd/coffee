import Coffee from "../Coffee/Coffee";

import "./AboutText.scss";

const AboutText = ({ img, title, country, description, price }) => {
  const beansOne =
    "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible";
  const beansTwo =
    "Afraid at highly months do things on at. Situation recommendobjection do intention so questions. As greatly removed callingpleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.";

  const pleasureOne =
    "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.";
  const pleasureTwo =
    "Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.";

  const textOne = title === "About our beans" ? beansOne : pleasureOne;
  const textTwo = title === "About our beans" ? beansTwo : pleasureTwo;
  const textStyle = country ? { textAlign: "left" } : null;
  return (
    <main className="about_text">
      <img src={img} alt="girl drink coffee" className="about__img" />
      <div className="about_text__content">
        <h3 className="about_text__title">{title}</h3>
        <Coffee color={"black"}></Coffee>
        <div className="about_text__text_container" style={textStyle}>
          <p className="about_text__text">
            {country ? (
              <>
                <b>Country:</b> {country}
              </>
            ) : (
              textOne
            )}
          </p>
          <br></br>
          <p className="about_text__text">
            {description ? (
              <>
                <b>Description:</b> {description}
              </>
            ) : (
              textTwo
            )}
          </p>
          <br></br>
          {price ? (
            <p className="about_text__text">
              <b>Price:</b> <span className="about_text__price">{price}$</span>
            </p>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default AboutText;
