import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

type FormProps = {
  handleSubmit: (n: number) => void;
};

const Form = ({ handleSubmit }: FormProps) => {
  const [numberOfFacts, setNumberOfFacts] = React.useState(3);

  const changeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfFacts(+event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(numberOfFacts);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          onChange={changeNumber}
          type="number"
          value={numberOfFacts}
          min="1"
          max="10"
          id="number-of-facts"
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [facts, setFacts] = React.useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => setFacts(facts));
  };

  return (
    <main>
      <Form handleSubmit={handleSubmit} />
      <section>
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact.fact} />
        ))}
      </section>
    </main>
  );
};

export default Application;
