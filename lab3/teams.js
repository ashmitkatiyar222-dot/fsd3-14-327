let teams = [{
    id: 1,
    tname: "teamA",
    tl: "Anon",
    email: "anoan@gmail.com",
    members: "6",

},
{
    id: 2,
    tname: "teamB",
    tl: "Anon1",
    email: "anon1@gmail.com",
    members: "6",

},




];

let nextId = 3;

const getAllTeam = () => teams

export const getTeamById = (id) => teams.find((team) => team.id === id)

export const addteam = (newTeam) => {
    newTeam.id = nextId++;
    teams.push(newTeam);
    return newTeam;
}

export const updateTeam = (id, updateTeam) => {
    const team = getTeamById(id);
    if (!team) return null;

    Object.assign(team, updateTeam);
    return team;


}

export const deleteTeam=(id)=>{
    const teamIndex = teams.findIndex((team) => team.id === id);
    if (teamIndex === -1) return null;
    return teams.splice(teamIndex, 1)[0];
}