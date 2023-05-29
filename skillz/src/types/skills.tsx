/**
 * This is a TypeScript interface for a Skill object that includes its name, description, and base
 * training time in seconds.
 * @property {string} name - A string representing the name of a skill.
 * @property {string} description - The description property is a string that provides a brief
 * explanation or summary of what the skill is or does.
 * @property {number} baseTrainingTime - baseTrainingTime is a property of the Skill type that
 * represents the amount of time required to train and improve the skill, measured in seconds.
 */
export type Skill = {
  id: number;
  name: string;
  description: string;
  baseTrainingTime: number; // in seconds
};

export default Skill;
