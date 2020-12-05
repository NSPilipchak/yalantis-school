import './Employess.css';
import React from 'react';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class Employess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, users} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            this.sortArray(users)
            return (
                <table>
                    <thead>
                    {this.getColName()}
                    </thead>
                    {this.getColUser(users)}
                </table>

            );
        }
    }

    sortArray(users) {
        users.sort(function (a, b) {
            var nameA = a.lastName.toLowerCase(), nameB = b.lastName.toLowerCase()
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    getColName() {
        return (<tr>
            {alphabet.map(lit => (
                <th key={lit}>
                    {lit}
                </th>
            ))}
        </tr>)
    }

    getColUser(users) {
        return (
            <tr>
                {alphabet.map(lit => (
                    <th>
                        <ul>
                            {users.map(user => {
                                if (user.lastName.slice(0, 1) === lit) {
                                    return <li key={user.id} id={user.id}>{user.lastName} {user.firstName}</li>;
                                }
                            })}
                        </ul>
                    </th>)
                )}
            </tr>
        )
    }
}

export default Employess;
