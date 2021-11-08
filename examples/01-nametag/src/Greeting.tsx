type GreetingProps = { name: string };

const Greeting = ({ name }: GreetingProps) => <h1> Hello, {name}!</h1>;

export default Greeting;
