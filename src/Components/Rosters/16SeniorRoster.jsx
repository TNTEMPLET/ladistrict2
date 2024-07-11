import RosterTemplate from './RosterTemplate'
import roster from './State Senior Division Rosters.png'

function SeniorRoster_16(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default SeniorRoster_16