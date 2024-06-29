import RosterTemplate from './RosterTemplate'
import roster from './12URosters.png'

function MinorsRoster_12(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default MinorsRoster_12