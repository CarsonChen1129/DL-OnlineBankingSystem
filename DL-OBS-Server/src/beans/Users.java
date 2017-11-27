package beans;

import java.util.List;

public class Users {
	private List<User> userList;
	
	public Users() {
		
	}
	
	public void setUserList(List<User> userList) {
		this.userList = userList;
	}
	
	public List<User> getUserList() {
		return userList;
	}

}
