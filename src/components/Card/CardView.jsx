import React from 'react'
import './CardView.css';
import userImage from '../Assets/user-image.png';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="flex-gap-10 cardGlobal" style={{gap : '10px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "60%" }}  src={userImage} alt="UserImage" />
                <div className="spaceDiv"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 100}} >
            <p>{title}</p>
        </div>
        <div className="cardFlexTags">
        <div className="tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;