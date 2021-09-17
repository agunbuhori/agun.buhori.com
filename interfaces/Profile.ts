export interface Education {
    name: string
    year: string
    course: string
}

export interface Work {
    name: string
    year: string
    role: string
}

export interface Skill {
    name: string
    value: number
}

export interface ProfileSnapshot {
    educations: Education[]
    works: Work[]
    skills: Skill[]
    summary: string
}