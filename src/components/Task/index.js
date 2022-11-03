export default function Task(props) {
  // const {useStateTohil} = props
  const {timeAgo,timeCreatedTask,taskName} = props


  return(
    <div className="card">
      <div className="card-header">
        {timeAgo}
      </div>
      <div className="card-body">
        <h5 className="card-title" >{taskName}</h5>
        <p className="card-text">{timeCreatedTask}</p>
        <button href="#" className="btn btn-primary">Done!</button>
      </div>
    </div>
  )
}