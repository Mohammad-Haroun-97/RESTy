
import React from 'react'

function history(props) {

    const {dataHistory}=props
console.log('dataHistory3333333333333333',dataHistory);


// console.log('000000000000',-1 == false);

    return (
        <div>
            <h1>History</h1>
            

           { dataHistory && dataHistory.map((item)=>{ return (
            
            <div>
                "*******************************************************************************"
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              <pre>  {JSON.stringify(item.data, null, 5) }</pre> 
                <br/>
                <br/>
                <br/>
                <br/>
               <pre> {JSON.stringify(item.requestParams, null, 2) }</pre>
                
                
            </div>
            
            
            
            )})}
            
        </div>
    )
}

export default history
