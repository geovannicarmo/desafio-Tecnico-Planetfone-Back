import axios from 'axios'
import compare from '../../utils/compare.js'

export default async function dataUserService(){
    try{
        const arrayUsers = []

        for(let i=1; i<6; i++){
            let request = await axios.get(`https://jsonplaceholder.typicode.com/users/${i}`)
            request = request.data
            arrayUsers.push({
                id: request.id,
                name:request.name,
                username: request.username,
                email: request.email
            })
        }

        arrayUsers.sort(compare);

        return arrayUsers
    }
    catch(err){
        throw 'error'
    }
}