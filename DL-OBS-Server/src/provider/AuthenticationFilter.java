package provider;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.StringTokenizer;

import javax.annotation.security.DenyAll;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.glassfish.jersey.internal.util.Base64;

public class AuthenticationFilter implements ContainerRequestFilter {
	@Context
    private ResourceInfo resourceInfo;
	
    private static final String AUTHORIZATION_PROPERTY = "Authorization";
    private static final String AUTHENTICATION_SCHEME = "Basic";
     
    @Override
    public void filter(ContainerRequestContext requestContext) {
    
    	Response ACCESS_DENIED = Response.status(Response.Status.UNAUTHORIZED)
				.entity("You cannot access this resource").build();
    	Response INVALID_AUTHENTICATION = Response.status(Response.Status.UNAUTHORIZED)
				.entity("Authenticate credentials not valid").build();
    	Response ACCESS_FORBIDDEN = Response.status(Response.Status.FORBIDDEN)
				.entity("Access blocked for all users !!").build();
        Method method = resourceInfo.getResourceMethod();
        //Access allowed for all
        if(!method.isAnnotationPresent(PermitAll.class)) {
            //Access denied for all
            if(method.isAnnotationPresent(DenyAll.class))
            {
                requestContext.abortWith(ACCESS_FORBIDDEN);
                return;
            }
             
            //Get request headers
            final MultivaluedMap<String, String> headers = requestContext.getHeaders();
             
            //Fetch authorization header
            final List<String> authorization = headers.get(AUTHORIZATION_PROPERTY);
             
            //If no authorization information present; block access
            if (authorization == null || authorization.isEmpty()) {
                requestContext.abortWith(ACCESS_DENIED);
                return;
            }
             
            //Get encoded username and password
            final String encodedUserPassword = authorization.get(0).replaceFirst(AUTHENTICATION_SCHEME + " ", "");
             
            //Decode username and password
            String usernameAndPassword = new String(Base64.decode(encodedUserPassword.getBytes()));;
            System.out.println("username and password: "+usernameAndPassword);
 
            //Split username and password tokens
            final StringTokenizer tokenizer = new StringTokenizer(usernameAndPassword, ":");
            System.out.println("string tokenizer:"+tokenizer);
            try {
            		final String username = tokenizer.nextToken();
                final String password = tokenizer.nextToken();
                 
                //Verifying Username and password
                System.out.println("username:" + username);
                System.out.println("password:" + password);
                 
                //Verify user access
                System.out.println(method.isAnnotationPresent(RolesAllowed.class));
                System.out.println(method.getAnnotation(RolesAllowed.class));
                if(method.isAnnotationPresent(RolesAllowed.class)) {
                    RolesAllowed rolesAnnotation = method.getAnnotation(RolesAllowed.class);
                    Set<String> rolesSet = new HashSet<String>(Arrays.asList(rolesAnnotation.value()));
                     
                    System.out.println("Is user valid?");
                    //Is user valid?
                    if(!isUserAllowed(username, password, rolesSet)) {
                        requestContext.abortWith(ACCESS_DENIED);
                        return;
                    }
                }
            } catch (NoSuchElementException e) {
            		System.out.println(e.getMessage());
            		requestContext.abortWith(INVALID_AUTHENTICATION);
                return;
            }
        }
    }
    private boolean isUserAllowed(final String username, final String password, final Set<String> rolesSet) {
        boolean isAllowed = false;
         
        //Step 1. Fetch password from database and match with password in argument
        //If both match then get the defined role for user from database and continue; else return isAllowed [false]
        //Access the database and do this part yourself
        //String userRole = userMgr.getUserRole(username);
        System.out.println("[isUserAllowed] username: "+username);
        System.out.println("[isUserAllowed] password: "+password);
        
        // This is just an example at this point
        if(username.equals("admin") && password.equals("password")){
        	String userRole = "ADMIN";
            
            //Step 2. Verify user role
            if(rolesSet.contains(userRole))
            {
                isAllowed = true;
            }
        }
        return isAllowed;
    }
}
