export interface Offer {
    _id: string;
    offre: string;
    description: string;
    company_id: { company: string };
    secteur_id: { secteur: string };
    typecontrat_id: { typeContrat: string };
    updatedAt: string;
    createdAt: string;
    status: boolean;
    salaire : number;
}
