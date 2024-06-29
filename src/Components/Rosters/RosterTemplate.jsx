function RosterTemplate(props){
    const {roster} = props
    const createRoster = roster.map((team, index) =>  <img src={team.roster} /> );

return  (   <>
                {createRoster}
            </>);
}

export default RosterTemplate