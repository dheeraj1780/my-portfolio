import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dheeraj J </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am in doing my B.E. in Mechanical Engg from SSNCE, Chennai and Diploma in programming from IIT Madras.
            <br />
            <br />
            <strong><span className="purple">My Interests</span></strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Enthusiastic automobile aficionado</strong>  Fascinated by the engineering and design of cars, always eager to learn about the latest innovations and classic models.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Football Fanatic & Badminton Buff</strong>  Two sports, one goal: to run faster than my worries (and sometimes the ball).
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>History Buff</strong>  I love binge-watching historical battles, wondering if I would've made a great knight.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Geography Geek</strong>  I've traveled to more places through documentaries than my passport will ever show!
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Cycling Addict</strong>  Two wheels, endless freedom, and the wind whispering ideas.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Nature Enthusiast</strong>  I find peace in the woods, where Wi-Fi doesn't reach but serenity does.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Thrill-seeking bike enthusiast</strong>  Love the rush of hitting the open road on two wheels, where speed and freedom collide.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Travel in My DNA</strong>  Born with a suitcase (and a camera), constantly daydreaming of my next destination.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Meditation Maverick</strong>  Staying calm and zen... until I lose a game, that is.
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Master of Games</strong>  Whether it's console or real-life, I'm always up for a challenge (Yes, I consider beating high scores a life skill).
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "An untamed soul, constantly exploring, learning, and pushing the boundaries of every horizon life offers."{" "}
          </p>
          <footer className="blockquote-footer">Dheeraj J</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;