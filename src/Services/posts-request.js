// This is a dummy service which
// will provide the posts based on
// limit param provided which mimics
// a web API Request

import APIdata from './dummy-data.json';


const Request = limit => {
    
    //Mimicing API call by using useEffect as componentDidMount
    const data = [...APIdata]

    return new Promise(resolve => setTimeout(() => resolve(data.slice(0,limit)),3000)) 
}

export default Request;
