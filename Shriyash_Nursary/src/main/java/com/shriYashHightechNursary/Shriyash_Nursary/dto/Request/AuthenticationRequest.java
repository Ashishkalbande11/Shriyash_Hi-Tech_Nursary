package com.shriYashHightechNursary.Shriyash_Nursary.dto.Request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
public class AuthenticationRequest {

    String email;
    String password;
}
