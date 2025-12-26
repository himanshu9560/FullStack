import { Link, useSearchParams } from "react-router-dom"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from '@clerk/clerk-react';
import { Heart, PenBox, BriefcaseBusiness } from 'lucide-react'
import { useEffect, useState } from "react"; 
const Header = () => {
  const [showSignIn, setshowSignIn] = useState(false)

  const [search, setSearch] = useSearchParams();
  const { user } = useUser();
  useEffect(() =>{
    if(search.get("sign-in")){
      setshowSignIn(true);
    }
  }, [search]);


  const handleOverlayClick=(e)=>{
    if(e.target === e.currentTarget){
      setshowSignIn(false);
      setSearch({}); 
    }
  }

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" className="h-20" />
        </Link>
         <div className="flex gap-8">
         <SignedOut>
        <Button variant="outline" onClick={()=> setshowSignIn(true)}>LogIn</Button>
      </SignedOut>
      <SignedIn>
       {user?.unsafeMetadata?.role === "recruiter" && (
        <Link to="/post-job">
        <Button variant='destructive' className="rounded-full">
          <PenBox size={20} className="mr-2" />
          Post a Job</Button> 
        </Link>
      )}
        <UserButton appearance={{
          elements:{
            avatarBox:"w-10 h-10",
          },
        }}>
          <UserButton.MenuItem>
            <UserButton.Action
            label="My Jobs"
            labelIcon={<BriefcaseBusiness size={15} />}
            href="/my-job"
            />
            <UserButton.Action
            label="Saved Jobs"
            labelIcon={<Heart size={15} />}
            href="/saved-job"
            />
          </UserButton.MenuItem>
        </UserButton>
      </SignedIn>
        </div>
      </nav>
      {showSignIn && <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm" 
      onClick={handleOverlayClick}>
        <SignIn signUpForceRedirectUrl="/onboarding" fallbackRedirectUrl="/onboarding"  />
      </div> }
    </>
  )
}

export default Header
