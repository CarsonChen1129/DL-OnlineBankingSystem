package obs;

import org.glassfish.jersey.logging.LoggingFeature;
import org.glassfish.jersey.server.ResourceConfig;

import provider.AuthenticationFilter;
import provider.GsonMessageBodyHandler;

public class DLApplication extends ResourceConfig {
	public DLApplication() {
		packages("obs");
		register(LoggingFeature.class);
		register(GsonMessageBodyHandler.class);
		register(AuthenticationFilter.class);
	}
}
