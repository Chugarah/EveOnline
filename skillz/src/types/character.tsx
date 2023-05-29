/**
 * The above code defines a TypeScript type for a character with attributes and skills.
 * @property {string} name - a string representing the name of the character.
 * @property attributes - The attributes property is an object that contains the following properties:
 * @property skills - The `skills` property is an object that contains the character's skills. The keys
 * of the object are the names of the skills, and the values are the amount of training time remaining
 * for each skill.
 */
// Define a type for characters.
export type Character = {
  name: string;
  attributes: {
    intelligence: number;
    perception: number;
    charisma: number;
    willpower: number;
    memory: number;
  };
  skills: {
    [key: string]: number; // key is skill name, value is training time remaining
  };
};

export default Character;
