import Card from './Card';
const Cards = ({ characters }) => {
  const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };
  return (
    <div>
      <Card
        key={example.id}
        name={example.name}
        species={example.species}
        gender={example.gender}
        image={example.image}
        status={example.status}
        origin={origin.name}
        onClose={() => window.alert('Emulamos que se cierre la card!')}
      />
      ;
    </div>
  );
};

export default Cards;
