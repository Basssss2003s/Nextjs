"use client";
import { IUser } from "@/types/IUser";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [data, setData] = useState<IUser[]>([]);

  const getData = async () => {
    const response = await axios.get<IUser[]>(
      "https://663489e59bb0df2359a1d089.mockapi.io/api/v1/users"
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>
                  <Link href={`/${item.id}`}>
                    Details
                  </Link>
                </td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </>
  );
}
