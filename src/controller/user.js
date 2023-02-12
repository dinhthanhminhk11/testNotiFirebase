let createUser =  (req, res) => {
    try {
        const userjson = {
            userName: req.body.userName,
            password: req.body.password,
            name: req.body.name,
            tokenDevice: req.body.tokenDevice,
        }

        console.log(userjson)
        // const response = db.collection("users").doc(id).set(userjson)// tuwj taoj id
        const response =  db.collection("User").add(userjson)// tuwj taoj id

        res.send(response)

    } catch (error) {
        console.log(error)
    }
}

let getAllUser = (req, res) => {

}

// app.get('/read/all', async (req, res) => {
//     try {
//         const userRef = db.collection("users")
//         const response = await userRef.get()
//         let responseArr = []

//         response.forEach(doc => {
//             responseArr.push(doc.data())
//         })

//         res.send(responseArr)
//     } catch (error) {
//         res.send(error)
//     }
// })

let getUserById = (req, res) => {

}
// app.get('/read/:id', async (req, res) => {
//     try {
//         const userRef = db.collection("users").doc(req.params.id)
//         const response = await userRef.get()
//         res.send(response.data())
//     } catch (error) {
//         res.send(error)
//     }
// })

let updateUser = (req, res) => {

}
// app.put('/update', async (req, res) => {
//     try {
//         const id = req.body.id
//         const newFirtName = "hello world"
//         const userRef = await db.collection("users").doc(id).update({ firstName: newFirtName })
//         const response = await userRef.get();
//         res.send(response.data())
//     } catch (error) {
//         res.send(error)
//     }
// })

// app.delete('delete/:id', async (req, res) => {
//     try {
//         const response = await db.collection("user").doc(req.params.id).delete();
//         res.send(response)
//     } catch (error) {
//         res.send(error)
//     }
// })

module.exports = {
    createUser
};