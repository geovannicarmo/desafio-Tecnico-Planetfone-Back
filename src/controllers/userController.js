import dataUserService from "../services/userService.js";

export default async function dataUserController(req, res){
    try{
        const data = await dataUserService()
        console.log(data)
        res.status(200).send(data)
    }
    catch{
        res.status(500).send('server internal error')
    }
}