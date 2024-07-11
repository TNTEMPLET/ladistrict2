import RosterTemplate from './RosterTemplate'
import roster from './State Junior Division Rosters.png'

function JuniorsRoster_14(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default JuniorsRoster_14