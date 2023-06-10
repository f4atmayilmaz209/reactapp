import React,{useRef, useState} from 'react'
import styled from "styled-components"
import {mobile} from "../responsive"
import { addData } from '../service/api';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSuccess } from '../redux/socialmediaSlice';
const Container=styled.div`
    border-color:black;
    width:20px;
    height:400px;
    margin-top:180px;
    margin-left:150px;
    font-size:15px;
    ${mobile({padding:"0px",fontSize:"10px"})}

`;
const Kutu=styled.div`
    width:350px;
    height:300px;
    top:0;
    bottom:0;
    margin:auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:10px;
    position:relative

`;
const Hello=styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    margin-left:50px;
    ${mobile({fontSize:"8px"})}



`;
const Input=styled.input`

    border:1px solid gray;

`;
const Button=styled.button`
    position:absolute;
    bottom:30px;
    right:60px;
    border-radius:5px;
    background-color:pink;
    border:none;
    height:30px
    
    
`;
const Buttonv=styled.button`
    position:absolute;
    bottom:30px;
    left:60px;
    border-radius:5px;
    background-color:pink;
    border:none;
    height:30px;

    
    
`;
const SocialMediaEkle = () => {
    const {currentSocialMedia}=useSelector((state)=>state.socialmedia)
    const dispatch=useDispatch()

    const [link,setLink]=useState("")
    const [ad,setAd]=useState("")
    const [aciklama,setAciklama]=useState("")
    const linkRef=useRef()
    const adRef=useRef()
    const aciklamaRef=useRef()

    const handleChangeL=()=>{
        setLink(linkRef.current.value)

    }
    const handleChangeA=(e)=>{
        setAd(adRef.current.value)

    }
    const handleChangeAc=(e)=>{
        setAciklama(aciklamaRef.current.value)

    }

    const handleClickKaydet=async()=>{
        const d = new Date();
        const c=d.getTime()
        //time referansına göre unique id oluşturulması 
        const data={"id":c,"link":link,"ad":ad,"aciklama":aciklama}
        await addData(data)
        //dispatch ile store 'e eklenen kayıdın gönderilip datagridde görüntülenmesi
        dispatch(fetchSuccess(data))
        
        linkRef.current.value="";
        adRef.current.value="";
        aciklamaRef.current.value=""



    };
    const handleClickVazgec=()=>{
        //useRef Hook'u kullanılarak Vazgeç butonunun input taglerini temizlenmesi 
        linkRef.current.value="";
        adRef.current.value="";
        aciklamaRef.current.value=""

    };


  
  return (
    <Container>
       <Kutu>
        <Hello>
            <span style={{marginTop:"10px",marginBottom:"5px"}}>Sosyal Medya Linki</span>
            <Input ref={linkRef} type="text" id="link" name="link" style={{height:"20px",width:"200px",borderRadius:"10px"}} onChange={handleChangeL}/>
        </Hello>
        <Hello>
            <span style={{marginTop:"10px",marginBottom:"5px"}}>Sosyal Medya Adı</span>
            <Input ref={adRef} type="text" name="ad" style={{height:"20px",width:"200px",borderRadius:"10px"}} onChange={handleChangeA}/>
        </Hello>
        <Hello>
            <span style={{marginTop:"10px",marginBottom:"5px"}}>Açıklama</span>
            <Input ref={aciklamaRef} type="text" name="aciklama" style={{height:"20px",width:"200px",borderRadius:"10px"}} onChange={handleChangeAc}/>
        </Hello>
        <Buttonv onClick={handleClickVazgec}>Vazgeç</Buttonv>
        <Button onClick={handleClickKaydet}>Kaydet</Button>


       </Kutu>

    </Container>
  )
}

export default SocialMediaEkle