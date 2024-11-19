import { getRepositoryDetails } from "../../utils";

export interface Project {
    name: string;
    codeLink?: string;
    tags?: string[],
    description?: string;
    postLink?: string;
    codeLinkRel?: string;
    [key: string]: any;
}

export const projects: Project[] = [
    {
        name: 'git-plan',
        description: 'A git extension for writing pre-emptive commit messages.',
        codeLink: 'https://github.com/rorybyrne/git-plan',
        tags: ['tool']
    },
    {
        name: 'Flywheel',
        description: 'Open source collective building better tools for science.',
        postLink: 'https://flywhl.dev',
        tags: ['initiative']
    },
    {
        name: 'Codeline',
        description: 'Run context-aware commands from your source code comments.',
        codeLink: 'https://github.com/rorybyrne/codeline',
        tags: ['tool']
    },
    {
        name: 'Labfile',
        description: 'A declarative file format for orchestrating scientific experiments',
        codeLink: 'https://github.com/flywheelhq/labfile',
        tags: ['tool']
    }
]
