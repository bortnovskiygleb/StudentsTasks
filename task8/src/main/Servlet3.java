package main;

import jdk.nashorn.internal.ir.debug.JSONWriter;
import netscape.javascript.JSObject;
import org.json.simple.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

@WebServlet(name = "Servlet3",urlPatterns = "/check")
public class Servlet3 extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletOutputStream stream = response.getOutputStream();
        JSONObject json = new JSONObject();
        json.put("sucesss", "true");
        json.put("user", "Gleb");
        stream.println(json.toString());
    }
}
