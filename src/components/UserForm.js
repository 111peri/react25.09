import React, { Component } from "react";
import axios from "axios";

export class UserForm extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                this.state
            );
            console.log("POST request response:", response.data);
        } catch (error) {
            console.error("Error sending POST request:", error);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                </div>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Телефон:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={this.handleChange}
                        value={this.state.phone}
                    />
                </div>
                <div>
                    <label htmlFor="website">Веб-сайт:</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        onChange={this.handleChange}
                        value={this.state.website}
                    />
                </div>
                <div>
                    <button type="submit">Отправить</button>
                </div>
            </form>
        );
    }
}

