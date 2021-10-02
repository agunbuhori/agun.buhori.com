import { NextPage } from "next"
import { getDatabase, ref, get, child } from 'firebase/database'
import { useEffect, useRef, useState } from "react"
import { ProfileSnapshot } from "../interfaces/Profile"
import Head from 'next/head'
const dbRef = ref(getDatabase())

const ProfileFetching = () => (
    <div className="animate-pulse flex">
        <div className="flex-1">
            <div className="flex flex-col items-center mb-6">
                <div className="h-4 bg-yellow-200 opacity-25 w-2/6 rounded mb-2"></div>
                <div className="h-2 bg-gray-600 w-5/6 rounded mb-2"></div>
                <div className="h-2 bg-gray-600 w-full rounded mb-2"></div>
                <div className="h-2 bg-gray-600 w-5/6 rounded mb-2"></div>
                <div className="h-2 bg-gray-600 w-full rounded mb-2"></div>
                <div className="h-2 bg-gray-600 w-4/6 rounded mb-2"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                    <div className="h-2 bg-gray-600 w-3/6 rounded mb-2"></div>
                    <div className="h-4 bg-yellow-200 opacity-25 rounded w-full"></div>
                    <div className="h-2 bg-gray-600 w-3/6 rounded mt-3 mb-2"></div>
                    <div className="h-4 bg-yellow-200 opacity-25 rounded w-full"></div>
                    <div className="h-2 bg-gray-600 w-3/6 rounded mt-3 mb-2"></div>
                    <div className="h-4 bg-yellow-200 opacity-25 rounded w-full"></div>
                </div>
        
                <div className="">
                    <div className="h-2 bg-gray-600 w-3/6 rounded mb-2"></div>
                    <div className="h-4 bg-yellow-200 opacity-25 rounded w-full mb-4"></div>
                    <div className="h-4 bg-yellow-200 opacity-25 rounded w-full mb-4"></div>
                </div>
            </div>
        </div>
    </div>
)

const ProfileItem = ({label, value}: {label: string, value: string}) => (
    <div className="mb-2">
        <label className="font-semibold text-gray-200">{label}</label>
        <h2 className="font-bold text-yellow-200 text-lg leading-5">{value}</h2>
    </div>
)

const Profile: NextPage = () => {
    const [fetching, setFetching] = useState(true)
    const [profile, setProfile] = useState<ProfileSnapshot>()
    const mountedRef = useRef(true)

    useEffect(() => {
       get(child(dbRef, 'profile')).then(snapshot => {
           setProfile(snapshot.val())
           setFetching(false)
       })
    }, [])

    if (fetching) return <ProfileFetching/>
    
    return (
        <>
            <Head>
                <title>Profile - Agun Buhori</title>
            </Head>
            <div className="text-gray-200 text-center mb-6">
                <h2 className="bh-font text-xl text-yellow-200">Hello there!</h2>
                <p>{profile?.summary}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <ProfileItem label="Nickname" value="Agun Buhori"/>
                    <ProfileItem label="Birth" value="March 1998"/>
                    <ProfileItem label="Address" value="Bandung City, West Java, Indonesia"/>
                    
                    <div className="mb-2">
                        <label className="font-semibold text-gray-200">Skills</label>
                        <div className="mt-2 w-full">
                            {profile?.skills.map((skill, index) => (
                                <div key={index} className="py-1 w-auto mb-1 mr-1 overflow-hidden float-left px-4 border text-sm rounded-full text-white relative">
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-2">
                        <label className="text-gray-200 font-semibold">Education</label>
                        {profile?.educations
                        .map((item, index) => (
                            <div className="my-2" key={index}>
                                <div className="border-l-4 pl-4 border-yellow-200">
                                <h1 className="text-lg leading-5 text-yellow-200 font-bold">{item.name}</h1>
                                    <h2 className="text-gray-100 text-sm">{item.course}</h2>
                                    <h2 className="text-yellow-200 font-semibold text-xs">{item.year}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mb-2">
                        <label className="text-gray-200 font-semibold">Work Experience</label>
                        <div className="flex flex-col-reverse">

                        {profile?.works
                        .map((item, index) => (
                            <div data-aos="fade-up" className="my-2" key={index}>
                                <div className="border-l-4 pl-4 border-yellow-200">
                                    <h1 className="text-lg leading-5 text-yellow-200 font-bold">{item.name}</h1>
                                    <h2 className="text-gray-100 text-sm">{item.role}</h2>
                                    <h2 className="text-yellow-200 font-semibold text-xs">{item.year}</h2>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
