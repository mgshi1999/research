export interface ResearchProject {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Researcher {
    id: number;
    name: string;
    email: string;
    affiliation: string;
}

export interface ResearchResult {
    projectId: number;
    researcherId: number;
    result: string;
    publishedAt: Date;
}