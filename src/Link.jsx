const Link =  ({urlLink, socialPf}) => {
    return (
        <div className="bg-[#333333] h-[2.3rem] mt-4 w-full flex justify-center items-center text-white rounded-[.3rem]">
            <a href={urlLink}>{socialPf}</a>
        </div>
    )
}

export default Link