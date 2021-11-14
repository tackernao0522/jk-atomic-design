import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organism/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `たかき${val}`,
        image: "https://source.unsplash.com/JBrbzg5N7Go",
        email: "takaki55730317@gmail.com",
        phone: "090-1111-2222",
        company: {
            name: "テスト株式会社",
        },
        website: "https://google.com"
    }
})

export const Users = () => {
    const { state } = useLocation();
    // console.log(state);
    const isAdmin = state ? state.isAdmin : false;
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} isAdmin={isAdmin} />
                ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`
