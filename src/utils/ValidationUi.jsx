const ValidationUi = (email, password) => {
      if(email==="" || password ==="" ) return "Enter Valid inputs"  
  const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordCheck =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/.test(
      password
    );
  if (!emailCheck) return "Invalid email Id";
  if (!passwordCheck) return "Invalid Password";
  return null;
};
export default ValidationUi;
