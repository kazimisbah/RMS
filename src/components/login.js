import { render } from "@testing-library/react";
import React, {Component}from "react";
import {redirectTo, Router,Redirect} from "@reach/router";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";





function login(){

   const signin =()=>{
        let email = document.getElementById('defaultLoginFormEmail').value;
        let password = document.getElementById('defaultLoginFormPassword').value
        console.log('fdsfdsfdsf', email)


        if(email == "kazi@intellicar.in" && password == "admin"){
            console.log("trueeee")
            window.location.href = '/students';
        }else if(window.Students){
        window.Students.map(i=>{
            if(i.id == email  && i.password == password){
                window.location.href = '/timetable';
            }
        }) }else{
            alert("Invalid Credentials")
        }

      };
    return(
        <div className="login-container">
        <div className="row justify-content-md-center">
         <div className="col-md-3 col-md-auto">
          <div className="text-center border border-light p-5 m-10" >

              <p className="h4 mb-4">Sign in</p>

              <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" required/>

              <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" required/>

              <div className="d-flex justify-content-around">
                  <div>
                      <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                          <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                      </div>
                  </div>
                  <div>
                      <a href="">Forgot password?</a>
                  </div>
              </div>

              <button className="btn btn-info btn-block my-4" type="submit" onClick={signin}>Sign in</button>

              <p>Not a member?
                 {/* <Link from="/" to='/register' >Register</Link > */}
              </p>

          </div>
        </div>
      </div>
      </div>
    )
}

export default login