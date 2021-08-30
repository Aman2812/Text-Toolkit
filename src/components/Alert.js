import React from 'react'

const Alert = (props) => {
    return (
        <div style={{height: '50px'}}>
           {props.alrt && <div className={`alert alert-${props.alrt.typ} alert-dismissible fade show`} role="alert">
                <strong>{props.alrt.typ}</strong>:{props.alrt.msg}
            </div>}
        </div>
    )
}

export default Alert;
