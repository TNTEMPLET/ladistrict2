import RosterTemplate from './RosterTemplate'
import roster from './11URosters.png'

function MinorsRoster_11(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default MinorsRoster_11