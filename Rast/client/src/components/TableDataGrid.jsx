import { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { grey } from '@mui/material/colors';
import styled from "styled-components"
import Navbar from './Navbar';
import SocialMediaEkle from './SocialMediaEkle';
import {mobile} from "../responsive"
import { useDispatch, useSelector } from 'react-redux'
import { fetchSuccess } from '../redux/socialmediaSlice';

import { getallData } from '../service/api';
const Container=styled.div`
    display:flex;
    margin-left:30px;
    width:60%


`;

const TableDataGrid = () => {
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);
    //eklenen kayıdın bu componente aktarımında redux-toolkit aracının kullanılarak store kaydedilip currentSocialMedia adıyla burdan görüntülenmesinin sağlanması
    const {currentSocialMedia}=useSelector((state)=>state.socialmedia)


    const [data,setData]=useState([
        {   "id":"12",
            "link":"link",
            "ad":"adi",
            "aciklama":"aciklama"
        }
    ])

    useEffect(() => {
      const newData=[...data,currentSocialMedia]
      setData(newData)


    }, [currentSocialMedia])
    
    useEffect(() => {
      const fetchDatas=async()=>{
        //apideki datanın başlangıçta Get metoduyla çekilmesi 
        const res=await getallData()
        setData(res.data)
      };
      fetchDatas();


    }, [])
      
  
    const columns = useMemo(
      () => [

        { field: 'link', headerName: 'Sosyal Medya Linki', width: 300 },
        { field: 'ad', headerName: 'Sosyal Medya Adı', width: 300 },
        { field: 'aciklama', headerName: 'Açıklama', width: 300 },
       
      ]
    );

  
    return (
      <Container>
        <Box
          sx={{
            height: 400,
            width: '100%',
          }}
        >
          <Typography

          >
            <Navbar></Navbar>
          </Typography>
          <DataGrid
            columns={columns}
            rows={data}
            getRowId={(row) => row?.link}
            rowsPerPageOptions={[5, 10, 20]}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            sx={{
              [`& .${gridClasses.row}`]: {
                bgcolor: (theme) =>
                  theme.palette.mode === 'light' ? grey[200] : grey[900],
              },
            }}

          />
        </Box>
        <SocialMediaEkle></SocialMediaEkle>
      </Container>
    );

}

export default TableDataGrid