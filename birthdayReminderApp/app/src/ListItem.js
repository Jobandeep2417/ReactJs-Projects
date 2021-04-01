import { Container } from '@material-ui/core';

function ListItem(props){
    const {img,name,age} = props.person;
    // console.log(name,age);
    return( 
    
        <div className="listItem">
            <img src={img} className='img'/>
            <div>
                <h1 className='name'>{name}</h1>
                <p className='age'>{age} Years</p>
            </div>
            
        </div>

        )
}

export default ListItem;