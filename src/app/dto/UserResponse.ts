export interface UserResponse {
    _id: string;
    nom: string;
    prenom: string;
    email: string;
    role_id: { role: string }; 
    soft_delete: boolean;
    createdAt: string;
    updatedAt: string;
}
