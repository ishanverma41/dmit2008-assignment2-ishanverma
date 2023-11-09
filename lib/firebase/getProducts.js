import { db } from './configFile'
export async function getProducts() {
    const dbRef = db.ref('/products')
    const dataSnapshot = await dbRef.once('value')
    // console.log(dataSnapshot.val())
    return dataSnapshot.val()
}