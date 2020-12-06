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
            users: [],
            columns: alphabet,
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
                    <TableHeader columns={this.state.columns}/>
                    <Body users={this.state.users}/>
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
}

const TableHeader = (props) => {
    const {columns} = props;

    return (
        <thead>
        <tr>
            {columns.map((element, index) =>
                <th key={index}>
                    {element}
                </th>
            )}
        </tr>
        </thead>
    );
}

const Body = (props) => {
    const {users} = props;

    return (
        <tbody>
        <tr>
            {alphabet.map((lit, index) => (
                <th key={index}>
                    <ul key={lit}>
                        {users.map(user => {
                            if (user.lastName.slice(0, 1) === lit) {
                                return (<li key={user.id} id={user.id}>
                                    <div className='user'>
                                        {user.lastName} {user.firstName}
                                        <input type="checkbox"
                                               id={user.id} />
                                    </div>
                                </li>);
                            }
                        })}
                    </ul>
                </th>)
            )}
        </tr>
        </tbody>
    );
}

export default Employess;
