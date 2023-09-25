import React, { useState } from "react";
import { useUser } from "../components/UserContext";

export function UserForm() {
    const { addUser } = useUser(); // Используем хук, чтобы получить функцию addUser из контекста
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("Женат/Замужем");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { firstName, lastName, age, maritalStatus };
        addUser(user);
        setFirstName("");
        setLastName("");
        setAge("");
        setMaritalStatus("Женат/Замужем");
    };

    return (
        <div>
            <h1>Добавление пользователя</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Фамилия:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Возраст:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <label>Семейное положение:</label>
                    <select
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                        <option value="Женат/Замужем">Женат/Замужем</option>
                        <option value="Холост/Не замужем">Холост/Не замужем</option>
                        <option value="В разводе">В разводе</option>
                        <option value="Вдовец/Вдова">Вдовец/Вдова</option>
                    </select>
                </div>
                <button type="submit">Добавить пользователя</button>
            </form>
        </div>
    );
}


