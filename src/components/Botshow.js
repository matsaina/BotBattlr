import React from 'react'

function Botshow({records}) {
  return (
    

<>

{records.map((record)=>{

return(
<>


    <div className="col-md-4">
    <div className="card mb-4 box-shadow">
      <img className="card-img-top" style={{ width: '80%'}} src={record.avatar_url} alt="Card image cap"/>
      <div className="card-body">
      <p className="card-text">Name: {record.name}</p>
      <p className="card-text">health: {record.health}</p>
      <p className="card-text">damage: {record.damage}</p>
      <p className="card-text">armor: {record.armor}</p>

        <p className="card-text">{record.catchphrase}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
</>

)


})}





</>
  )
}

export default Botshow