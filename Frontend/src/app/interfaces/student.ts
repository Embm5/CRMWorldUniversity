
import { Credential } from "./credential";
import { Person } from "./person";



export interface Student {
    personId: string;
    createdAt?: string,
    updatedAt?: string,
    Person: Person,
    Credential: Credential
}
