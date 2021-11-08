import React from 'react'

const Square = ({value, onClick}) => {

    const style = value ? `squares ${value}` : `squares`
    return (
        <button className={style} onClick={(e) =>{ 
            onClick(e) 
            }}>
            {value}
        </button>
    )
}

export default Square