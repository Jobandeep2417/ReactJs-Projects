
import ListItem from './ListItem'
import {useState} from 'react';

const data = [{
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name:"Black Widow",
    age:30
},{
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    name:"t'challa 's Sister",
    age:40
},{
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name:"Killmonger",
    age:45
},{
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name:"Captian America",
    age:3000
}];



function List(){
    const [people,setPeople] = useState(data);

 return (

    <>
        <h1 style={{padding:"5%", fontSize:"3rem"}}>{people.length} BirthDays Today</h1>
        { 
            people.map((person) => {
                
                return (
                   <ListItem person={person}/>
                );
            })
        }
    
        <button className='btn' onClick={()=>setPeople([])}>Clear All Items</button>
    </>
 );
}

export default List;