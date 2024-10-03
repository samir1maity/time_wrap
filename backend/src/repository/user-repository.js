import User from '../models/user.js'

export async function userSignUp(data) {
    const { username, password, email, firstname, lastname } = data
    try {
        // checking data validation, later will do zod implementation 
        if (username === "" || password === "" || email === "") {
            return { msg: 'invalid credentials' }
        } else {
            const user = await User.create({
                email: email,
                username: username,
                password: password
            })

            if (!user) {
                return { msg: 'something went wrong, try again' }
            } else {
                return { msg: 'successfully registered' }
            }
        }
    } catch (error) {
        console.log('error from user repository layer')
        throw (error)
    }
}

// export async function signin(data) {
//     const { username, password } = data
//     try {
//         // checking data validation, later will do zod implementation 
//         if (username === "" || password === "") {
//             return { msg: 'invalid credentials' }
//         } else {
//             const user = await new User.findOne({
//                 username, password
//             })

//             if (!user) {
//                 return { msg: 'something went wrong, try again' }
//             } else {
//                 return { msg: 'successfully registered' }
//             }
//         }
//     } catch (error) {
//         console.log('error from user repository layer')
//         throw (error)
//     }

// }