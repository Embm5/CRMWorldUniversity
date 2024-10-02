import { Credential } from "./credential"
export interface Person{
    id: String  
    firstName: String
    secondName?: String
    lastName1: String
    lastName2?: String
    createdAt?: string
    updatedAt?: string
    email?: String
    password?: String
    Credential?: Credential
}
