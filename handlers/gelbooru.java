import java.net.*;
import java.io.*;

public class gelbooru {
	private String currentQuery;
	private String baseGelbooru = "http://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=blank1&tags=blank2"
	private int limit;

	public gelbooru () {
		 currentQuery = "";
		 limit = 10;
	}

	public String returnQuery(String s) {
		String [] urls = queryWebsite



	}

	public setLimit (int l) {
		limit = l;
	}


	private String queryWebsite () {
		URL gb = new URL(setString());
		BufferedReader in = new BufferedReader(new InputStreamReader(gb.openStream()));

		String inputLine;
        while ((inputLine = in.readLine()) != null)
            System.out.println(inputLine);

        in.close();
	}

	private String setString () {
		currentQuery = baseGelbooru;
		currentQuery = currentQuery.replaceAll("blank1", limit);
		currentQuery = currentQuery.replaceAll("blank2", girls_und_panzer);
	}




}