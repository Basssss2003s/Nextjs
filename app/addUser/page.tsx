'use client'
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const router = useRouter()
    const [firstName , setFirstname] = useState<string>("")
    const [lastName , setLastname] = useState<string>("")
    const [phoneNumber , setPhoneNumber] = useState<string>("")
    const [email , setEmail] = useState<string>("")

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data : IUser = {
            firstName,
            lastName,
            phoneNumber,
            email
        }

        const response = await axios.post("https://663489e59bb0df2359a1d089.mockapi.io/api/v1/users", data)
        if (response.status === 201){
            alert("Add user success")
            router.push("/")
        }
        else{
            alert("Add user failed")
            
        }
    }
  return (
    <>
    <h1>Add user</h1>
    <form>
        <label>First name :</label>
        <input type='text' name='firstName' required onChange={(e) => {setFirstname(e.target.value)}} value={firstName} />
        <br />
        <label>Last name :</label>
        <input type='text' name='lastName' required onChange={(e) => {setLastname(e.target.value)}} value={lastName} />
        <br />
        <label>Phone :</label>
        <input type='phone' name='phoneNumber' required onChange={(e) => {setPhoneNumber(e.target.value)}} value={phoneNumber} />
        <br />
        <label>Email :</label>
        <input type='email' name='email' required onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <br />
        <button type='submit' onClick={handleAdd}>Add</button>
    </form>
    </>
  )
}