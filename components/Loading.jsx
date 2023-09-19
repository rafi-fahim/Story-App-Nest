import Image from "next/image"
import loader from "@/public/loading.gif"

const Loading = () => {
  return (
    <>
        <div className="h-screen w-full flex justify-center items-center">
            <Image
                src={loader}
                alt="Loading Please Wait...."
                priority={true}
                className="p-6"
            />
        </div>
    </>
  )
}

export default Loading