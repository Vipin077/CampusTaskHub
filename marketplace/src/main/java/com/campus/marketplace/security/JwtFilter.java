package com.campus.marketplace.security;

import com.campus.marketplace.service.CustomUserDetailsService;
import com.campus.marketplace.utils.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {



    private final JwtUtil jwtUtil;

    private final CustomUserDetailsService userDetailsService;


    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {


        System.out.println("1. FILTER START");

        // Read Authorization Header
        final String authHeader = request.getHeader("Authorization");

        String jwt = null;
        String email = null;

        // Check if header exists and starts with Bearer
        if (authHeader != null && authHeader.startsWith("Bearer ")) {

            jwt = authHeader.substring(7);

            try {
                email = jwtUtil.extractEmail(jwt);
            } catch (Exception e) {
                System.out.println("JWT Error: " + e.getMessage());
            }
            System.out.println("2. EMAIL = " + email);
        }

        // Authenticate user if email exists
        if (email != null &&
                SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails =
                    userDetailsService.loadUserByUsername(email);

            // Validate Token
            if (jwtUtil.validateToken(jwt, userDetails.getUsername())) {
                System.out.println("3. TOKEN VALID");
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );

                authToken.setDetails(
                        new WebAuthenticationDetailsSource()
                                .buildDetails(request)
                );

                SecurityContextHolder.getContext()
                        .setAuthentication(authToken);
                System.out.println("4. AUTH SET");
            }
        }

        // Continue request
        filterChain.doFilter(request, response);
    }
}