'use client'
import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const param = useParams<{id : string}>();
    const [dataById , setDataById] = useState<IUser | null>(null);

    const getDataById = async () => {
        const response = await axios.get(`https://663489e59bb0df2359a1d089.mockapi.io/api/v1/users/${param.id}`)
        setDataById(response.data)
    }

    useEffect(() =>{
        getDataById()
    },[])

  return (
    <>
    <div style={{margin: '10px'}}>
        <h2>Detail</h2>
        <label>First name : </label> {dataById?.firstName}
        <label>last name : </label> {dataById?.lastName}
        <label>phonenumber : </label> {dataById?.phoneNumber}
        <label>email : </label> {dataById?.email}
    </div>
    </>
  )
}