package com.shriYashHightechNursary.Shriyash_Nursary.dto.Response;


import lombok.Data;

@Data
public class JwtAuthenticationResponse {
    private String token;
    private String refreshToken;
}
