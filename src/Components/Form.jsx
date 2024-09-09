
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="question">Send us your question: </label>
        <input type="text" id="question" name="question" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
