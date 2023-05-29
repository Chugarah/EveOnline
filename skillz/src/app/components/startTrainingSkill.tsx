import { useState, useRef, useEffect } from "react";
import skillDb from "@/data/skillz";
import { Character } from "../../types/character";
import Skill from "@/types/skills";

const useStartTrainingSkill = (initialCharacter: Character) => {
  // Define the initial state for the character.
  const [character, setCharacter] = useState<Character>(initialCharacter);

  // Define the initial state for the selected skill.
  const [selectedSkill] = useState<Skill | null>(null);

  // Define a ref that will hold the interval ID.
  const intervalRef = useRef<NodeJS.Timeout>();

  // Effect to start the interval when the component mounts.
  useEffect(() => {
    // Start an interval that runs every second.
    intervalRef.current = setInterval(() => {
      // Create a new character object with decremented training times.
      const newCharacter: Character = {
        ...character,
        skills: { ...character.skills },
      };

      // Decrement the remaining training time for each skill.
      for (const skillName in newCharacter.skills) {
        newCharacter.skills[skillName]--;

        // If the training time for a skill has reached zero, remove the skill.
        if (newCharacter.skills[skillName] <= 0) {
          delete newCharacter.skills[skillName];
        }
      }

      // Update the character state.
      setCharacter(newCharacter);
    }, 1000);

    // Clean up the interval when the component unmounts.
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [character]);

  const startTrainingSkill = () => {
    if (selectedSkill === null) {
      console.log("Skill", selectedSkill);
      return;
    }

    // Calculate training time based on character's attributes and skill's base training time.
    let trainingTime = selectedSkill.baseTrainingTime; // replace this with actual calculation

    // Add the new skill to the character's skills with the remaining training time.
    const newCharacter: Character = {
      ...character,
      skills: {
        ...character.skills,
        [selectedSkill.name]: trainingTime,
      },
    };

    // Update the character state.
    setCharacter(newCharacter);
  };

  return { character, startTrainingSkill };
};

export default useStartTrainingSkill;
