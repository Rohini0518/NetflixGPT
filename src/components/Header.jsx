import Login from "./Login";

const Header = () => {
  return (
    <div>
    <div className="relative h-screen w-full">
  <img
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg"
    alt="bgImg"
  />

  <img
    className="absolute top-4 left-4 w-32 z-10"
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    alt="Netflix"
  />

  <div className="absolute inset-0 flex justify-center items-center z-10">
    <Login />
  </div>


</div>
    </div>
  )
};
export default Header;
