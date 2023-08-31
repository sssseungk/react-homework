import { useId } from "react";
import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn(){

  const navigate = useNavigate();





  return (
    <div>
      <HeaderBar/>
      <div className="flex justify-center items-center my-20">
        <div className="border-8 rounded-lg w-3/5 relative">
          <button type="button" onClick={() => { navigate('/')}} className="hover:bg-slate-600 hover:text-white rounded-xl w-[150px] h-[50px] top-6 bg-slate-300 text-xl  absolute right-8">
            Go Home
          </button>

          <form encType="multipart/form-data" className="p-10">
            <div className="flex flex-col mb-20 mt-12">
              <label htmlFor="id" className="font-semibold">
                ID
              </label>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="아이디를 입력해 주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="pw" className="font-semibold">
                PW
              </label>
              <input
                type="text"
                name="pw"
                id="pw"
                placeholder="비밀번호를 입력해 주세요."
                className="border text-lg border-slate-400 rounded-md w-[400px] h-[50px] pl-2"
              />
            </div>

            

            <div className="flex flex-row-reverse">
              <button type="submit" className="bg-slate-300 hover:bg-slate-600 hover:text-white text-xl w-[90px] h-[50px] text-center rounded-xl mr-5 order-2">Login</button>
              <button type="reset" onClick={() => {navigate('/')}} className="bg-slate-300 hover:bg-slate-600 hover:text-white text-xl w-[90px] h-[50px] text-center rounded-xl order-1" >Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <FooterBar/>
    </div>

  )
}