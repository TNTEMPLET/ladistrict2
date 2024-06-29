import RosterTemplate from './RosterTemplate'
import roster from './9SRosters.png'

function MinorsRoster_9(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default MinorsRoster_9