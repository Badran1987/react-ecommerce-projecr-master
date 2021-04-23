import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const Page404 = ()=>{
    return(<>
     
     <h1> 404 Page</h1>
     
     <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link to="/"> Home Page</Link></Button>}
  />
    
     </> )

}

export default Page404