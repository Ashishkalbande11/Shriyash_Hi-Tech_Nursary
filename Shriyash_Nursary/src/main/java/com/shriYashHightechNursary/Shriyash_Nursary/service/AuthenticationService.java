package com.shriYashHightechNursary.Shriyash_Nursary.service;

import com.shriYashHightechNursary.Shriyash_Nursary.dao.UserRepository;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Request.AuthenticationRequest;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Request.RefreshTokenRequest;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Request.SignUpRequest;
import com.shriYashHightechNursary.Shriyash_Nursary.dto.Response.JwtAuthenticationResponse;
import com.shriYashHightechNursary.Shriyash_Nursary.enums.UserRole;
import com.shriYashHightechNursary.Shriyash_Nursary.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    public User signUp(SignUpRequest signUpRequest)
    {
        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setName(signUpRequest.getName());
        user.setRole(UserRole.USER);
        user.setAddress(signUpRequest.getAddress());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        user.setPhoneNumber(signUpRequest.getPhoneNumber());
//        System.out.println(user.getPassword());
        userRepository.save(user);
        return user;



    }



    public JwtAuthenticationResponse signin(AuthenticationRequest request)
    {
        System.out.println(request.getEmail()+" "+request.getPassword());
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));


        var user = userRepository.findByEmail(request.getEmail()).orElseThrow(()->new IllegalArgumentException("Invalid Email Or Password."));
        var jwt = jwtService.generateToken((UserDetails) user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(), (UserDetails) user);
        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);
        return jwtAuthenticationResponse;

    }


    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest request){


        String userEmail = jwtService.extractUserName(request.getToken());
        User user = userRepository.findByEmail(userEmail).orElseThrow();
        if( jwtService.isTokenValid(request.getToken(), (UserDetails) user))
        {   System.out.println(request.getToken());
            var jwt = jwtService.generateToken((UserDetails) user);

            JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

            jwtAuthenticationResponse.setToken(jwt);
            jwtAuthenticationResponse.setRefreshToken(request.getToken());
            return jwtAuthenticationResponse;

        }
        return null;


    }


}
