import { fetch } from "tabris"

export async function loginRequest(username: string, password: string){
    
    const res = await fetch('https://some-test-thing.herokuapp.com/signin', {body: JSON.stringify({"username": username, "password": password}), 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: 'POST',
    cache: 'default'})

    res.json().then(console.log, console.log)
}

export async function amIloggedIn(){
    
   const res = await fetch('https://some-test-thing.herokuapp.com/welcome', {method: 'GET', mode: 'cors', cache: 'no-cache'})
   
   console.log(res)
}

export async function ping(){
    
    const res = await fetch('https://some-test-thing.herokuapp.com/ping', {method: 'GET', mode: 'cors', cache: 'no-cache'})
    
    res.json().then(console.log, console.log)
 }