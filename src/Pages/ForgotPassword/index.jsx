import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';

const ForgotPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);

  const context = useContext(MyContext);  
  const history = useNavigate();

  const forgotPassword = () => {
    alert("Password reset link has been sent!");
  };

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-md !w-[400px] !m-auto !rounded-md bg-white !p-5 !px-10">
          <h3 className="text-center text-[18px] text-black">Forgot Password</h3>
          <form className="!w-full !mt-5 !mb-5 relative">

            {/* New Password */}
            <div className="form-group !w-full !mb-5 relative">
              <TextField
                type={isPasswordShow ? "text" : "password"}
                id="new_password"
                label="New Password *"
                variant="outlined"
                className="!w-full"
                name="newPassword"
              />
              <Button
                type="button"
                className="!absolute !top-[10px] !right-[10px] !z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow ? (
                  <IoMdEyeOff className="!text-[20px] !opacity-75" />
                ) : (
                  <IoMdEye className="!text-[20px] !opacity-75" />
                )}
              </Button>
            </div>

            {/* Confirm Password */}
            <div className="form-group !w-full !mb-5 relative">
              <TextField
                type={isConfirmPasswordShow ? "text" : "password"}
                id="confirm_password"
                label="Confirm Password *"
                variant="outlined"
                className="!w-full"
                name="confirmPassword"
              />
              <Button
                type="button"
                className="!absolute !top-[10px] !right-[10px] !z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => setIsConfirmPasswordShow(!isConfirmPasswordShow)}
              >
                {isConfirmPasswordShow ? (
                  <IoMdEyeOff className="!text-[20px] !opacity-75" />
                ) : (
                  <IoMdEye className="!text-[20px] !opacity-75" />
                )}
              </Button>
            </div>

            {/* Forgot Password Click */}
            <button
  type="button"
  className="link cursor-pointer !text-[14px] !font-[600] bg-transparent border-none p-0"
  onClick={forgotPassword}
>
  Forget Password
</button>


            {/* Login Button */}
            <div className="flex items-center !w-full !mt-3 !mb-3">
              <Button className="btn-org btn-lg !w-full">Change Password</Button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

