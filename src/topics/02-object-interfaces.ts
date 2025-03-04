
const skills: string[] = ['Bash','Counter','Healing'];


interface Character {
    name: string;
    hp: number;
    skills: string;
    hometown?: string | undefined;
}


const Strider: Character ={
    name: 'Anthony',
    hp: 100,
    skills: 'patada nuclear',
}

Strider.hometown ='Guayaquil';

console.table(Strider)

export {};
