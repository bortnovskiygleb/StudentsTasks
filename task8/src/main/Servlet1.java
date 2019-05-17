package main;

import java.io.IOException;
import java.io.PrintWriter;

public class Servlet1 extends javax.servlet.http.HttpServlet {
    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.getOutputStream().print("<html><h1 style='color:red'>Application Is Running</h1></html>");
    }
}
