import TopProfile from "./TopProfile"
import Link from "./Link"

const Container = () => {
    return (
        <div className="w-[25vw] h-auto bg-[#1f1f1f] rounded-3xl p-10">
            <TopProfile/>
            <Link urlLink="https://github.com/AbdulquddusMuhammad" socialPf="Github"/>
            <Link urlLink="https://www.frontendmentor.io/profile/AbdulquddusMuhammad" socialPf="FrontEnd Mentor"/>
            <Link urlLink="https://www.upwork.com/freelancers/~0111c8c4a035f5ae14?mp_source=share" socialPf="Upwork"/>
            <Link urlLink="https://www.instagram.com/abdulquddus_muhammad/" socialPf="Instagram"/>
            <Link urlLink="https://web.facebook.com/abdulquddus.muhammad.716" socialPf="Facebook"/>
        </div>
    )
}

export default Container