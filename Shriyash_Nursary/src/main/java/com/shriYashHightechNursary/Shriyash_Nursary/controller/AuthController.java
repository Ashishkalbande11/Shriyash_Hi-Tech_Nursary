package com.shriYashHightechNursary.Shriyash_Nursary.controller;

import com.shriYashHightechNursary.Shriyash_Nursary.dao.UserRepository;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Request.AuthenticationRequest;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Request.RefreshTokenRequest;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Request.SignUpRequest;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Response.JwtAuthenticationResponse;
import com.shriYashHightechNursary.Shriyash_Nursary.model.User;
import com.shriYashHightechNursary.Shriyash_Nursary.service.AuthenticationService;
import com.shriYashHightechNursary.Shriyash_Nursary.service.JwtService;
import com.shriYashHightechNursary.Shriyash_Nursary.service.UserDetailsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/shriyash-nursary")
@RequiredArgsConstructor

public class AuthController {

    private final AuthenticationService authenticationService;
    private  final UserDetailsServiceImpl userService;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PostMapping("/register")
    public ResponseEntity<User> signup(@RequestBody SignUpRequest request){
        return ResponseEntity.ok(authenticationService.signUp(request));
    }
    @CrossOrigin(origins = "http://127.0.0.1:5173")
    @PostMapping("/login")
    public ResponseEntity<JwtAuthenticationResponse> login(@RequestBody AuthenticationRequest request){

        return ResponseEntity.ok(authenticationService.signin(request));


    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest request){
        System.out.println(request.getToken());
        return ResponseEntity.ok(authenticationService.refreshToken(request));
        //return null;

    }
}
