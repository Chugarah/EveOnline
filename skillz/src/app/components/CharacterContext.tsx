"use client";
import { createContext, useState } from "react";
import { Character } from "../../types/character";

// Define the initial state for the character.
const initialCharacter: Character = {
  name: "John Doe",
  attributes: {
    intelligence: 10,
    perception: 10,
    charisma: 10,
    willpower: 10,
    memory: 10,
  },
  skills: {},
};

// Define the character context.
export const CharacterContext = createContext<{
  character: Character;
  setCharacter: (character: Character) => void;
}>({
  character: initialCharacter,
  setCharacter: () => {},
});

// Define the character provider.
export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [character, setCharacter] = useState<Character>(initialCharacter);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
