package obs;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/helloworld")
public class HelloWorld {
	@RolesAllowed("ADMIN")
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String sayPlainTextHello() {
		return "Hello from Devonshire Online Banking System.";
	}
	@RolesAllowed("ADMIN")
	@GET
	@Produces(MediaType.TEXT_XML)
	public String sayXMLHello() {
		return "<?xml version=\"1.0\"?>" + "<hello> Hello from Devonshire Online Banking System."
				+ "</hello>";
	}
	@RolesAllowed("ADMIN")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String sayHtmlHello() {
		return "<html> " + "<title>" + "Hello from Devonshire Online Banking System."
				+ "</title>" + "<body><h1>" + "Hello from Devonshire Online Banking System."
				+ "</body></h1>" + "</html> ";
	}
}
