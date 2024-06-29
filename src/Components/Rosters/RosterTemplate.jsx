import styles from './RosterTemplate.module.css'

function RosterTemplate(props){
    const {roster} = props
    const createRoster = roster.map((team, index) =>  <img src={team.roster} /> );

return  (   <>
                <div className={styles.main}>{createRoster}</div>
            </>);
}

export default RosterTemplate