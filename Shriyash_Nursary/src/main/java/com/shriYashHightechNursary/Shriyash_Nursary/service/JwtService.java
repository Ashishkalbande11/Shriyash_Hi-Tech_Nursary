package com.shriYashHightechNursary.Shriyash_Nursary.service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.cglib.core.internal.Function;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;

@Service
public class JwtService {

    public String generateToken(UserDetails userDetails)
    {
        return Jwts.builder().setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 *24))//1 days validation
                .signWith(getSigninKey(), SignatureAlgorithm.HS256)
                .compact();

    }

    public String generateRefreshToken(HashMap<String, Object> extraClaim, UserDetails userDetails)
    {
        return Jwts.builder().setClaims(extraClaim).setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 604800000))//7 days
                .signWith(getSigninKey(), SignatureAlgorithm.HS256)
                .compact();

    }

    public String extractUserName(String token)
    {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolvers)
    {
        final Claims claims = extractAllClaims(token);
        return claimsResolvers.apply(claims);
    }
    private Key getSigninKey()
    {
        byte[] key = Decoders.BASE64.decode("413F4428472B4B6250655368566D5970337336763979244226452948404D6351");
        return Keys.hmacShaKeyFor(key);
//        return Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    private Claims extractAllClaims(String token)
    {
        return Jwts.parserBuilder().setSigningKey(getSigninKey()).build().parseClaimsJws(token).getBody();
    }

//    public boolean isTokenValid(String token, UserDetails userDetails)
//    {
//        final String username = extractUserName(token);
//        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
//    }
//
//    private boolean isTokenExpired(String token)
//    {
//        return extractClaim(token,Claims::getExpiration).before(new Date());
//    }
//

    private Boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims :: getExpiration);
    }
    public boolean isTokenValid(String token, UserDetails userDetails)
    {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}
