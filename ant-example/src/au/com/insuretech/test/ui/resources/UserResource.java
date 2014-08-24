package au.com.insuretech.test.ui.resources;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.LinkedList;
import java.util.List;


@Component
@Path("/user")
public class UserResource {
	
//	private static final Logger LOG = LoggerFactory
//			.getLogger(UserResource.class);
	
//	@Autowired
//	private UserService userService;

	@GET
	@Produces("application/json")
	public List<User> findUsers() {
        User user = new User();
        user.setId(1l);
        user.setUsername("lee");
        List<User> users = new LinkedList<User>();
        users.add(user);
		return users;
	}
}