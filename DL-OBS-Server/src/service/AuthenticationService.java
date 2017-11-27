package service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.User;
import beans.Users;

@Path("/users")
public class AuthenticationService {
	@RolesAllowed("ADMIN")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Users getAllUsers() 
	{
		Users list = new Users();
		list.setUserList(new ArrayList<User>());
		
		list.getUserList().add(new User(1, "Carson Chen"));
		list.getUserList().add(new User(2, "Shenlin Qin"));
		list.getUserList().add(new User(3, "Sen Wang"));
		
		return list;
	}
	
	@RolesAllowed("ADMIN")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response addUser( User u ) throws URISyntaxException 
	{
		if(u == null){
			return Response.status(400).entity("Please add user details !!").build();
		}
		
		if(u.getName() == null) {
			return Response.status(400).entity("Please provide the user name !!").build();
		}
		
		return Response.created(new URI("/rest/users/"+u.getId())).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateUserById(@PathParam("id") Integer id) 
	{
		if(id  < 0){
			return Response.noContent().build();
		}
		User user = new User(id, "Sharlene Bin");
		
		GenericEntity<User> entity = new GenericEntity<User>(user, User.class);
		return Response.ok().entity(entity).build();
	}
	
	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateUserById(@PathParam("id") Integer id, User u) 
	{
		User updatedUser = new User();
		
		if(u.getName() == null) {
			return Response.status(400).entity("Please provide the user name !!").build();
		}
		
		updatedUser.setId(id);
		updatedUser.setName(u.getName());
		
		return Response.ok().entity(updatedUser).build();
	}
	
	@DELETE
	@Path("/{id}")
	public Response deleteEmployeeById(@PathParam("id") Integer id) 
	{		
		return Response.status(202).entity("User deleted successfully !!").build();
	}
}
