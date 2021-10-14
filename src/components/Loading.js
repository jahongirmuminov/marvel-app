import React from 'react'
import ReactLoading from 'react-loading';
const Loading = ({type}) => {
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"20vh"}} className="home">
             <ReactLoading  type={type}     color="#fff" height={255} width={255} />
             <h4 className="text-white">Please wait...</h4>
        </div>
    )
}

export default Loading
