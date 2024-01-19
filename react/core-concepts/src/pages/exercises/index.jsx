import "./styles.css";
import { useState } from "react";

const cardWithImg = [
  {
    id: 1,
    title: "Card 1",
    description: "Card 1 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Card 2 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Card 3 description",
    image: "https://picsum.photos/200/300",
  },
];

const CardComponent = ({ title, description, image }) => {
  return (
    <div className="exercises-border-content">
      <img className="exercises-image-card" src={image} alt="" />
      <h3>Title:{title} </h3>
      <p>Description:{description} </p>
    </div>
  );
};

function ExercisesPage() {
  return (
    <>
      <div className="exercises-card-container">
        <h1 className="exercises-title">Cards Exercises</h1>
        <div className="exercises-card-list">
          {cardWithImg.map((card, index) => (
            <CardComponent
              id={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              key={`${index}-${card.id}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label>Assunto:</label>
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

function ExercisesPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}Email: ${email}Subject: ${subject}`);
    setName("");
    setEmail("");
    setSubject("");
  };

  

export default ExercisesPage;
