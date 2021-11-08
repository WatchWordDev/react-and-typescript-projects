import { useState, useEffect } from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const Application = () => {
  const [character, setCharacter] = useState<CharacterType | null>(null);

  useEffect(() => {
    fetchCharacter().then((c) => {
      setCharacter(c);
    });
  }, []);

  return (
    <main>{character && <CharacterInformation character={character} />}</main>
  );
};

export default Application;
