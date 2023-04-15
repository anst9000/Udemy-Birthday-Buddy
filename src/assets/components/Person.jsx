const Person = ({ name, age, image }) => {
  return (
    <div className="person">
      <h4>{name}</h4>
      <p>{age}</p>
      <img src={image} alt={name} />
    </div>
  )
}

export default Person
