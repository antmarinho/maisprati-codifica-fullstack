package lista7;

public class Url {
	
	String url;

	public Url(String url) {
		
		this.url = url;
	}

	public String getUrl() {
		
		return url;
	}

	public void setUrl(String url) {
		
		this.url = url;
	}

	@Override
	public String toString() {
		
		return "[url = " + url + "]";
	}
	

}
