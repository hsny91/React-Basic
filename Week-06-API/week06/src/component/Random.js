export default function Random ({data, load}) {
    return (
      <div>
       <button onClick={load}>Show Word</button>
             <div >
             <div>
                <img src={data.icon_url}></img> </div> 
             <div>{data.value}</div> 
          </div>
      </div>
    )
    }