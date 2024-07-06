import React from "react";

import image from "../images/BG2.avif";

const imageAltText = "Background image";

const description =
  " I am a student at Nigama engineering, Karimnagar. I am pursuing B.Tech in Computer Science and Engineering. I am a Full stack developer enthusiast and a passionate learner. I am always looking for new opportunities to learn and grow.";

const skillsList = ["React", "NodeJs", "Mongodb", "Express", "Typescript", "Nextjs"];

const detailOrQuote =
  "I am a passionate learner and always looking for new opportunities to learn and grow. I am a Full stack developer enthusiast and a passionate learner. I am always looking for new opportunities to learn and grow.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
