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
    lineup: any[];
    bench: number[];
}
export interface DashboardState {
    matchMetadata: MatchMetaData;
    swaps: Swaps;
}
export interface MatchMetaData {
    rivelName: string;
    rivelLogoImage: string;
    score: { myTeam: number, rival: number };
    matchLocation: string;
}
export interface MatchData {
    selectedFormation: string;
    players: Players;
}
export interface Swaps {
    tempBench: { playerId: number; index: number; };
    tempLineup: { playerId: number; xy: { x: number; y: number; } };
}

export interface MatchDataJson {
    matchMetadata: {
        rivelName: string;
        rivelLogoImage: string;
        score: { myTeam: number; rival: number; },
        matchLocation: string
    };
    selectedFormation: string;
    players: Players;
}







