import React,{useContext,useEffect,useState} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetail,setUserDetail]=useState()
  const {postDetail} =useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const {userId}=postDetail
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{
        setUserDetail(doc.data())
      });
    })

  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={ postDetail.url } 
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; { postDetail.price } </p>
          <span>{postDetail.name}</span>
          <p>{ postDetail.category }</p>
          <span>{ postDetail.createdAt }</span>
        </div>
      
    {  userDetail &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{ userDetail.username }</p>
          <p>{ userDetail.phone }</p>
        </div>
      }
      </div>
    </div>
  );
}
export default View;
