import { ChangeEvent, useState } from 'react';

type CounterProps = {
  incident: string;
};

const increment = (count: number) => count + 1;

const decrement = (count: number) => count - 1;

const Counter = ({ incident }: CounterProps) => {
  const [count, setCount] = useState(0);

  const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(event.target.value));
  };

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(increment)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(decrement)}>Decrement</button>
      </section>
      <section className="controls">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(0);
          }}
        >
          <label htmlFor="set-to">Set Count</label>
          <input
            onChange={changeCount}
            id="set-to"
            type="number"
            value={count}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter incident="Coffee Spill" />;

export default Application;
