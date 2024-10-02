import { Credential } from "./credential";
import { Person } from "./person";



export interface Staff{
    personId: string;
    createdAt?: string,
    updatedAt?: string,
    Person: Person,
    Credential: Credential
}