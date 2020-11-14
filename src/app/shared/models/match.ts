export interface Player {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    positionCategory: string;
}

export interface FormationType {
    id: number;
    name: string;
}

export interface TeamDetails {
    teamName: string;
    logoImage: string;
}
export interface Players {
        allPlayers: Player[];
        lineup: number[];
        bench: number[];
}

export interface MatchData {
    matchMetadata: {
        rivelName: string,
        rivelLogoImage: string
        score: { myTeam: number, rival: number };
        matchLocation: string
    };
    selectedFormation: string;
    players: Players;

}






