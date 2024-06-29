import RosterTemplate from './RosterTemplate'
import roster from './Tee Ball Rosters.png'

function TeeBall(){
    
    const teamRoster =  [{  id: 1,
        roster: `${roster}`,
    }]

    return(<>
        <RosterTemplate roster={teamRoster}/>
    </>)
}
export default TeeBall