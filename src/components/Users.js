import {BrowserRouter as Router, Switch, Route,Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import User from "./User";
import axios, {Axios} from "axios";

function Users () {

    const [loading , setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data))
            .finally(() => setLoading(false));
    } , [])
    return (
        <div>
            {loading && <div>loading...</div>}
            <ul>

                {
                    users.map((user) => (
                        <li key={user.id}>
                            <Link to = {`/user/${user.id}`}> {user.name} </Link>
                        </li>
                        )
                    )
                }
            </ul>
            <Switch>
                <Route path="/:id" children={<User />} />
            </Switch>
        </div>
    )
}

export default Users