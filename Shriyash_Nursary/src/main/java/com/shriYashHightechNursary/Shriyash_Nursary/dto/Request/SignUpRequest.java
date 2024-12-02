package com.shriYashHightechNursary.Shriyash_Nursary.dto.Request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SignUpRequest {
    String name;
    String email;
    String password;
    String address;
    Long phoneNumber;

}