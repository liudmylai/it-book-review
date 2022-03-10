package com.example.review.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
    @Autowired
    UserDetailsService userDetailsService;
	
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic() // use Basic Authentication
        .and().csrf().disable()
        .authorizeRequests()
                .antMatchers("/api/review").permitAll()
                .antMatchers("/api/review/*").hasRole("ADMIN")
                .antMatchers("/api/reviews").hasRole("ADMIN")
                .antMatchers("/api/reviews/*").permitAll()
                .antMatchers("/api/auth/**").permitAll()
                .antMatchers("/**").permitAll()
        	.and().cors() // by default uses a Bean by the name of corsConfigurationSource
    ;
    }
    
    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }


}
