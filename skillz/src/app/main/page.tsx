"use client";
import { Skill } from "@/types/skills";
import useStartTrainingSkill from "../components/startTrainingSkill";
import { useState } from "react";
import skillDb from "@/data/skillz";
import { Select, Button } from "@chakra-ui/react";

const CharacterSkills = () => {
  // Define the initial state for the selected skill.
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const { character, startTrainingSkill } = useStartTrainingSkill({
    name: "John Doe",
    attributes: {
      intelligence: 10,
      perception: 10,
      charisma: 10,
      willpower: 10,
      memory: 10,
    },
    skills: {},
  });

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
      <Select
        aria-label="State"
        placeholder="Select a skill"
        onChange={(e) =>
          setSelectedSkill(
            skillDb.find((skill) => skill.id.toString() === e.target.value) ||
              null
          )
        }
      >
        {skillDb.map((skill) => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </Select>

      <Button onClick={() => startTrainingSkill()}>Train Selected Skill</Button>
    </div>
  );
};

export default CharacterSkills;
