const team = [
    { name: "Will", nationality: "American" }, 
    { name: "Joe", nationality: "British" }, 
    { name: "Sarah", nationality: "Chinese" }, 
    { name: "Steve", nationality: "Japanese" },          
]

function findTeamMemberByName(name) {
    return team.find(member => member.name === name);
}

function findTeamMemberByNationality(nationality) {
    return team.find(member => member.nationality === nationality);
}

function findBritishTeamMemberByName(name) {
    const britishMembers = team.filter(member => member.nationality === "British")
    console.log('inside function- british Members: ' + britishMembers)
    return britishMembers.find(member => member.name === name);
} 

console.log(findTeamMemberByNationality('British'));
console.log(findTeamMemberByNationality('American'));
console.log(findBritishTeamMemberByName('Joe'));
