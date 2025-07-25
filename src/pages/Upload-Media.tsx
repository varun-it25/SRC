import { useState } from "react"
import { FileUp, File, CloudUpload, Loader2, Upload, UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useDropzone } from "react-dropzone"
import { toast } from "react-hot-toast"
import Container from "../components/Right"
import { Input } from "../components/ui/input"
import axios from "axios"

const MAX_FILE_SIZE = 50 * 1024 * 1024

const UploadMedia = () => {
    const [file, setFile] = useState<File | null>(null)
    const [isUploading, setUploading] = useState(false)
    const [isUploaded, setUploaded] = useState(false)
    const [progress, setProgress] = useState(0)

    async function UploadFile() {
        const formData = new FormData()
        formData.append("file", file!)
        formData.append("upload_preset", "src_gallery")
        formData.append("cloud_name", "dimqol16x")

        try {
            const cloudinaryRes = await axios.post(
                `https://api.cloudinary.com/v1_1/dimqol16x/image/upload`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    onUploadProgress: (progressEvent) => {
                        const percent = Math.round(
                            (progressEvent.loaded * 100) / (progressEvent.total || 1)
                        )
                        setProgress(percent)
                    },
                }
            )

            await axios.post(`https://src-server.onrender.com/gallery/upload`, {
                file_name: cloudinaryRes.data.display_name,
                file_url: cloudinaryRes.data.secure_url,
                file_size: cloudinaryRes.data.bytes,
                public_id: cloudinaryRes.data.public_id,
            })

            setProgress(100)
            setUploaded(true)
            setUploading(false)
            toast.success("File uploaded successfully!")
            console.log(cloudinaryRes.data)
        } catch (err) {
            setUploading(false)
            toast.error("Error uploading file. Please try again.")
            console.error(err)
        }
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: File[]) => {
            if (acceptedFiles[0]) setFile(acceptedFiles[0])
        },
        maxSize: MAX_FILE_SIZE,
        onDropRejected: (fileRejections) => {
            const errorMessage =
                fileRejections[0]?.errors[0]?.message ||
                "File is too large. Maximum size is 50MB."
            toast.error(errorMessage)
        },
        accept: {
            'image/*': []
        },
    })

    const handleUpload = async () => {
        if (!file) return
        setUploading(true)

        if (!file.type.includes("image")) {
            setUploading(false)
            toast.error("File must be an Image.")
            return
        }

        UploadFile()
    }

    const handleUploadAnother = () => {
        setFile(null)
        setUploading(false)
        setUploaded(false)
        setProgress(0)
    }

    return (
        <Container>
            <div className="w-full h-full flex flex-col p-6">
                <div className="w-full mb-7 mt-1">
                    <p className="font-bold text-2xl">Upload Media</p>
                </div>
                <div className="w-full flex-1 flex">
                    {!file && !isUploading && !isUploaded && (
                        <div
                            {...getRootProps()}
                            className="w-full h-full flex justify-center items-center cursor-pointer"
                        >
                            <div className="w-full border-4 hover:bg-zinc-100 cursor-pointer border-dashed rounded-xl flex-col h-full text-center px-8 flex justify-center items-center">
                                <FileUp size={80} className="mb-5 text-zinc-500" />
                                <p className="text-[1.35rem] sm:text-2xl mb-2 sm:mb-3 font-semibold text-zinc-600">
                                    Drag and drop a file here, or click to select
                                </p>
                                <p className="text-zinc-500">(Maximum file size: 50MB)</p>
                            </div>
                            <Input
                                {...getInputProps()}
                                type="file"
                                id="upload-file"
                                className="hidden"
                            />
                        </div>
                    )}
                    {file && !isUploading && !isUploaded && (
                        <div className="w-full bg-zinc-100 rounded-xl h-full flex-col text-center px-8 flex justify-center items-center text-zinc-800">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center space-x-2">
                                    <File size={40} />
                                    <p className="text-2xl px-4 font-semibold">{file.name}</p>
                                </div>
                                <Button
                                    onClick={handleUpload}
                                    disabled={isUploading || isUploaded}
                                    className="px-6 bg-blue-600 hover:bg-blue-500"
                                >
                                    {isUploading ? (
                                        <Loader2 className="mr-1 animate-spin" />
                                    ) : (
                                        <Upload className="mr-1" />
                                    )}{" "}
                                    Upload
                                </Button>
                            </div>
                        </div>
                    )}
                    {isUploading && (
                        <div className="w-full bg-zinc-100 rounded-xl h-full flex-col text-center px-8 flex justify-center items-center text-zinc-800">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center space-x-2">
                                    <CloudUpload size={40} />
                                    <p className="text-2xl px-4 font-semibold">
                                        {file?.name || "Uploading..."}
                                    </p>
                                </div>
                                <Button disabled className="px-6 bg-blue-600 hover:bg-blue-500">
                                    <Loader2 className="mr-1 animate-spin" /> Uploading
                                </Button>
                            </div>
                            <div className="mt-4 w-full max-w-xs mx-auto">
                                <Progress value={progress} max={100} className="h-2" />
                                <p className="text-sm text-zinc-600 text-center mt-2">
                                    Uploading... {progress}%
                                </p>
                            </div>
                        </div>
                    )}
                    {isUploaded && !isUploading && (
                        <div className="w-full bg-green-100 rounded-xl h-full flex-col text-center px-8 flex justify-center items-center text-green-800">
                            <div className="flex items-center space-x-2">
                                <File size={40} />
                                <p className="text-2xl px-4 font-semibold">
                                    {file?.name || "Upload complete!"}
                                </p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-green-600">
                                    File uploaded successfully!
                                </p>
                                <Button
                                    onClick={handleUploadAnother}
                                    className="mt-4 px-6 bg-white text-black"
                                >
                                    <UploadCloud /> Upload another file
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}

export default UploadMedia
