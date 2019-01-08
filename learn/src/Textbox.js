import React from 'react';

const Textbox= () =>
{return(
    <div className='tc ' >
        <input 
            className='tc'
                 type='search'
                 placeholder='search'
                 style={{width:600,height:50}}
                 onChange={ondblclick}
     
         /><br></br>
         
         <button className='tc ma4'
                bsStyle="link"
                bsSize="large"
                >Explore</button>
     </div>

);

}
export default Textbox;