import React from "react";
import  { UserForm } from "../components/UserForm";
import { UserList } from "../components/UserList";
import { UserProvider } from '../components/UserContext'

export function MainPage() {
    return (
        <UserProvider>
            <div>
                <UserForm />
                <UserList />
            </div>
        </UserProvider>
    );
}


