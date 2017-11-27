package beans;

public class User {
	private int id;
	private String name;
	
	public User() {
		
	}
	
	public User(int id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public String toString() {
		return "User [id="+id+", name="+name+"]";
	}

}
