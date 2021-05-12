import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    },[])
    return (
        <div className='not-found'>
            <h1>OOps ....</h1>
            <p> That Page Cannot be Found</p>
            <p> Go Back to the </p><Link href={"/"}><a>Home Page</a></Link>
        </div>
      );
}
 
export default NotFound;