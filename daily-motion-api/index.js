const superagent = require('superagent')

const config = require('./config.json')


//search function
const search =async (keyword)=>{
    try{

        //const url = `${config.url}s?search=${keyword}`;
        const url2 = `${config.url2}=${keyword}`;

        
        const response = await superagent.get(url2);
        return response.body;

    }catch(error){
        console.log(error);
    }
};


//fetch function
const  fetch = async (id)=>{
    try{
        const url = `${config.url}/${id}`;
        
        const response = await superagent.get(url);
        return response.body;

    }catch(error){
        console.log(error);
    }
}

//export function
module.exports={
    search,
    fetch
}
