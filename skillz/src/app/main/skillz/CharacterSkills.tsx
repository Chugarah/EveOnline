"use client";
import { useContext } from "react";
import { CharacterContext } from "../../components/CharacterContext";
import useStartTrainingSkill from "../../components/startTrainingSkill";

const CharacterSkills = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const { startTrainingSkill } = useStartTrainingSkill(character);

  console.log(character);

  return (
    <div>
      <h1>{character.name}</h1>

      <ul>
        {Object.entries(character.skills).map(([skillName, trainingTime]) => (
          <li key={skillName}>
            {skillName}: {Math.ceil(trainingTime / 60)} minutes remaining
          </li>
        ))}
      </ul>
      <button onClick={() => startTrainingSkill("Astronomy")}>
        Train Astronomy to level 1
      </button>
    </div>
  );
};

export default CharacterSkills;
