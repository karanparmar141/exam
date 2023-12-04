import React, { useEffect, useState } from 'react'

const Login = () => {
    let [loemail, setLoemail] = useState('')
    let [siuser, setSiuser] = useState('')
    let [Lopass, setLopass] = useState('')
    let [siemail, setSiEmail] = useState('')
    let [sipass, setSipass] = useState('')
    let [arr, setArr] = useState([])
    let [login, setlogin] = useState(false)

    const HandelSign = (e) => {
        e.preventDefault();
        let user = {
            username: siuser,
            useremail: siemail,
            userpassword: sipass
        }
        setArr([user, ...arr])
        setlogin(true)
    }
    useEffect(() => {
        localStorage.setItem("userdata", JSON.stringify(arr))
        localStorage.setItem("user", true)
    }, [arr])
    const HandelLogin = (e) => {
        e.preventDefault()
        let email=0
        let pass=0
        arr.map((us)=>{
            if(us.useremail==loemail){
                email=1
                pass=1
                localStorage.setItem("user", true)
            }
            else{
                alert('please sginup first')
            }
            if(email==1){
                if(pass==1){
                    alert('login sucefully')
                }
                else{
                    alert('pleace check password')
                }
            }
            else{
                alert('please sign-up first')
            }
        })
        
    }
    return (
        <>
            {
                login ?
                    <>
                        <form onSubmit={HandelLogin}>
                            <input type="email" onChange={(e) => setLoemail(e.target.value)} placeholder='enter the email' />
                            <input type="password" onChange={(e) => setLopass(e.target.value)} placeholder='enter the password' />
                            <input type="submit" value="login" />
                        </form>
                    </>
                    :
                    <>
                        <form onSubmit={HandelSign}>
                            <input type="text" onChange={(e) => setSiuser(e.target.value)} placeholder='enter the username' />
                            <input type="email" onChange={(e) => setSiEmail(e.target.value)} placeholder='enter the email' />
                            <input type="password" onChange={(e) => setSipass(e.target.value)} placeholder='enter the password' />
                            <input type="submit" value="sign-up" />
                        </form>
                    </>
            }
        </>
    )
}

export default Login