export interface Company {
    _id?: string;
    company?: string;
    user_id?: {
        _id: string;
        nom: string;
        prenom: string;
        email: string;
    };
    createdAt?: string;
    updatedAt?: string;
}
