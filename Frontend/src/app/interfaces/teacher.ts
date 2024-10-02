import { Credential } from "./credential";
import { Person } from "./person";



export interface Teacher{
    personId: string;
    createdAt?: string,
    updatedAt?: string,
    Person: Person,
    Credential: Credential
}