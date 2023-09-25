
import React from "react";
import { useUser } from "./UserContext";

export function UserList() {
    const { users } = useUser();

    return (
        <div>
            <h2>Информация о пользователях:</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        Имя: {user.firstName}, Фамилия: {user.lastName}, Возраст: {user.age},{" "}
                        Семейное положение: {user.maritalStatus}
                    </li>
                ))}
            </ul>
        </div>
    );
}


