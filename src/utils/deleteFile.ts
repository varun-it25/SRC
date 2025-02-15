import { v2 as cloudinary} from 'cloudinary'

// export async function deleteFile(public_id: string){
//     await cloudinary.uploader.destroy(public_id)
// }

export async function deleteFile(public_id: string){
    console.log(`Delete File Function calls, Public_id = ${public_id}`)
}