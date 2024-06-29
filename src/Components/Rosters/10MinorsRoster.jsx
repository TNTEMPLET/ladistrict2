import RosterTemplate from './RosterTemplate'
import roster from './10URosters.png'

function MinorsRoster_10(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default MinorsRoster_10