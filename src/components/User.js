import {useEffect,useState} from "react";
import {useParams , Link} from "react-router-dom";
import axios from "axios";

function User (){
    const [user, setUser] = useEffect({})
    const { id } = useParams();
    const [loading, setLoading] =  useState(true)

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser (res.data))
            .finally(() => setLoading(false));

    } , [id])
    return (
        <div>
            {loading && <div>loading...</div>}
            {!loading && <pre>{JSON.stringify(user)}</pre>}
            <Link to = {`/user/${parseInt (id) + 1}`}>Next User ({parseInt(id) +1})</Link>

        </div>
    )
}

export default User