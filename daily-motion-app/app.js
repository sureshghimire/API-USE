const inquirer = require('inquirer');

const dailyMotion = require('dailymotion-api');

const _selectPrompt = async (results)=>{            //results is the 'list' array
    const displayChoices = results.map(result=>{
                        
        return{name: `${result.title}`, value: `${result.id}`}
        
        
        //name is what is going to be displayed for the user to select
        //value is something that the name has
    })

    return inquirer.prompt({
        type:'list',
        name:'catagory',
        message:'please select one video',
        choices: displayChoices

    })
}



//print function to print out on nice format
const _print = async(catagory)=>
{
    console.log('-------------')
    Object.keys(catagory).forEach((key)=>{
        if(key ==='title'||key==='name'){
            console.log(`${key.toUpperCase()}:${catagory[key]}`)
        }

        if(key==='channel'){
            console.log(`${key.toUpperCase()}: ${catagory[key]}`)
        }

        if(key==='owner'){
            console.log(`${key.toUpperCase()}:${catagory[key]}`)
        }
    })

    console.log('-------------')

}

//search function
async function search(keyword){

    //search for a catagory by keyword

    const search = await dailyMotion.search(keyword)
    //console.log(search.list)


    //prompt user to select the video
    const selection = await _selectPrompt(search.list);
    
    

    //fetch the video by unique id
    const selectedVideo = await dailyMotion.fetch(selection.catagory)
    //console.log(selectedVideo)  //print on unfromatted 


    _print(selectedVideo);      //print selected video details on nice format
    

}


//fetch function
async function fetch(id){

}



module.exports={
    search
}