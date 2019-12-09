<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //index
    public function index_show(){
        return User::all();
    }
    //register
    public function register(Request $request){
        $validData = $request->validate([
           'name'=>'required',
           'email'=>'required',
           'password'=>'required',
        ]);
        $validData['password'] = Hash::make($validData['password']);
        $user = User::create($validData);
        $accessToken = $user->createToken('authToken')->accessToken;
        return response()->json(['user'=>$user,'access_token'=>$accessToken]);
    }
    //register
    public function login(Request $request){
        $loginData = $request->validate([
            'email'=>'required',
            'password'=>'required',
        ]);
        if (!auth()->attempt($loginData)){
            return response()->json(['message'=>'Invalid Credentials']);
        }
        $accessToken =auth()->user()->createToken('authToken')->accessToken;
        return response()->json(['user'=>auth()->user(),'access_token'=>$accessToken]);
    }
}
