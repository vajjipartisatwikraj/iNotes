import React from 'react'

export const Alert=(props)=>{

  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div>
        <div style={{height: "50px"}}>
            {props.alert && <div className = {`alert alert-${props.alert.type} area-dismissable fade show`} role='alert'>
              <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                </div>}
        </div>
    </div>
  )
}

