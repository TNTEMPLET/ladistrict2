import RosterTemplate from './RosterTemplate'
import roster from './Coach Pitch Rosters.png'

function CoachesPitch(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default CoachesPitch