import Card from './Card';
const Cards = ({ characters }) => {
  return (
    <div>
      {characters.map(
        ({ id, name, species, gender, image, status, onClose, origin }) => {
          return (
            <Card
              key={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              status={status}
              origin={origin.name}
              onClose={() => window.alert('Emulamos que se cierre la card!')}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
